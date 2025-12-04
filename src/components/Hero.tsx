/**
 * Hero Component
 * 
 * The main hero section for the homepage.
 * Displays in the right column (main content area).
 * 
 * Features:
 * - Section label
 * - Main heading/tagline
 * - Intro paragraph
 * - Two CTA buttons (accessible, keyboard-focusable)
 * - Optional decorative bottom border
 */

interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section 
      className={`
        py-16 
        md:py-24 
        lg:py-32
        ${className}
      `}
      aria-labelledby="hero-heading"
    >
      {/* Section Label */}
      <p className="text-gold text-sm font-medium tracking-wide mb-4">
        Welcome
      </p>

      {/* Main Heading */}
      <h1 
        id="hero-heading"
        className="
          font-serif 
          text-3xl 
          md:text-4xl 
          lg:text-5xl 
          text-sand 
          leading-tight 
          mb-6
        "
      >
        Building software that&apos;s
        <br />
        <span className="text-gold">accessible</span>,{" "}
        <span className="text-gold">humane</span>,
        <br />
        and built to last.
      </h1>

      {/* Intro Paragraph */}
      <p className="
        text-sand/70 
        text-base 
        md:text-lg 
        leading-relaxed 
        max-w-xl 
        mb-10
      ">
        I&apos;m a senior software engineer who crafts high-performance web 
        experiences, mentors the next generation of engineers, and speaks 
        about engineering culture, search systems, and building technology 
        that respects people.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="/projects"
          className="
            inline-flex 
            items-center 
            justify-center
            px-6 
            py-3
            border 
            border-sand 
            text-sand
            text-sm
            font-medium
            transition-colors 
            duration-200
            hover:bg-sand 
            hover:text-forest
            focus:outline-none 
            focus:ring-2 
            focus:ring-gold 
            focus:ring-offset-2 
            focus:ring-offset-forest
          "
        >
          View Projects
        </a>

        <a
          href="/talks"
          className="
            inline-flex 
            items-center 
            justify-center
            px-6 
            py-3
            border 
            border-sand/30
            text-sand/80
            text-sm
            font-medium
            transition-colors 
            duration-200
            hover:border-sand 
            hover:text-sand
            focus:outline-none 
            focus:ring-2 
            focus:ring-gold 
            focus:ring-offset-2 
            focus:ring-offset-forest
          "
        >
          Watch a Talk
        </a>
      </div>

      {/* Decorative Bottom Border */}
      <div 
        className="mt-16 md:mt-24 h-px bg-gradient-to-r from-sand/20 via-gold/30 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

