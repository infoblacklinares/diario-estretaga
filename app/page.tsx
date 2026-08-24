import { AdSlot } from "@/components/ad-slot";
import { FlashTicker } from "@/components/flash-ticker";
import { HeroStory } from "@/components/hero-story";
import { Newsletter } from "@/components/newsletter";
import { SectionHead } from "@/components/section-head";
import { StoryCard } from "@/components/story-card";
import { TopicChips } from "@/components/topic-chips";
import { TrendingList } from "@/components/trending-list";
import { getFeatured, getLatest, getTrending } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function PortadaPage() {
  const featured = getFeatured();

  // Las notas de Tendencias se muestran aparte: sacarlas del listado
  // evita que el mismo titular aparezca dos veces seguidas.
  const enTendencias = new Set(getTrending().map((a) => a.slug));
  const latest = getLatest().filter((a) => !enTendencias.has(a.slug));

  // La publicidad se intercala después de la cuarta nota
  const antesDelAviso = latest.slice(0, 4);
  const despuesDelAviso = latest.slice(4, 8);

  return (
    <>
      <FlashTicker />
      <HeroStory article={featured} />

      <SectionHead title="Lo más reciente" href="/secciones" />
      {antesDelAviso.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <SectionHead title="Tendencias" />
      <TrendingList />

      <AdSlot />

      {despuesDelAviso.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <SectionHead title={`Explora ${siteConfig.name}`} />
      <TopicChips />

      <Newsletter />
    </>
  );
}
