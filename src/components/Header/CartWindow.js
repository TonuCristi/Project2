import styled from "styled-components";
import { useContext } from "react";
import { CoinsContext } from "../../App";

const Bg = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.5);
`;

const Container = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 80%;
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
  transform: translate(-50%, -50%);
  padding: 2.4rem 4.8rem;
  /* border: 5px solid #fff; */
  border-radius: 2.3rem;
  overflow-y: scroll;
`;

const ProductsPayContainer = styled.div`
  display: grid;
  grid-template-columns: 75fr 25fr;
  gap: 3.2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2.4rem;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6.4rem;
  transform: rotate(45deg);
  color: inherit;
  cursor: pointer;
`;

// ------- Products -------
const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
  background-color: #fff;
  padding: 2.4rem;
  border-radius: 2.3rem;
`;

const NameIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const Icon = styled.img`
  height: 8.8rem;
  width: 8.8rem;
  background-color: #e9ecef;
  padding: 1rem;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;

const PriceControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const SubBtn = styled.button`
  border: none;
  background-color: #e9ecef;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 3.2rem;
  cursor: pointer;
`;

const Quantity = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const AddBtn = styled.button`
  border: none;
  background-color: #e9ecef;
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 3.2rem;
  cursor: pointer;
`;

const RemoveBtn = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
`;

const Payment = styled.div`
  background-color: #fff;
  border-radius: 2.3rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;
  align-self: start;
`;

const PriceBox = styled.div`
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  gap: 0.6rem;
`;

const TotalPrice = styled.div`
  font-weight: 700;
`;

const ProceedPayBtn = styled.button`
  border: none;
  background: rgb(13, 108, 79);
  color: #fff;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.2rem 2.4rem;
  border-radius: 2.3rem;
  cursor: pointer;
`;

const CartWindow = () => {
  const { cartCoins, setCartCoins, cartOpen, setCartOpen } =
    useContext(CoinsContext);

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Bg onClick={handleClick} isOpen={cartOpen}></Bg>
      <Container isOpen={cartOpen}>
        <Header>
          My cart
          <CloseBtn onClick={handleClick}>+</CloseBtn>
        </Header>
        <ProductsPayContainer>
          <Products>
            {cartCoins.map(({ coinArr: coin }) => (
              <Product key={coin.id}>
                <NameIcon>
                  <Icon src={coin.icon}></Icon>
                  <Name>{coin.name}</Name>
                </NameIcon>
                <PriceControls>
                  <ProductPrice>{coin.price.toFixed(2)}€</ProductPrice>
                  <QuantityControls>
                    <SubBtn>-</SubBtn>
                    <Quantity>0</Quantity>
                    <AddBtn>+</AddBtn>
                  </QuantityControls>
                  <RemoveBtn>Remove</RemoveBtn>
                </PriceControls>
              </Product>
            ))}
          </Products>
          <Payment>
            <PriceBox>
              Total: <TotalPrice>0€</TotalPrice>
            </PriceBox>
            <ProceedPayBtn>Proceed to pay</ProceedPayBtn>
          </Payment>
        </ProductsPayContainer>
      </Container>
    </>
  );
};

export default CartWindow;
