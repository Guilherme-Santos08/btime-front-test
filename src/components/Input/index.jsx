import {Container} from "./styles"

export function Input({country, handleOnChangeCountry}) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Procure pela abreviação de cada país"
        aria-label="Procure pela abreviação de cada país"
        value={country}
        onChange={handleOnChangeCountry}
      />
    </Container>
  );
}
