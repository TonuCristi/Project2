import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { useContext } from "react";
import { CoinsContext } from "../../App";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  position: relative;
`;

const CartBtn = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const Icon = styled(BsCartPlus)`
  font-size: 2.4rem;
`;

const Counter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(100%, -50%);
`;

const Cart = ({ onClick }) => {
  const { cartCoins } = useContext(CoinsContext);

  return (
    <Container>
      <CartBtn onClick={onClick}>
        <Icon />
        Cart
      </CartBtn>
      {!!cartCoins.length && <Counter>{cartCoins.length}</Counter>}
    </Container>
  );
};

export default Cart;
