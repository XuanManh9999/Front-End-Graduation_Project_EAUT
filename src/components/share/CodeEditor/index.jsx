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
import boilerplate from "../../../utils/boilerplate";

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
