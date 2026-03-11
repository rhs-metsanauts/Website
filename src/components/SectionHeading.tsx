interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lunar-silver/70 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-nasa-blue to-accent-cyan rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
