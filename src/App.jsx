import { useState } from "react";

import { Input } from "./components/Input";
import { TextMain } from "./components/TextMain";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import { Countries } from "./components/Countries";

function App() {
  const [country, setCountry] = useState("");
  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      <Input value={country} handleOnChangeCountry={handleOnChangeCountry} />
      <TextMain />
      <Main>{country ? <Card teste={country} /> : ""}</Main>
      <Countries />
    </>
  );
}

export default App;
