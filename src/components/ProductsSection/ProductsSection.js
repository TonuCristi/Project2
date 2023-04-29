import styled from "styled-components";
import { CoinsContext } from "../../App";
import { useContext } from "react";
import Product from "../Product";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 6.4rem;
`;

const ProductsSection = ({ coins }) => {
  const { cartCoins, setCartCoins } = useContext(CoinsContext);

  const handleAdd = (item) => {
    const isDublicate = cartCoins.some(({ coin }) => coin.id === item.id);
    isDublicate
      ? setCartCoins(
          cartCoins.map((cartCoin) => {
            if (item.id === cartCoin.coin.id) {
              return {
                ...cartCoin,
                quantity: cartCoin.quantity + 1,
              };
            } else {
              return cartCoin;
            }
          })
        )
      : setCartCoins([...cartCoins, { coin: item, quantity: 1 }]);
  };

  console.log("coins", cartCoins);

  return (
    <Container>
      {coins.map((coin) => (
        <Product
          onAddCard={() => handleAdd(coin)}
          key={coin.id}
          icon={coin.icon}
          name={coin.name}
          price={coin.price}
        />
      ))}
    </Container>
  );
};

export default ProductsSection;
