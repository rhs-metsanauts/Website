import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

export default function MissionPage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/40" />
            <span className="tech-label !text-xs">Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Mission & Goals</h1>
          <p className="text-lg text-text-muted leading-relaxed mb-6">
            What we&apos;re solving for and why it matters.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-4 mb-14">
            <p className="text-text leading-relaxed">
              The HERA program at NASA is part of the Artemis II series of missions that plan to launch
              within the next 1&ndash;2 years. Our challenge is to aid the astronauts&mdash;teachers,
              geologists, and specialists&mdash;on these missions by designing a set of 4 rovers to
              traverse the harsh environments of the Moon and Mars, alongside a model landscape that
              accurately simulates those extraterrestrial conditions.
            </p>
            <p className="text-text-muted leading-relaxed">
              In practice, these rovers would be used to scout and map the terrain, as well as for
              the mining of precious metals.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h2 className="text-xl font-bold text-text-bright mb-5">Goals</h2>
          <ul className="space-y-3 mb-14">
            {[
              "Build an accurate 8 ft \u00d7 8 ft lunar environment where rovers can navigate and carry out tasks",
              "Create a physical rover capable of mining, support, and reconnaissance missions",
              "Test rover performance on mock Lunar and Martian conditions",
              "Immerse astronauts into a realistic mission experience",
              "Make a user-friendly way to control and adjust the rover",
            ].map((goal) => (
              <li key={goal} className="flex gap-3 text-text leading-relaxed">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                {goal}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <div className="bg-surface rounded-xl p-6 border border-border">
              <span className="tech-label !text-[11px] text-amber/70 mb-2 block">Program</span>
              <h3 className="font-semibold text-text-bright mb-2">NASA HUNCH</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                High School Students United with NASA to Create Hardware. Connects student
                teams with real NASA engineering challenges, providing hands-on experience in
                aerospace design and fabrication.
              </p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-border">
              <span className="tech-label !text-[11px] text-amber/70 mb-2 block">Facility</span>
              <h3 className="font-semibold text-text-bright mb-2">HERA</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The Human Exploration Research Analog at Johnson Space Center simulates deep-space
                missions. Our rovers and terrain are designed to operate within HERA mission scenarios.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <ImagePlaceholder label="HERA habitat / NASA HUNCH program photo" />
        </FadeIn>
      </div>
    </div>
  );
}
