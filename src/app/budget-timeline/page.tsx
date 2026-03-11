import SectionHeading from "@/components/SectionHeading";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const timelineItems = [
  {
    week: "Week of 3/22",
    num: "03",
    title: "Finish First V2 Rover",
    desc: "Complete the first iteration of the V2 rover design with all core systems integrated.",
  },
  {
    week: "Week of 3/29",
    num: "04",
    title: "Finish Second V2 Rover",
    desc: "Build and test the second V2 rover unit to establish fleet capability.",
  },
  {
    week: "Week of 4/5",
    num: "05",
    title: "Complete Poster",
    desc: "Finalize the project poster and documentation for FDR presentation.",
  },
  {
    week: "Week of 4/12",
    num: "06",
    title: "Powered Suspension",
    desc: "Implement and test the powered suspension system across rover units.",
  },
  {
    week: "Week of 4/19",
    num: "",
    title: "Final Review",
    desc: "Final integration testing and preparation for FDR delivery.",
  },
];

export default function BudgetTimelinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 starfield">
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 to-space-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Budget & Timeline</h1>
          <p className="text-lg text-lunar-silver/60">Project planning and resource allocation</p>
        </div>
      </section>

      {/* Budget Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Budget" subtitle="Project cost breakdown and resource allocation" />

          {/* Budget Chart Placeholder */}
          <div className="mb-10">
            <ImagePlaceholder label="Budget Chart — Pie chart or bar graph of cost categories" aspectRatio="aspect-[16/9]" className="max-w-3xl mx-auto" />
          </div>

          {/* Budget Spreadsheet Placeholder */}
          <div className="bg-space-gray/50 border border-white/5 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 bg-space-gray/80">
              <h3 className="text-lg font-bold text-white">Budget Spreadsheet</h3>
              <p className="text-sm text-lunar-silver/50">Detailed line-item budget for the project</p>
            </div>
            <div className="p-6">
              {/* Example budget table structure */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-lunar-silver/60 font-medium">Category</th>
                      <th className="text-left py-3 px-4 text-lunar-silver/60 font-medium">Item</th>
                      <th className="text-right py-3 px-4 text-lunar-silver/60 font-medium">Qty</th>
                      <th className="text-right py-3 px-4 text-lunar-silver/60 font-medium">Unit Cost</th>
                      <th className="text-right py-3 px-4 text-lunar-silver/60 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-lunar-silver/70">
                    {[
                      { cat: "Electronics", item: "Raspberry Pi 4B", qty: 4, unit: "$55.00", total: "$220.00" },
                      { cat: "Electronics", item: "LoRa Modules (SX1276)", qty: 8, unit: "$12.00", total: "$96.00" },
                      { cat: "Electronics", item: "Motor Controllers", qty: 24, unit: "$8.00", total: "$192.00" },
                      { cat: "Mechanical", item: "DC Motors (6 per rover)", qty: 24, unit: "$6.00", total: "$144.00" },
                      { cat: "Mechanical", item: "3D Printing Filament", qty: 6, unit: "$22.00", total: "$132.00" },
                      { cat: "Mechanical", item: "Robotic Claw Kit", qty: 4, unit: "$35.00", total: "$140.00" },
                      { cat: "BothScape", item: "Foamboard Sheets", qty: 16, unit: "$5.00", total: "$80.00" },
                      { cat: "BothScape", item: "Foam Gap Filler", qty: 8, unit: "$8.00", total: "$64.00" },
                      { cat: "BothScape", item: "Diatomaceous Earth (10 lb)", qty: 2, unit: "$15.00", total: "$30.00" },
                      { cat: "Power", item: "Solar Panels (small)", qty: 8, unit: "$10.00", total: "$80.00" },
                      { cat: "Power", item: "LiPo Batteries", qty: 4, unit: "$25.00", total: "$100.00" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="py-3 px-4">{row.cat}</td>
                        <td className="py-3 px-4 text-white">{row.item}</td>
                        <td className="py-3 px-4 text-right">{row.qty}</td>
                        <td className="py-3 px-4 text-right">{row.unit}</td>
                        <td className="py-3 px-4 text-right text-accent-cyan">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-white/10">
                      <td colSpan={4} className="py-3 px-4 text-right font-bold text-white">Estimated Total</td>
                      <td className="py-3 px-4 text-right font-bold text-accent-cyan">$1,278.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="mt-4 text-xs text-lunar-silver/40 italic">
                * Placeholder budget estimates. Replace with actual budget spreadsheet data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-space-dark px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Timeline" subtitle="Project milestones and deliverables" />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-nasa-blue/30 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {timelineItems.map((item, i) => (
                <div key={i} className="flex gap-6">
                  {/* Dot */}
                  <div className="hidden sm:flex shrink-0 w-12 items-start justify-center pt-6">
                    <div className="w-3 h-3 rounded-full bg-accent-cyan border-2 border-space-dark" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-6 rounded-xl bg-space-gray/50 border border-white/5 card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      {item.num && (
                        <span className="text-xs font-bold text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">
                          {item.num}
                        </span>
                      )}
                      <span className="text-xs text-lunar-silver/40">{item.week}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-lunar-silver/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
