import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCinematicWish = async (name: string, relationship: string): Promise<string> => {
  try {
    const prompt = `
      Act as a Hollywood screenwriter but write in Korean.
      Write a very short (max 2 sentences), poetic, and cinematic wedding wish for a couple.
      The guest's name is ${name} and their relationship to the couple is "${relationship}".
      The tone should be elegant, dramatic, and warm. 
      Do not use emojis. 
      Output ONLY the wish text in Korean.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || "두 분의 앞날이 영화처럼 아름답기를 바랍니다.";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "영원히 빛나는 사랑을 기원합니다.";
  }
};