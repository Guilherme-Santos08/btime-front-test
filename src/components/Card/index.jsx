import { medalistsApi } from "../../api/medalists";

import medalhaDeOuro from "../../assets/medalha-de-ouro.svg";
import medalhaDePrata from "../../assets/medalha-de-prata.svg";
import medalhaDeBronze from "../../assets/medalha-de-bronze.svg";

import { Container, Medalist, MedalistContainer } from "./styles";
import { useState } from "react";

export function Card({ teste }) {
  const [showMedalists, setShowMedalists] = useState(false);
  console.log(showMedalists);
  const toogle = () => setShowMedalists(!showMedalists);

  const whyCountry = medalistsApi.filter(
    (medalist) => medalist.country === `${teste}`
  );

  // https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%c3%aancias-de-um-valor-dentro-de-um-array
  const howManyGold = whyCountry.filter((x) => x.medal === "Gold").length;
  const howManySilver = whyCountry.filter((x) => x.medal === "Silver").length;
  const howManyBronze = whyCountry.filter((x) => x.medal === "Bronze").length;

  return (
    <>
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
          <span onClick={toogle}>Clique para ver os medalhistas</span>
        </div>
      </Container>

      <Medalist className={showMedalists === true ? "backgroundOpacity" : ""}>
        <MedalistContainer
          className={showMedalists === true ? "showMedalists" : ""}
        >
          <h2>Medalhistas</h2>
          <span onClick={toogle}>X</span>
          <div className="medalists">
            <div className="medalists__name">
              {whyCountry.map((e) => (
                <span>{e.athlete}</span>
              ))}
            </div>
          </div>
        </MedalistContainer>
      </Medalist>
    </>
  );
}
