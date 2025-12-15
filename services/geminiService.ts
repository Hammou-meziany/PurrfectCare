import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  // Safe initialization, assumes process.env.API_KEY is available
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.warn("API Key is missing. Gemini features will not work.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCatContent = async (topic: string, type: 'blog' | 'advice'): Promise<string> => {
  try {
    const ai = getClient();
    if (!process.env.API_KEY) return "Please configure your API Key to use AI features.";

    let prompt = "";
    if (type === 'blog') {
      prompt = `Write a short, engaging, SEO-optimized blog post section (approx 150 words) about: "${topic}" for a cat care website. Use a friendly, knowledgeable tone.`;
    } else {
      prompt = `As a friendly cat expert, give a short, helpful answer (max 3 sentences) to a cat owner asking: "${topic}". Focus on safety and well-being.`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Sorry, I couldn't generate content right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while fetching the cat wisdom.";
  }
};