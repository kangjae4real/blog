/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import type { MBPostProps } from "./post"

/** @jsx jsx */
import { jsx } from "theme-ui";

const PostFooter = ({ post }: MBPostProps) => {
  return (
    <div
      sx={{
        boxSizing: `border-box`
      }}
    >
      <span
        sx={{
          color: `secondary`,
          fontSize: `14px`
        }}
      >
        잘못된 정보는 언제든지 <a href="mailto:awpe89@gmail.com">awpe89@gmail.com</a> 로 연락해주세요!
      </span>
    </div>
  );
};

export default PostFooter
