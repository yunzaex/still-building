import type { ReactNode } from "react";

type ProjectDetailSectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

export default function ProjectDetailSection({
  number,
  title,
  children,
}: ProjectDetailSectionProps) {
  return (
    <section className="border-b border-(--line) py-14 sm:py-16 md:py-20">
      <div className="grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
        <header>
          <p className="type-label text-(--brown-light)">
            {number} / {title}
          </p>
        </header>

        <div>{children}</div>
      </div>
    </section>
  );
}
