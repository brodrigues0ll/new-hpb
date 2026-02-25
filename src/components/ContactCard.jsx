"use client";

export const ContactCard = ({ children, href, ariaLabel }) => {
  const inner = (
    <div
      className="
        group relative
        glass border border-white/8
        rounded-2xl p-7
        flex flex-col items-center justify-center gap-4
        w-full max-w-[260px] min-h-[200px]
        card-hover cursor-default
        overflow-hidden
      "
    >
      {/* Orange accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-600 to-amber-400 group-hover:w-full transition-all duration-500"
        aria-hidden="true"
      />
      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(234,88,12,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="block"
      >
        {inner}
      </a>
    );
  }

  return inner;
};
