import { useState } from "react";
import { Card } from "./ui/Card";
import fetchJson from "./shared/api";
import type { IData, IEnumObj } from "./shared/types";

function App() {
  const [count, setCount] = useState(0);

  const data: IData = fetchJson();
  enumeration(data);

  return (
    <div className="bg-[#282c34] min-h-[100vh] flex flex-col items-center justify-center ">
      <Card typeClass="main">
        <div>dddddd</div>
      </Card>
    </div>
  );
}

export default App;

function enumeration(data: IData) {
  const enumArray: IEnumObj[] = [];
  for (const key in data) {
    const value = data[key as keyof IData];
    if (Array.isArray(value)) {
      // console.log(`Array Ключ: ${key}, Значение: ${value}`);
      enumArray.push({ name: "select", key, value });
    }
    if (typeof value === "boolean") {
      // console.log(`Boolean Ключ: ${key}, Значение: ${value}`);
      enumArray.push({ name: "checkbox", key, value });
    }
    if (typeof value === "string" || typeof value === "number") {
      // console.log(`String/number Ключ: ${key}, Значение: ${value}`);
      enumArray.push({ name: "input", key, value });
    }
  }
  console.log(enumArray);
  return enumArray;
}
