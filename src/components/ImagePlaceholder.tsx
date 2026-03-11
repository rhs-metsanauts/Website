interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({ label, aspectRatio = "aspect-video", className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`${aspectRatio} bg-surface-2 border border-border rounded-lg flex items-center justify-center ${className}`}>
      <p className="text-xs text-text-muted px-4 text-center">{label}</p>
    </div>
  );
}
