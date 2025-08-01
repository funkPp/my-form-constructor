import type { ReactNode } from "react";

export function Card({
  typeClass,
  children,
}: {
  typeClass: string;
  children: ReactNode;
}) {
  const clasees: { [index: string]: string } = {
    main: `w-sm mx-auto bg-gray-200 m-2 p-2 border border-gray-200 rounded-sm shadow`,
  };

  return <div className={clasees[typeClass]}>{children}</div>;
}
