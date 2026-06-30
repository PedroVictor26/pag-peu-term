export function Wordmark({ peuSize = 'text-[1.6rem]' }: { peuSize?: string }) {
  return (
    <a href="/" className="flex items-baseline gap-2">
      <span
        className={`font-display-italic ${peuSize} leading-none`}
        style={{ fontStyle: 'italic' }}
      >
        Peu
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-accent)]">
        term
      </span>
    </a>
  )
}
