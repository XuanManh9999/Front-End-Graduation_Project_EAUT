import axios from "axios";

export const runCode = async (languageCode, code) => {
  try {
    const response = await axios.post(
      `https://emkc.org/api/v2/piston/execute`,
      {
        language: languageCode,
        version: "*",
        files: [
          {
            content: code,
          },
        ],
      }
    );
    return response?.data;
  } catch (error) {
    return error?.response?.data || { error: "Lỗi không xác định!" };
  }
};

export const getLanguages = async () => {
  try {
    const response = await axios.get(`https://emkc.org/api/v2/piston/runtimes`);
    return response?.data;
  } catch (error) {
    return error?.response?.data || { error: "Lỗi không xác định!" };
  }
};
