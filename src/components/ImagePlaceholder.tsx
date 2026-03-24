interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({ label, aspectRatio = "aspect-video", className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`${aspectRatio} bg-surface border border-border border-dashed rounded-xl flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg className="w-6 h-6 text-text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
      <p className="text-xs text-text-muted px-4 text-center">{label}</p>
    </div>
  );
}
