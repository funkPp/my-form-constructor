export interface IData {
  name: string;
  age: number;
  city: string;
  isStudent: boolean;
  courses: string[];
}

export interface IEnumObj {
  name: string;
  key: string;
  value: IData[keyof IData];
  valueCurrent: string;
}
