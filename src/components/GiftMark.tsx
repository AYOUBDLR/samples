export function GiftMark() {
  return (
    <div
      className="inline-flex items-center justify-center gap-3 select-none"
      aria-label="Free Samples"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_2px_6px_rgba(230,59,25,0.22)]"
        aria-hidden="true"
      >
        {/* Box Base */}
        <rect x="7" y="19" width="34" height="23" rx="2.5" fill="#E63B19" />
        {/* Side Shading */}
        <path
          d="M29 19H38.5C39.8807 19 41 20.1193 41 21.5V39.5C41 40.8807 39.8807 42 38.5 42H29V19Z"
          fill="#C92B0C"
        />
        {/* Lid */}
        <rect x="5" y="13.5" width="38" height="7" rx="2" fill="#F04826" />
        <path
          d="M29 13.5H41C42.1046 13.5 43 14.3954 43 15.5V18.5C43 19.6046 42.1046 20.5 41 20.5H29V13.5Z"
          fill="#D53110"
        />
        {/* Silver Vertical Ribbon */}
        <rect x="20.5" y="13.5" width="7" height="28.5" fill="#E4E4E7" />
        <rect x="24" y="13.5" width="3.5" height="28.5" fill="#D4D4D8" />
        {/* Ribbon Bow */}
        <path
          d="M24 13.5C24 13.5 17 5.5 12.5 8.5C9.5 10.5 12 14.5 18.5 14.5L24 13.5Z"
          fill="#F4F4F5"
          stroke="#D4D4D8"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M24 13.5C24 13.5 31 5.5 35.5 8.5C38.5 10.5 36 14.5 29.5 14.5L24 13.5Z"
          fill="#E4E4E7"
          stroke="#CBD5E1"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="13.5" r="2.6" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.2" />
      </svg>

      <span className="font-display text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[#E63B19] uppercase">
        Free Samples
      </span>
    </div>
  );
}
