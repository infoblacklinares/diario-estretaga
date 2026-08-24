import { AdSlot } from "@/components/ad-slot";
import { BreakingTicker } from "@/components/breaking-ticker";
import { HeroStory } from "@/components/hero-story";
import { Newsletter } from "@/components/newsletter";
import { SectionHead } from "@/components/section-head";
import { StoryCard } from "@/components/story-card";
import { TopicChips } from "@/components/topic-chips";
import { getFeatured, getLatest } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function PortadaPage() {
  const featured = getFeatured();
  const latest = getLatest();

  // La publicidad se intercala después de la cuarta nota, como en el mockup
  const beforeAd = latest.slice(0, 4);
  const afterAd = latest.slice(4, 8);

  return (
    <>
      <BreakingTicker />
      <HeroStory article={featured} />

      <SectionHead title="Lo más reciente" href="/secciones" />
      {beforeAd.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <AdSlot />

      {afterAd.map((article) => (
        <StoryCard key={article.slug} article={article} />
      ))}

      <SectionHead title={`Explora ${siteConfig.name}`} />
      <TopicChips />

      <Newsletter />
    </>
  );
}
