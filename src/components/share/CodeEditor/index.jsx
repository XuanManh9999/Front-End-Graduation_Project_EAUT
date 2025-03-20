import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { php } from "@codemirror/lang-php";
import { sql } from "@codemirror/lang-sql";
import { rust } from "@codemirror/lang-rust";
import { oneDark } from "@codemirror/theme-one-dark";
import { getLanguages } from "../../../services/learning";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { material } from "@uiw/codemirror-theme-material";

const boilerplate = {
  javascript: `function greet() {
  console.log("Hello, World!");
}
greet();`,
  java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  python: `def greet():
    print("Hello, World!")

greet()`,
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`,
  css: `body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
}`,
  php: `<?php
echo "Hello, World!";
?>`,
  sql: `SELECT 'Hello, World!' AS message;`,
  rust: `fn main() {
    println!("Hello, World!");
}`,
};

const getExtension = (lang) => {
  switch (lang) {
    case "javascript":
      return javascript();
    case "java":
      return java();
    case "python":
      return python();
    case "cpp":
      return cpp();
    case "html":
      return html();
    case "css":
      return css();
    case "php":
      return php();
    case "sql":
      return sql();
    case "rust":
      return rust();
    default:
      return javascript();
  }
};

const CodeEditor = ({ code, setCode, languageActive, setLanguageActive }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const response = await getLanguages();
      setLanguages(response);
    };

    fetchLanguages();
  }, []);

  // 🔹 Xử lý khi thay đổi ngôn ngữ
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguageActive(newLanguage);

    // Nếu chưa có code, thì lấy mẫu code mặc định
    setCode(boilerplate[newLanguage] || "");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Dropdown chọn ngôn ngữ */}
      <select
        value={languageActive}
        onChange={handleLanguageChange}
        style={{ marginBottom: "10px", padding: "5px", fontSize: "16px" }}>
        {languages &&
          languages.map((language) => (
            <option key={language.language} value={language.language}>
              {language.language} - version {language.version}
            </option>
          ))}
      </select>

      <CodeMirror
        value={code}
        theme={tokyoNight}
        extensions={[getExtension(languageActive)]}
        onChange={(value) => setCode(value)}
        height="500px"
        style={{ fontSize: "18px" }}
      />
    </div>
  );
};

export default CodeEditor;
