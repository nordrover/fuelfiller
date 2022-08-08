import styled from "styled-components";
import { Input } from "../../../components";

const StyledInputText = styled(Input)`
  padding: 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  font-family: "Montserrat", sans-serif;

  &:disabled {
    background-color: var(--green);
    font-weight: 900;
  }
`;

export default StyledInputText;
