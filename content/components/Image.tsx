import * as React from "react";
import styled from "styled-components";

const Container = styled.figure``;

const Caption = styled.figcaption`
  text-align: center;
  font-style: italic;
  font-size: 14px;
  color: #828282;
  margin-top: 4px;
`;

interface IImageProps {
  children: React.ReactNode;
  caption?: string;
}

const Image: React.FC<IImageProps> = ({ children, caption }) => {
  return (
    <Container>
      {children}
      {caption && (
        <Caption
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "14px",
            color: "#828282",
            marginTop: "4px",
          }}
        >
          {caption}
        </Caption>
      )}
    </Container>
  );
};

export default Image;
