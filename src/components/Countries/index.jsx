import { medalistsApi } from "../../api/medalists";

import { Container } from "./styles.js";

export function Countries() {
  const CountriesParticipate = new Map();
  medalistsApi.forEach((teste) => {
    if (!CountriesParticipate.has(teste.country)) {
      CountriesParticipate.set(teste.country, teste);
    }
  });
  const howManyCountriesParticipate = [...CountriesParticipate.keys()];

  return (
    <>
      <Container>
        <h3>Abreviações dos países</h3>
        <div>
          {howManyCountriesParticipate.map((e) => (
            <span>{e}</span>
          ))}
        </div>
      </Container>
    </>
  );
}
