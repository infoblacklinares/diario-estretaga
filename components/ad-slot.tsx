/**
 * Espacio publicitario. Hoy es un placeholder con las medidas reales;
 * cuando se conecte Google Ad Manager / AdSense, sólo cambia el interior.
 */
export function AdSlot({ label = "Espacio publicitario · formato in-line" }: { label?: string }) {
  return (
    <div
      className="my-5 flex min-h-[100px] items-center justify-center rounded-2xl border border-dashed border-[#b9c0ca] bg-[#eef0f3] px-4 text-center text-[10px] uppercase tracking-[1px] text-[#98a2b3]"
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
