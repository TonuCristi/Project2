import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import CartWindow from "./components/Header/CartWindow";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";

export const CoinsContext = createContext([]);

const Container = styled.div`
  overflow-y: ${(props) => (props.isOverflow ? "hidden" : "auto")};
  height: 100vh;
`;

const GradientBg = styled.div`
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
  const [cartCoins, setCartCoins] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const fetchCoinData = () => {
    fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR"
    )
      .then((response) => response.json())
      .then((data) => {
        const { coins } = data;
        setCoins(coins);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  return (
    <CoinsContext.Provider value={{ cartCoins, setCartCoins, setCoins }}>
      <GradientBg />
      <Container isOverflow={cartOpen}>
        <Header onCartOpen={() => setCartOpen(true)} coins={coins} />
        <HeroSection />
        <ProductsSection coins={coins} />
        {cartOpen && <CartWindow onClose={() => setCartOpen(false)} />}
      </Container>
    </CoinsContext.Provider>
  );
}

export default App;
