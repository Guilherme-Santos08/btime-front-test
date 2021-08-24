import { medalistsApi } from "../../api/medalists";

import medalhaDeOuro from "../../assets/medalha-de-ouro.svg";
import medalhaDePrata from "../../assets/medalha-de-prata.svg";
import medalhaDeBronze from "../../assets/medalha-de-bronze.svg";

import { Container } from "./styles";

export function Card({ teste }) {
  const whyCountry = medalistsApi.filter(
    (medalist) => medalist.country === `${teste}`
  );
  console.log(whyCountry);

  return (
    <Container>
      <span>{whyCountry.map((e) => e.country)}</span>

      <h2>Medalhas ganha:</h2>
      <div className="medals">
        
        <div className="medals__gold medals__amount">
          <img src={medalhaDeOuro} alt="" />
          <span>{whyCountry.map(e => e.medal)}</span>
        </div>

        <div className="medals__silver medals__amount">
          <img src={medalhaDePrata} alt="" />
          <span>{0}</span>
        </div>

        <div className="medals__bronze medals__amount">
          <img src={medalhaDeBronze} alt="" />
          <span>{0}</span>
        </div>

      </div>
      <div className="medalists">
        <a href="#">Clique para ver os medalhistas</a>
      </div>
    </Container>
  );
}
