import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const goals = [
  "Build an accurate 8 ft × 8 ft lunar environment where rovers can navigate and carry out tasks",
  "Create a physical rover capable of mining, support, and reconnaissance missions",
  "Test rover performance on mock Lunar and Martian conditions",
  "Immerse astronauts into a realistic mission experience",
  "Make a user-friendly way to control and adjust the rover",
];

export default function MissionPage() {
  return (
    <div className="py-14 sm:py-20 px-3">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-text-bright mb-4 tracking-tight leading-[1.08]">
            Mission & Goals
          </h1>
          <p className="text-lg text-text-muted leading-relaxed mb-12 max-w-2xl">
            What we&apos;re solving for and why it matters to the future of space exploration.
          </p>
        </FadeIn>

        {/* Overview */}
        <FadeIn delay={100}>
          <div className="space-y-4 mb-14 border-l-2 border-blue/20 pl-6">
            <p className="text-text leading-relaxed">
              The HERA program at NASA is part of the Artemis II series of missions that plan to launch
              within the next 1&ndash;2 years. Our challenge is to aid the astronauts (teachers,
              geologists, and specialists) on these missions by designing a set of 4 rovers to
              traverse the harsh environments of the Moon and Mars, alongside a model landscape that
              accurately simulates those extraterrestrial conditions.
            </p>
            <p className="text-text-muted leading-relaxed">
              In practice, these rovers would be used to scout and map the terrain, as well as for
              the mining of precious metals.
            </p>
          </div>
        </FadeIn>

        {/* Goals */}
        <FadeIn delay={150}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-blue/30" />
              <h2 className="text-xl font-bold text-text-bright">Mission Goals</h2>
            </div>
            <div className="space-y-3">
              {goals.map((goal, i) => (
                <div key={goal} className="flex gap-4 p-4 rounded-xl glass-card hover:border-blue/20 transition-colors">
                  <span className="tech-label !text-[10px] text-blue shrink-0 mt-0.5 w-6 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-text leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Context cards */}
        <FadeIn delay={200}>
          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            <div className="glass-card rounded-xl p-6 glow-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue/10 border border-blue/15 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-blue">Program</span>
              </div>
              <h3 className="font-semibold text-text-bright mb-2">NASA HUNCH</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                High School Students United with NASA to Create Hardware. Connects student
                teams with real NASA engineering challenges, providing hands-on experience in
                aerospace design and fabrication.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 glow-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue/10 border border-blue/15 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="tech-label !text-[10px] text-blue">Facility</span>
              </div>
              <h3 className="font-semibold text-text-bright mb-2">HERA at JSC</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The Human Exploration Research Analog at Johnson Space Center simulates deep-space
                missions. Our rovers and terrain are designed to operate within HERA mission scenarios.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Photo */}
        <FadeIn delay={250}>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-[0_8px_48px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/lunar_landscape.png"
              alt="Lunar landscape terrain model"
              fill
              className="object-cover object-center"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
