import StyledFlex from "./style";

const Flex = ({ children, ...props }) => (
  <StyledFlex {...props}>{children}</StyledFlex>
);

export default Flex;
