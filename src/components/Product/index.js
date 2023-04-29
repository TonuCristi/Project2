import { BsPlus } from "react-icons/bs";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  position: relative;
  width: 50%;
  border: 5px solid #fff;
  border-radius: 2.3rem;
  padding: 2.4rem;
`;

const Icon = styled.img`
  margin-bottom: 1.6rem;
`;

const Name = styled.h3`
  font-size: 2.4rem;
  color: #fff;
  margin-bottom: 1.6rem;
`;

const Price = styled.p`
  font-size: 1.6rem;
  color: #fff;
`;

const AddToCartBtn = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  background: none;
  color: #fff;
  font-size: 2.4rem;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

const Product = ({ icon, name, price, onAddCard }) => {
  return (
    <Card>
      <Icon src={icon} />
      <Name>{name}</Name>
      <Price>{price.toFixed(2)}€</Price>
      <AddToCartBtn onClick={onAddCard}>
        <BsPlus></BsPlus>
      </AddToCartBtn>
    </Card>
  );
};

export default Product;
