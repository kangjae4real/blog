import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
}

const Code: React.FC<CodeProps> = ({ children: code }) => {
  return (
    <div className="mt-4">
      <Highlight code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default Code;
