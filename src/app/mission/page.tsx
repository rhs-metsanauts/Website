import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function MissionPage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Mission</p>
        <h1 className="text-3xl font-bold text-text-bright mb-8">Problem Statement & Goals</h1>

        <div className="space-y-4 mb-12">
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

        <h2 className="text-lg font-semibold text-text-bright mb-4">Goals</h2>

        <ul className="space-y-3 mb-12">
          {[
            "Build an accurate 8 ft × 8 ft lunar environment where rovers can navigate and carry out tasks",
            "Create a physical rover capable of mining, support, and reconnaissance missions",
            "Test rover performance on mock Lunar and Martian conditions",
            "Immerse astronauts into a realistic mission experience",
            "Make a user-friendly way to control and adjust the rover",
          ].map((goal) => (
            <li key={goal} className="flex gap-3 text-sm text-text leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-blue shrink-0" />
              {goal}
            </li>
          ))}
        </ul>

        <hr className="border-border mb-12" />

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-text-bright mb-2">NASA HUNCH</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              High School Students United with NASA to Create Hardware. Connects student
              teams with real NASA engineering challenges, providing hands-on experience in
              aerospace design and fabrication.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-bright mb-2">HERA</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              The Human Exploration Research Analog at Johnson Space Center simulates deep-space
              missions. Our rovers and terrain are designed to operate within HERA mission scenarios.
            </p>
          </div>
        </div>

        <ImagePlaceholder label="HERA habitat / NASA HUNCH program photo" />
      </div>
    </div>
  );
}
