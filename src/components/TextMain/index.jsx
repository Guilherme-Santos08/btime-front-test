import { medalistsApi } from "../../api/medalists";

import { H1 } from "./styles";

export function TextMain() {
  const CountriesParticipate = new Map();
  medalistsApi.forEach((teste) => {
    if (!CountriesParticipate.has(teste.country)) {
      CountriesParticipate.set(teste.country, teste);
    }
  });
  const howManyCountriesParticipate = [...CountriesParticipate.keys()];


  return (
      <H1>
        Temos {howManyCountriesParticipate.length} países nessa lista
      </H1>
  );
}

