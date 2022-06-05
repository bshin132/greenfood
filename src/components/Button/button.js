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
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#77c360"};
`;

const Button = ({ backgroundColor, label }) => {
  return (
    <ButtonContainer style={{ backgroundColor: backgroundColor }}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
