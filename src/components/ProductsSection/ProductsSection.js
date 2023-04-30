import styled from "styled-components";
import { CoinsContext } from "../../App";
import { useContext } from "react";
import Product from "../Product";
import Btn from "../Btn/Btn";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3.2rem;
`;

const SortBy = styled.div`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-bottom: 4.8rem;
  border: 5px solid #fff;
  padding: 1.6rem;
  border-radius: 3.9rem;
`;

const SortLowToHighBtn = styled.button``;

const SortHighToLowBtn = styled.button``;

const Featured = styled(Btn)``;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 6.4rem;
`;

const ProductsSection = ({ coins }) => {
  const { cartCoins, setCartCoins, setCoins } = useContext(CoinsContext);

  const handleAdd = (item) => {
    const isDuplicate = cartCoins.some(({ coin }) => coin.id === item.id);
    isDuplicate
      ? setCartCoins(
          cartCoins.map((cartCoin) => {
            if (item.id === cartCoin.coin.id) {
              return {
                ...cartCoin,
                quantity: cartCoin.quantity + 1,
                price: cartCoin.coin.price * (cartCoin.quantity + 1),
              };
            } else {
              return cartCoin;
            }
          })
        )
      : setCartCoins([
          ...cartCoins,
          { coin: item, quantity: 1, price: item.price },
        ]);
  };

  const handleFeatured = () => {};

  // const handleSort = (sortType) => {
  //   if (sortType) {
  //     setCoins(coins.sort((a, b) => a.price - b.price));
  //   } else {
  //     setCoins(coins.sort((a, b) => b.price - a.price));
  //   }
  //   console.log(coins.sort((a, b) => a.price - b.price));
  // };

  return (
    <Container>
      <SortBy>
        Sort by:
        <Featured name="Featured" onClick={() => setCoins(coins)} />
        <SortLowToHighBtn
          onClick={() => {
            setCoins(coins.sort((a, b) => a.price - b.price));
            console.log(coins);
          }}
        >
          Price: Low to High
        </SortLowToHighBtn>
        <SortHighToLowBtn
          onClick={() => {
            setCoins(coins.sort((a, b) => b.price - a.price));
            console.log(coins);
          }}
        >
          Price: High to Low
        </SortHighToLowBtn>
      </SortBy>
      <Products>
        {coins.map((coin) => (
          <Product
            onAddCard={() => handleAdd(coin)}
            key={coin.id}
            icon={coin.icon}
            name={coin.name}
            price={coin.price}
          />
        ))}
      </Products>
    </Container>
  );
};

export default ProductsSection;
