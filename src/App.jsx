import { useState } from "react";
import { medalistsApi } from "./api/medalists";
import { Card } from "./components/Card";

function App() {
  const [country, setCountry] = useState("");
  // console.log(
  //   medalistsApi.filter((medalist) => medalist.country === `${country}`)
  // );

  // Não repetir o nome do pais
  const CountriesParticipate = new Map()
  medalistsApi.forEach((teste) => {
    if(!CountriesParticipate.has(teste.country)) {
      CountriesParticipate.set(teste.country, teste)
    }
  })
  const howManyCountriesParticipate = [...CountriesParticipate.keys()]
  // console.log(howManyCountriesParticipate)


  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <>
    {/* <h1>Numero de países participando da olimpiada: {howManyCountriesParticipate.length}</h1> */}
      <input
        type="text"
        placeholder="Procure pela abreviação de cada pais "
        value={country}
        onChange={handleOnChangeCountry}
      />
      <Card />
    </>
  );
}

export default App;
