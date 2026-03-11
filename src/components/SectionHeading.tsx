interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-2xl font-bold text-text-bright tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-text-muted">{subtitle}</p>}
    </div>
  );
}
