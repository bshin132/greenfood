import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const InputContainer = styled.input`
  width: 357px;
  height: 41px;
  background-color: #e4f3df;
  border: none;
  padding-left: 15px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "30px"};
`;

const Input = ({ label, borderRadius }) => {
  return (
    <div>
      <InputContainer
        style={{ borderRadius: borderRadius }}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
