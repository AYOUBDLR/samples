interface HeaderProps {
  onClaimClick: () => void;
}

export function Header({ onClaimClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-base sm:text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] focus-visible:ring-offset-2 rounded"
        >
          Free Samples by Mail
        </a>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600"
        >
          <a
            href="#samples"
            className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] rounded px-1 py-1"
          >
            Available Kits
          </a>
          <a
            href="#how-it-works"
            className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] rounded px-1 py-1"
          >
            How It Works
          </a>
          <a
            href="#eligibility"
            className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] rounded px-1 py-1"
          >
            US Eligibility
          </a>
          <a
            href="#faq"
            className="hover:text-zinc-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] rounded px-1 py-1"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onClaimClick}
            className="inline-flex items-center justify-center px-4 py-2.5 min-h-[40px] text-sm font-semibold text-white bg-[#E63B19] hover:bg-[#C82F11] active:scale-[0.99] rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E63B19] focus-visible:ring-offset-2"
          >
            Claim Samples
          </button>
        </div>
      </div>
    </header>
  );
}
