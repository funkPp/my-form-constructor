import type { ReactNode } from "react";

export function Card({
  typeClass,
  children,
}: {
  typeClass: string;
  children: ReactNode;
}) {
  const clasees: { [index: string]: string } = {
    main: `max-w-sm mx-auto bg-gray-100 m-3 p-3 border border-gray-200 rounded-sm shadow`,
  };

  return <div className={clasees[typeClass]}>{children}</div>;
}
