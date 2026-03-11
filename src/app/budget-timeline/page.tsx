import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BudgetTimelinePage() {
  return (
    <div className="py-16 sm:py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Planning</p>
        <h1 className="text-3xl font-bold text-text-bright mb-10">Budget & Timeline</h1>

        {/* Budget */}
        <h2 className="text-lg font-semibold text-text-bright mb-4">Budget</h2>

        <ImagePlaceholder label="Budget chart — cost breakdown by category" aspectRatio="aspect-[2/1]" className="mb-6" />

        <div className="overflow-x-auto border border-border rounded-lg mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left py-2.5 px-4 text-text-muted font-medium">Category</th>
                <th className="text-left py-2.5 px-4 text-text-muted font-medium">Item</th>
                <th className="text-right py-2.5 px-4 text-text-muted font-medium">Qty</th>
                <th className="text-right py-2.5 px-4 text-text-muted font-medium">Unit</th>
                <th className="text-right py-2.5 px-4 text-text-muted font-medium">Total</th>
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
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="py-2.5 px-4 text-text-muted">{cat}</td>
                  <td className="py-2.5 px-4 text-text-bright">{item}</td>
                  <td className="py-2.5 px-4 text-right text-text-muted">{qty}</td>
                  <td className="py-2.5 px-4 text-right text-text-muted">{unit}</td>
                  <td className="py-2.5 px-4 text-right text-text-bright">{total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-border bg-surface">
                <td colSpan={4} className="py-2.5 px-4 text-right font-medium text-text-bright">Estimated total</td>
                <td className="py-2.5 px-4 text-right font-medium text-text-bright">$1,278</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="text-xs text-text-muted mb-16">Placeholder estimates. Replace with actual budget data.</p>

        <hr className="border-border mb-12" />

        {/* Timeline */}
        <h2 className="text-lg font-semibold text-text-bright mb-6">Timeline</h2>

        <div className="space-y-0">
          {[
            { week: "Week of 3/22", title: "Finish first V2 rover", desc: "Complete first iteration with all core systems integrated." },
            { week: "Week of 3/29", title: "Finish second V2 rover", desc: "Build and test second unit to establish fleet capability." },
            { week: "Week of 4/5", title: "Complete poster", desc: "Finalize project poster and documentation for FDR." },
            { week: "Week of 4/12", title: "Powered suspension", desc: "Implement and test powered suspension across rover units." },
            { week: "Week of 4/19", title: "Final review", desc: "Integration testing and FDR delivery preparation." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-border last:border-0">
              <span className="text-xs font-mono text-text-muted w-24 shrink-0 pt-0.5">{item.week}</span>
              <div>
                <p className="text-sm font-medium text-text-bright">{item.title}</p>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
