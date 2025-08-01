import { Card } from "./ui/Card";
import fetchJson from "./shared/api";
import type { IData, IEnumObj } from "./shared/types";
import { Form } from "./ui/Form";

function App() {
  const data: IData = fetchJson();
  const enumArray = enumeration(data);

  return (
    <div className="bg-[#282c34] min-h-[100vh] flex flex-col items-center justify-center ">
      <Card typeClass="main">
        <Form data={enumArray} />
      </Card>
      <div className="max-w-sm"></div>
    </div>
  );
}

export default App;

function enumeration(data: IData) {
  const enumArray: IEnumObj[] = [];
  for (const key in data) {
    const value = data[key as keyof IData];
    if (Array.isArray(value)) {
      enumArray.push({ name: "select", key, value, valueCurrent: value[0] });
    }
    if (typeof value === "boolean") {
      enumArray.push({ name: "checkbox", key, value, valueCurrent: "" });
    }
    if (typeof value === "string" || typeof value === "number") {
      enumArray.push({ name: "input", key, value, valueCurrent: "" });
    }
  }

  return enumArray;
}
