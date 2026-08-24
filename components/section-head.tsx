import Link from "next/link";

type Props = {
  title: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHead({ title, href, linkLabel = "Ver todas" }: Props) {
  return (
    <div className="mt-7 mb-3 flex items-center justify-between px-0.5">
      <h2 className="text-[17px] font-bold tracking-[-0.3px] text-ink">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-[11px] font-bold text-accent transition-opacity hover:opacity-70"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
