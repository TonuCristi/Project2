import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import CartWindow from "./components/Header/CartWindow";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";

export const CoinsContext = createContext([]);

const Container = styled.div`
  overflow-y: ${(props) => (props.isOverflow ? "hidden" : "scroll")};
  height: 100vh;
`;

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgb(13, 108, 79);
  background: linear-gradient(
    45deg,
    rgba(13, 108, 79, 1) 0%,
    rgba(0, 0, 0, 1) 38%,
    rgba(13, 108, 79, 1) 100%
  );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function App() {
  const [coins, setCoins] = useState([]);
  const [copyCoins, setCopyCoins] = useState([]);
  const [cartCoins, setCartCoins] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [coinsQuantity, setCoinsQuantity] = useState([]);

  const fetchCoinData = () => {
    fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR"
    )
      .then((response) => response.json())
      .then((data) => {
        const { coins } = data;
        setCoins(coins);
        setCopyCoins(coins);
        // console.log(coins);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  useEffect(() => {
    setCoinsQuantity(Array(coins.length).fill(0));
  }, []);
  console.log(coinsQuantity);

  return (
    <CoinsContext.Provider
      value={{
        cartCoins,
        setCartCoins,
        cartOpen,
        setCartOpen,
      }}
    >
      <Bg></Bg>
      <Container isOverflow={cartOpen}>
        <Header coins={coins} copyCoins={copyCoins} />
        <HeroSection />
        <ProductsSection coins={coins} />
        <CartWindow></CartWindow>
      </Container>
    </CoinsContext.Provider>
  );
}

export default App;
