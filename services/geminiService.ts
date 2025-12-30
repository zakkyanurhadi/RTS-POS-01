
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBusinessInsights = async (revenue: number, transactions: number) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analisis performa bisnis ini dalam bahasa Indonesia yang ramah: Pendapatan Rp ${revenue.toLocaleString()}, Total Transaksi ${transactions}. Berikan 1 tips singkat untuk meningkatkan penjualan.`,
      config: {
        maxOutputTokens: 150,
      }
    });
    return response.text || "Terus semangat berjualan!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Bisnis Anda berjalan cukup baik hari ini. Pertahankan performa!";
  }
};
