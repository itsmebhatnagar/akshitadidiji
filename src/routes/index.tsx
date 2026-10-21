import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import portraitAsset from "@/assets/akshita-portrait.webp";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Akshita Kanwar Shekhawat | AI Student Portfolio" },
      {
        name: "description",
        content:
          "Explore the portfolio of Akshita Kanwar Shekhawat, a third-year B.Tech Artificial Intelligence student at Anand International College of Engineering. Discover her technical skills, education, and journey in technology.",
      },
      { name: "author", content: "Akshita Kanwar Shekhawat" },
      { property: "og:title", content: "Akshita Kanwar Shekhawat | AI Student Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Akshita Kanwar Shekhawat's portfolio, education, technical skills, and journey as an Artificial Intelligence student.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://akshitashekhawat.vercel.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Akshita Kanwar Shekhawat | AI Student Portfolio" },
      {
        name: "twitter:description",
        content:
          "Explore Akshita Kanwar Shekhawat's portfolio, education, technical skills, and journey as an Artificial Intelligence student.",
      },
    ],
    links: [{ rel: "canonical", href: "https://akshitashekhawat.vercel.app/" }],
  }),
});

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#extracurricular" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || menuOpen
          ? "border-b border-border bg-background"
          : "border-b border-transparent bg-background/0"
          }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-foreground"
          >
            Akshita.
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-foreground transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu — full-screen overlay (outside header so backdrop-filter
          on the header doesn't become its containing block) */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-background transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      >
        <ul className="flex flex-col px-6 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border py-5 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20 lg:px-8 lg:pt-24 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[5rem]">
              Akshita Kanwar
              <br />
              Shekhawat
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-2xl font-display text-xl font-medium leading-snug text-foreground sm:text-2xl lg:text-[1.9rem]">
              Learning, growing, and building my path in technology.
            </p>
          </Reveal>

          <Reveal>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a third-year Artificial Intelligence Student at Anand International
              College of Engineering, building a strong foundation in programming
              while continuously expanding my technical knowledge.
            </p>
          </Reveal>
        </div>

        <Reveal className="md:col-span-5">
          <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-none">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_24px_60px_-24px_rgba(17,17,17,0.22)] ring-1 ring-black/5">
              <img
                src={portraitAsset}
                alt="Akshita Kanwar Shekhawat"
                className="aspect-[4/5] w-full object-cover object-top"
                width={800}
                height={1066}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              01
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              About Me
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl lg:leading-relaxed">
              I'm currently pursuing my B.Tech in Artificial Intelligence at Anand
              International College of Engineering. My focus is on strengthening
              my programming fundamentals, learning new technologies and gradually
              turning what I learn into practical work.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type Skill = {
  name: string;
  description: string;
  status: string;
};

const SKILLS: Skill[] = [
  {
    name: "C",
    description: "Programming fundamentals and problem-solving foundation.",
    status: "Practicing",
  },
  {
    name: "C++",
    description: "Object-oriented programming and core programming concepts.",
    status: "Practicing",
  },
  {
    name: "Python",
    description: "Programming fundamentals and practical programming.",
    status: "Familiar",
  },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-secondary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              02
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Technical Foundation
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-muted-foreground">
              Programming languages I've learned and currently practice.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <Reveal key={skill.name} className="h-full">
              <article className="flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-secondary lg:p-10">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                    {skill.name}
                  </h3>
                  <span className="border border-border px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {skill.status}
                  </span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentlyLearning() {
  return (
    <section id="learning" className="border-t border-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              03
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Currently Learning
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-14 overflow-hidden border border-border bg-secondary p-10 lg:p-16">
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 bg-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background">
                  <span className="h-1.5 w-1.5 bg-background" />
                  Currently Learning
                </span>
                <h3 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
                  Java
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Expanding my programming knowledge with Java and strengthening
                  my understanding of object-oriented programming.
                </p>
              </div>

              <div
                aria-hidden
                className="pointer-events-none select-none font-display text-[7rem] font-extrabold leading-none tracking-tighter text-foreground/5 lg:text-[12rem]"
              >
                JAVA
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type EduEntry = {
  level: string;
  institution: string;
  detail: string;
};

const EDUCATION: EduEntry[] = [
  {
    level: "B.Tech — Artificial Intelligence",
    institution: "Anand International College of Engineering",
    detail: "3rd Year",
  },
  {
    level: "Senior Secondary",
    institution: "SG International School",
    detail: "Class XI – XII",
  },
  {
    level: "Secondary Education",
    institution: "Army School",
    detail: "Class X",
  },
];

function Education() {
  return (
    <section id="education" className="border-t border-border bg-secondary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              04
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Education
            </h2>
          </Reveal>
        </div>

        <div className="mt-14">
          <ol className="relative">
            {/* vertical line */}
            <span
              aria-hidden
              className="absolute left-4 top-2 bottom-2 w-px bg-foreground/25 md:left-1/2"
            />
            {EDUCATION.map((entry, i) => (
              <Reveal as="li" key={entry.level}>
                <div
                  className={`relative mb-10 flex items-start gap-6 md:mb-12 ${i % 2 === 0
                    ? "md:flex-row-reverse md:text-right"
                    : "md:flex-row"
                    }`}
                >
                  <div className="ml-0 w-full md:w-1/2 md:px-10">
                    <div className="border border-border bg-background p-7 transition-colors duration-300 hover:bg-secondary lg:p-8">
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {entry.detail}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                        {entry.level}
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground">
                        {entry.institution}
                      </p>
                    </div>
                  </div>
                  {/* node */}
                  <span
                    aria-hidden
                    className="absolute left-4 top-7 -ml-[5px] h-2.5 w-2.5 rounded-full bg-foreground ring-4 ring-background md:left-1/2"
                  />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

type ClubResponsibility = {
  icon: string;
  title: string;
  description: string;
};

const CLUB_RESPONSIBILITIES: ClubResponsibility[] = [
  {
    icon: "01",
    title: "Shoot Coordination",
    description:
      "Plan and coordinate photography shoots — scouting locations, scheduling sessions, and briefing team members on creative direction.",
  },
  {
    icon: "02",
    title: "Editing Oversight",
    description:
      "Review and approve photo and video edits, working closely with editors to maintain a consistent visual style across all club content.",
  },
  {
    icon: "03",
    title: "Reels & Content Ideas",
    description:
      "Brainstorm and ideate concepts for Instagram Reels and short-form video content, staying up-to-date with trends and creative formats.",
  },
  {
    icon: "04",
    title: "Recorder & Editor Liaison",
    description:
      "Act as the main point of contact between recorders and editors — ensuring smooth handoff of raw footage and clear communication of revisions.",
  },
  {
    icon: "05",
    title: "Edit Approvals",
    description:
      "Final sign-off authority on all edited content before publishing, ensuring quality, brand consistency, and event representation.",
  },
  {
    icon: "06",
    title: "Faculty Advisor Coordination",
    description:
      "Maintain regular communication with the faculty advisor, seeking guidance, presenting plans, and obtaining approvals for club activities.",
  },
  {
    icon: "07",
    title: "Team Management",
    description:
      "Lead and manage the Photography Club team — assigning roles, motivating members, resolving conflicts, and fostering a collaborative creative environment.",
  },
  {
    icon: "08",
    title: "Instagram Page Management",
    description:
      "Manage the official Student Council Instagram page (@studentcouncillaice) — curating content, scheduling posts, and maintaining a consistent presence for the college.",
  },
];

function Extracurricular() {
  return (
    <section
      id="extracurricular"
      className="border-t border-border bg-secondary px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section header */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              05
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Extracurricular
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-lg text-muted-foreground">
              Leadership, creativity, and collaboration beyond the classroom.
            </p>
          </Reveal>
        </div>

        {/* Profile card */}
        <Reveal>
          <div className="relative mt-14 overflow-hidden border border-border bg-background p-8 lg:p-12">
            <div className="relative z-10">
              {/* Role badge */}
              <span className="inline-flex items-center gap-2 bg-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider text-background">
                Student Council
              </span>

              {/* Title */}
              <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                Captain — Photography Club
              </h3>
              <p className="mt-1 text-base font-medium text-muted-foreground">
                Anand International College of Engineering
              </p>

              {/* Divider */}
              <div className="mt-8 h-px w-full bg-border" />

              {/* Responsibilities grid */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {CLUB_RESPONSIBILITIES.map((item, i) => (
                  <Reveal key={item.title}>
                    <div className="group flex flex-col gap-3 border border-border bg-secondary p-6 transition-colors duration-300 hover:bg-background">
                      <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {item.icon}
                      </span>
                      <h4 className="font-display text-base font-bold tracking-tight text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Summary tagline */}
              <Reveal>
                <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Leading the Photography Club means blending creative vision with
                  organisational discipline — from the first shutter click to the
                  final published reel.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Stage = {
  title: string;
  note?: string;
};

const JOURNEY: Stage[] = [
  { title: "Programming Foundations", note: "Start" },
  { title: "C" },
  { title: "C++" },
  { title: "Python" },
  { title: "Java", note: "Currently Learning" },
  { title: "Future Projects", note: "Next Step" },
];

function Journey() {
  return (
    <section id="journey" className="border-t border-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              06
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              My Learning Journey
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-14">
          {JOURNEY.map((stage, i) => {
            const isLast = i === JOURNEY.length - 1;
            const isCurrent = stage.note === "Currently Learning";
            return (
              <Reveal as="li" key={stage.title}>
                <div className="relative flex items-center gap-6 pb-10 lg:gap-10">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-3 w-3 items-center justify-center rounded-full ${isCurrent
                        ? "bg-foreground ring-4 ring-foreground/10"
                        : "bg-foreground"
                        }`}
                    />
                    {!isLast && (
                      <span aria-hidden className="mt-1 h-full w-px min-h-[3.5rem] bg-foreground/20" />
                    )}
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className={`font-display tracking-tight ${isCurrent
                          ? "text-3xl font-extrabold text-foreground lg:text-4xl"
                          : isLast
                            ? "text-2xl font-bold text-muted-foreground lg:text-3xl"
                            : "text-2xl font-bold text-foreground lg:text-3xl"
                          }`}
                      >
                        {stage.title}
                      </h3>
                      {stage.note && (
                        <span
                          className={`border px-2.5 py-1 text-xs font-medium uppercase tracking-wider ${isCurrent
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground"
                            }`}
                        >
                          {stage.note}
                        </span>
                      )}
                    </div>
                    {isLast && (
                      <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                        Projects are the next natural step in my learning journey —
                        turning foundations into real, practical work.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function WhatsNext() {
  return (
    <section className="border-t border-border bg-secondary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            07
          </span>
        </Reveal>
        <Reveal>
          <h2 className="mt-4 font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            What's Next?
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-10 max-w-2xl text-2xl leading-relaxed text-foreground lg:text-3xl lg:leading-relaxed">
            Keep learning. Strengthen my fundamentals. Explore new technologies.
            And eventually turn what I learn into projects that solve real problems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type ContactItem = {
  label: string;
  href: string;
};

const CONTACT_ITEMS: ContactItem[] = [
  { label: "Email", href: "mailto:akshitashekhawat0001@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshita-shekhawat-053359323/",
  },
];

function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                08
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                Let's Connect
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                Whether it's about technology, learning, or simply connecting,
                feel free to reach out.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-12 items-center justify-center border border-foreground bg-background px-7 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-foreground hover:text-background sm:text-base"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold tracking-tight text-foreground">
            Akshita Kanwar Shekhawat
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Learning • Growing • Building
          </p>
        </div>
        <div className="w-full sm:w-auto sm:text-right">
          <p className="text-sm text-muted-foreground">
            © 2026 Akshita Kanwar Shekhawat
          </p>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CurrentlyLearning />
        <Education />
        <Extracurricular />
        <Journey />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
