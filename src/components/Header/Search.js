import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Container = styled.form`
  background-color: #ced4da;
  display: flex;
  align-items: center;
  padding: 0.6rem 2.4rem;
  border-radius: 2.3rem;
  position: relative;
`;

const Input = styled.input`
  outline: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  background: none;
  border: none;
`;

const Icon = styled(BiSearch)`
  font-size: 1.6rem;
`;

const CoinsList = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #ced4da;
  border-radius: 2.3rem;
`;

const CoinsContainer = ({ data }) => {
  return (
    <CoinsList>
      {data.map((coin) => (
        <Coin key={coin.id}>
          {coin.name}
          <CoinIcon src={coin.icon} />
        </Coin>
      ))}
    </CoinsList>
  );
};

const Coin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
`;

const CoinIcon = styled.img`
  width: 2.4rem;
`;

const Search = ({ coins: defaultCoins }) => {
  const [coins, setCoins] = useState([]);

  const handleSearch = (value) => {
    if (value) {
      return setCoins(
        defaultCoins.filter((coin) =>
          coin.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    }

    return setCoins([]);
  };

  return (
    <Container>
      <Input onChange={(event) => handleSearch(event.target.value)} />
      <Icon />
      {!!coins.length && <CoinsContainer data={coins} />}
    </Container>
  );
};

export default Search;
