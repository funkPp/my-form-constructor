import { useState } from "react";
import { Card } from "./ui/Card";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#282c34] min-h-[100vh] flex flex-col items-center justify-center ">
      <Card typeClass="main">
        <div>dddddd</div>
      </Card>
    </div>
  );
}

export default App;
