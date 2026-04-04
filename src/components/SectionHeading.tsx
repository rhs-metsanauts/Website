interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  accent = false,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {accent && (
        <div className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-blue/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-blue/60" />
          <div className="h-px w-8 bg-blue/40" />
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold tracking-tight ${
          gradient ? "gradient-text" : "text-text-bright"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
