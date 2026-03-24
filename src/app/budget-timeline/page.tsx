import ImagePlaceholder from "@/components/ImagePlaceholder";
import FadeIn from "@/components/FadeIn";

export default function BudgetTimelinePage() {
  return (
    <div className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-amber/40" />
            <span className="tech-label">Section 05</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-bright mb-12 tracking-tight">Budget & Timeline</h1>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="text-xl font-bold text-text-bright mb-5">Budget</h2>
          <ImagePlaceholder label="Budget chart \u2014 cost breakdown by category" aspectRatio="aspect-[2/1]" className="mb-6" />
        </FadeIn>

        <FadeIn delay={150}>
          <div className="overflow-x-auto border border-border rounded-xl mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left py-3 px-5 text-text-muted font-medium">Category</th>
                  <th className="text-left py-3 px-5 text-text-muted font-medium">Item</th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium">Qty</th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium">Unit</th>
                  <th className="text-right py-3 px-5 text-text-muted font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Electronics", "Raspberry Pi 4B", "4", "$55", "$220"],
                  ["Electronics", "LoRa Modules (SX1276)", "8", "$12", "$96"],
                  ["Electronics", "Motor Controllers", "24", "$8", "$192"],
                  ["Mechanical", "DC Motors", "24", "$6", "$144"],
                  ["Mechanical", "3D Print Filament", "6", "$22", "$132"],
                  ["Mechanical", "Robotic Claw Kit", "4", "$35", "$140"],
                  ["BothScape", "Foamboard Sheets", "16", "$5", "$80"],
                  ["BothScape", "Foam Gap Filler", "8", "$8", "$64"],
                  ["BothScape", "Diatomaceous Earth", "2", "$15", "$30"],
                  ["Power", "Solar Panels", "8", "$10", "$80"],
                  ["Power", "LiPo Batteries", "4", "$25", "$100"],
                ].map(([cat, item, qty, unit, total], i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface transition-colors">
                    <td className="py-3 px-5 text-text-muted">{cat}</td>
                    <td className="py-3 px-5 text-text-bright">{item}</td>
                    <td className="py-3 px-5 text-right text-text-muted">{qty}</td>
                    <td className="py-3 px-5 text-right text-text-muted">{unit}</td>
                    <td className="py-3 px-5 text-right font-medium text-amber" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>{total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border bg-surface">
                  <td colSpan={4} className="py-3 px-5 text-right font-semibold text-text-bright">Estimated total</td>
                  <td className="py-3 px-5 text-right font-semibold text-amber" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>$1,278</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-text-muted mb-20">Placeholder estimates. Replace with actual budget data.</p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-xl font-bold text-text-bright mb-8">Timeline</h2>
          <div className="space-y-0">
            {[
              { week: "Week of 3/22", title: "Finish first V2 rover", desc: "Complete first iteration with all core systems integrated." },
              { week: "Week of 3/29", title: "Finish second V2 rover", desc: "Build and test second unit to establish fleet capability." },
              { week: "Week of 4/5", title: "Complete poster", desc: "Finalize project poster and documentation for FDR." },
              { week: "Week of 4/12", title: "Powered suspension", desc: "Implement and test powered suspension across rover units." },
              { week: "Week of 4/19", title: "Final review", desc: "Integration testing and FDR delivery preparation." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-5 py-5 border-b border-border last:border-0">
                  <span className="text-xs font-semibold text-amber bg-amber-soft px-3 py-1 rounded-md h-fit shrink-0" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>{item.week}</span>
                  <div>
                    <p className="font-medium text-text-bright">{item.title}</p>
                    <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
