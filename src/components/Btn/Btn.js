import styled from "styled-components";

const BtnStyle = styled.button`
  border: 3px solid #fff;
  background: none;
  font-family: inherit;
  color: inherit;
  padding: 1rem;
  border-radius: 2.3rem;
  font-weight: 700;
  cursor: pointer;
`;

const Btn = ({ name, onHandleSort }) => {
  return <BtnStyle onClick={onHandleSort}>{name}</BtnStyle>;
};

export default Btn;
