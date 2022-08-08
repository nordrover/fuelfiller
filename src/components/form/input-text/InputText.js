import StyledInputText from "./style";
import { Label } from "../../../components";

const InputText = ({ id, label, ...otheProps }) => {
  return (
    <>
      {label && (
        <>
          <Label htmlFor={id}>{label}</Label>
          <StyledInputText id={id} type="text" {...otheProps} />
        </>
      )}
      {!label && <StyledInputText id={id} type="text" {...otheProps} />}
    </>
  );
};

export default InputText;
