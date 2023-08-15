import * as React from "react";

interface IImageProps {
  children: React.ReactNode;
  caption?: string;
}

const Image: React.FC<IImageProps> = ({ children, caption }) => {
  return (
    <figure>
      {children}
      {caption && (
        <figcaption
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "14px",
            color: "#828282",
            marginTop: "4px",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
