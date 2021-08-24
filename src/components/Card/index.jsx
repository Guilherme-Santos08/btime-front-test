import { medalistsApi } from "../../api/medalists";

import medalhaDeOuro from "../../assets/medalha-de-ouro.svg";
import medalhaDePrata from "../../assets/medalha-de-prata.svg";
import medalhaDeBronze from "../../assets/medalha-de-bronze.svg";

import { Container } from "./styles";
import { useEffect } from "react";

export function Card({ teste }) {
  const whyCountry = medalistsApi.filter(
    (medalist) => medalist.country === `${teste}`
  );
  const howManyGold = whyCountry.filter((x) => x.medal === "Gold").length;
  const howManySilver = whyCountry.filter((x) => x.medal === "Silver").length;
  const howManyBronze = whyCountry.filter((x) => x.medal === "Bronze").length;

  return (
    <Container>
      <span>{whyCountry.slice(0, 1).map((e) => e.country)}</span>

      <h2>Medalhas ganha:</h2>
      <div className="medals">
        <div className="medals__gold medals__amount">
          <img src={medalhaDeOuro} alt="" />
          <span>{howManyGold}</span>
        </div>

        <div className="medals__silver medals__amount">
          <img src={medalhaDePrata} alt="" />
          <span>{howManySilver}</span>
        </div>

        <div className="medals__bronze medals__amount">
          <img src={medalhaDeBronze} alt="" />
          <span>{howManyBronze}</span>
        </div>
      </div>
      <div className="medalists">
        <a href="#">Clique para ver os medalhistas</a>
      </div>
    </Container>
  );
}
