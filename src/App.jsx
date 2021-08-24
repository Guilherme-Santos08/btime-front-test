import { useState } from "react";
import { medalistsApi } from "./api/medalists";

import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Main } from "./components/Main";

function App() {
  const [country, setCountry] = useState("");
  // Não repetir o nome do pais
  /*
  const CountriesParticipate = new Map();
  medalistsApi.forEach((teste) => {
    if (!CountriesParticipate.has(teste.country)) {
      CountriesParticipate.set(teste.country, teste);
    }
  });
  const howManyCountriesParticipate = [...CountriesParticipate.keys()];
  // console.log(howManyCountriesParticipate)
*/

  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
      {/* <h1>Numero de países participando da olimpiada: {howManyCountriesParticipate.length}</h1> */}
      <Input value={country} handleOnChangeCountry={handleOnChangeCountry} />
      <Main>
        <Card teste={country} />
      </Main>
    </>
  );
}

export default App;
