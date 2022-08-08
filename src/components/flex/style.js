import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  ${props => props.alignItems ? `align-items: ${props.alignItems}` : ""};
  ${props => props.flexDirection ? `flex-direction: ${props.flexDirection}` : ""};
  ${props => props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${props => props.margin ? `margin: ${props.margin}` : ""};
`;

export default StyledFlex;
