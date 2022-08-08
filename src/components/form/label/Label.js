import StyledLabel from "./style";

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

export default Label;
