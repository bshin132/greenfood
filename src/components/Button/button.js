import "./Button.scss";
import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 243px;
  height: 50px;
  border-radius: 50px;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#51B072"};
`;

const Button = ({ backgroundColor, label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} style={{ backgroundColor: backgroundColor }}>
      {label}
    </ButtonContainer>
  );
};

export default Button;