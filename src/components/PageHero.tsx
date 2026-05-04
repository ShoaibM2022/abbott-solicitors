import Link from "next/link";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  overline?: string;
  title: string;
  titleAccent?: string;   // italic gold word appended after title
  subtitle?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({ overline, title, titleAccent, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-[#0A0B0F] pt-36 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Ambient diagonal gold line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full"
          style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.04) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/25 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-[#8A8A94] hover:text-[#C9A84C] text-[10px] tracking-[0.22em] uppercase font-sans transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-[#C9A84C]/40 text-[10px]">›</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[#8A8A94] hover:text-[#C9A84C] text-[10px] tracking-[0.22em] uppercase font-sans transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#C9A84C] text-[10px] tracking-[0.22em] uppercase font-sans">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Overline */}
        {overline && (
          <div className="wicked-fadeIn flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] tracking-[0.38em] uppercase font-sans">{overline}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="wicked-slideUp serif font-light leading-tight text-[#F0EDE6] mb-5"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}>
          {title}
          {titleAccent && <em className="italic text-[#C9A84C] not-italic block sm:inline"> {titleAccent}</em>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="wicked-slideUp wicked-delay-2 text-[#8A8A94] text-[15px] leading-relaxed max-w-2xl font-sans">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
