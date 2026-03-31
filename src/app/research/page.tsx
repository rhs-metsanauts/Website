import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ResearchPage() {
  return (
    <div className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent/30" />
            <span className="tech-label">Research & Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-bright mb-4 tracking-tight">Technical Overview</h1>
          <p className="text-text-muted mb-12">
            METSAnauts — NASA HUNCH, FDR 2026
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="space-y-3 mb-14 text-text leading-relaxed">
            <p>
              The METSAnauts project delivers a fleet of four small rovers and a companion terrain
              simulation for use inside NASA&apos;s HERA analog habitat at Johnson Space Center.
              The system is designed for non-technical astronaut crew: a web-based control interface
              — including an AI-powered natural language mode — lets crew operate rovers without
              robotics experience.
            </p>
            <p className="text-text-muted">
              HERA (Human Exploration Research Analog) simulates long-duration deep-space missions.
              Our rovers give crew a hands-on tool for surface exploration tasks and terrain
              assessment during those simulations.
            </p>
          </div>
        </FadeIn>

        {[
          {
            tag: "MOBILITY",
            title: "Rover platform",
            image: "/images/rover_subsystems.svg",
            items: [
              "Six-wheel drive with rocker-bogie suspension for passive obstacle navigation",
              "Half-tread wheels for grip on loose and uneven terrain",
              "Raspberry Pi 4B as the onboard compute unit",
              "Modular design — components are easy to replace or swap in the field",
              "Robotic sample-collection claw for object manipulation tasks",
            ],
          },
          {
            tag: "COMMUNICATIONS",
            title: "Multi-mode communication",
            items: [
              "Primary long-range link via LoRa (SX1276), chosen for range and reliability in enclosed environments",
              "WiFi and Bluetooth as secondary channels for close-range and real-time control",
              "RP2040 coprocessor handles the LoRa radio stack separately from the main Pi",
              "USB hot-swap allows the comms module to be replaced without disassembly",
            ],
          },
          {
            tag: "POWER",
            title: "Solar power & tracking",
            items: [
              "Onboard solar panels provide supplemental and emergency power",
              "Dual light-dependent resistors (LDRs) compare illumination across faces",
              "Rover body can rotate to maximize panel exposure at low sun angles",
              "Design is reversible — functions correctly whether rover is upright or flipped",
              "Researched electrostatic dust-removal methods inspired by MIT lunar regolith work",
            ],
          },
          {
            tag: "CONTROL INTERFACE",
            title: "Astronaut control app",
            items: [
              "Web application built for non-technical crew aboard HERA",
              "Standard command mode: discrete controls for movement, claw, and camera",
              "AI-powered mode: crew types plain-language instructions, system generates rover commands",
              "Secondary camera on the claw provides tool-perspective view during sample collection",
              "Designed to work reliably under the communication constraints of the HERA habitat",
            ],
          },
          {
            tag: "TERRAIN",
            title: "BothScape simulation",
            image: "/images/bothscape_layout.svg",
            items: [
              "8′ × 8′ dual-surface terrain representing lunar south pole and ancient Martian terrain",
              "Constructed from foamboard base, foam gap filler for surface features, diatomaceous earth as lunar regolith",
              "Split-surface design lets crew run side-by-side planetary comparison scenarios",
              "Sized to fit within the HERA habitat footprint",
            ],
          },
        ].map((section, si) => (
          <FadeIn key={section.title} delay={si * 70}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="tech-label !text-[10px]">{section.tag}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-bright mb-4">{section.title}</h2>
                <ul className="space-y-2 mb-6">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {section.image && (
                  <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden border border-border bg-black">
                    <Image src={section.image} alt={section.title} fill className="object-contain" sizes="100vw" />
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
