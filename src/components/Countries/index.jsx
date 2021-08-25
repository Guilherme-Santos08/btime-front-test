import { useState } from "react";
import { medalistsApi } from "../../api/medalists";

import { Container } from "./styles.js";

export function Countries() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copiado!");
    } catch (err) {
      setCopySuccess("Falha ao copiar, tente novamente!");
    }
    if (copySuccess) {
      alert(copySuccess);
    }
  };

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
        <h3>clique para copiar abreviações</h3>
        <div>
          {howManyCountriesParticipate.map((e) => (
            <span key={e} onClick={() => copyToClipBoard(e)}>
              {e}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}
