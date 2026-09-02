import type { ReactNode } from "react";

/** Näkyvä placeholder puuttuvalle tiedolle: [puhelinnumero] */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="todo">[{children}]</span>;
}

/**
 * Renderöi arvon jos se on syötetty, muuten korostetun placeholderin.
 * Näin täyttämätön kenttä ei koskaan mene tuotantoon huomaamatta.
 */
export function Value({
  value,
  placeholder,
}: {
  value: string | null;
  placeholder: string;
}) {
  return value ? <>{value}</> : <Todo>{placeholder}</Todo>;
}
