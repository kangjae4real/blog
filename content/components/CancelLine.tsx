import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-style: italic;
  color: #828282;
  text-decoration: line-through;

  &:hover {
    text-decoration: none;
  }
`;

interface ICancelLineProps {
  children: React.ReactNode;
}

const CancelLine: React.FC<ICancelLineProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CancelLine;
