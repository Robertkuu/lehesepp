/** Wordmark with the leaf mark: a square with two opposite corners fully rounded.
 *  It reads as a leaf and as a page at once ("leht" means both). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="block size-[0.8em] rounded-[0_100%_0_100%] bg-leaf" />
      <span className="font-display text-[1.25em] font-bold leading-none tracking-[-0.03em]">lehesepp</span>
    </span>
  );
}
