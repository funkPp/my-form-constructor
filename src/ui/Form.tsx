import type { IEnumObj } from "../shared/types";
import { useState } from "react";

export function Form({ data }: { data: IEnumObj[] }) {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (key: string, value: string | boolean) => {
    setFormData(formData.map((i) => (key === i.key ? { ...i, value } : i)));
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData(
      formData.map((i) => (key === i.key ? { ...i, valueCurrent: value } : i))
    );
  };

  const rentderForm = formData.map((item) => {
    if (item.name === "input" && typeof item.value !== "boolean") {
      return (
        <label className="p-2 mx-1" key={item.key}>
          {item.key}
          <input
            className="p-2 mx-1 border border-gray-400"
            key={item.key}
            value={item.value}
            onChange={(e) => handleInputChange(item.key, e.target.value)}
          />
        </label>
      );
    }
    if (item.name === "checkbox" && typeof item.value === "boolean") {
      return (
        <label className="p-2 mx-1" key={item.key}>
          {item.key}
          <input
            className="p-2 mx-1 "
            key={item.key}
            type="checkbox"
            checked={item.value}
            onChange={(e) => handleInputChange(item.key, e.target.checked)}
          />
        </label>
      );
    }

    if (item.name === "select" && Array.isArray(item.value)) {
      return (
        <label className="p-2 mx-1" key={item.key}>
          {item.key}
          <select
            value={item.valueCurrent}
            className="p-2 mx-1 border border-gray-400"
            key={item.key}
            onChange={(e) => handleSelectChange(item.key, e.target.value)}
          >
            {item.value.map((v, index) => (
              <option key={v + index} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
      );
    }
  });

  return (
    <form className="flex flex-col">
      {rentderForm}
      <button
        className="bg-gray-400 border-gray-500 hover:bg-gray-500 m-2 "
        onClick={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        ok
      </button>
    </form>
  );
}
