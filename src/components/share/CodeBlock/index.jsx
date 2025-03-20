import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Đổi thành materialDark hoặc style khác
import styles from "./CodeBlock.module.scss";
const CodeBlock = ({ code }) => (
  <div className={styles.codeBlock}>
    <SyntaxHighlighter
      language="javascript"
      style={materialDark}
      customStyle={{ height: "500px", overflow: "auto" }}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlock;
