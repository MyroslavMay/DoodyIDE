import axios from "axios";
import { LANGS_VER } from "./constants";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston",
  });
  
  export const codeExec = async (lang, code) => {
    try {
      const response = await API.post("/execute", {
        language: lang,
        version: LANGS_VER[lang],
        files: [
          {
            content: code,
          },
        ],
      });
  
      return response.data;
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
        throw new Error(`API Error: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
        throw new Error('No response from API');
      } else {
        // Something else happened
        console.error('Error message:', error.message);
        throw new Error(`Error: ${error.message}`);
      }
    }
  };