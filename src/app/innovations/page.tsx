import SectionHeading from "@/components/SectionHeading";

const innovations = [
  {
    num: "01",
    title: "Solar Panel Placement",
    desc: "The solar panels are mounted on the bottom of the rover. Due to the flexible rocker-bogie suspension system, they can tilt upward to catch sunlight even when the sun sits low on the horizon — like on the lunar south pole.",
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/20",
  },
  {
    num: "02",
    title: "LoRa Communication Fallback",
    desc: "Lets astronauts send basic commands to the rover over distances up to ~1 km. This acts as a reliable backup when the rover is too far for a WiFi signal to reach.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
  },
  {
    num: "03",
    title: "Astronaut-Friendly UI",
    desc: "An intuitive web app lets astronauts control the rover over WiFi or LoRa with no technical knowledge required. An AI-powered interface dynamically generates code, allowing astronauts to use the program more easily.",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
  },
  {
    num: "04",
    title: "LAN Connectivity",
    desc: "A laptop hosts a local area network, allowing the rover to connect directly with no internet needed — keeping communication fast and reliable in any environment.",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
  },
  {
    num: "05",
    title: "Half-Tread System",
    desc: "The half-tread system increases grip compared to just 6 independent wheels, helping the rover stay stable and traverse uneven terrain on both lunar and Martian surfaces.",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
  },
  {
    num: "06",
    title: "Powered Suspension",
    desc: "The rover's flexible suspension lets it shift and adjust its body to match terrain or angle towards the sun, making the rover more adaptable and energy-efficient.",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
];

export default function InnovationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Key Innovations</h1>
          <p className="text-lg text-lunar-silver/60">What sets our rover apart</p>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((item) => (
              <div
                key={item.num}
                className={`p-6 rounded-xl bg-gradient-to-br ${item.color} border ${item.border} card-hover`}
              >
                <div className="text-4xl font-black text-white/10 mb-2">{item.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-lunar-silver/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
