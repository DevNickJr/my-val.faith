import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateLine = async (name: string, interest: string) => {
  const apiKey = "sk-QTiUhd6V9dyUWEPf4gWlXHN117C2YGRt"; // Replace with your actual key
  const prompt = `Generate a creative Valentine's Day pickup line for someone named ${name} who loves ${interest}.`;
  
  try {
    const response = await axios.post(
      "https://api.forefront.ai/v1/chat/completions",
      {
        model: "mistralai/Mistral-7B-v0.1",
        messages: [
            {
                "role": "user",
                "content": prompt
            }
        ],
        max_tokens: 64,
        temperature: 0.5
      },
      {
        headers: { Authorization: `Bearer ${apiKey}` },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating line:", error);
    return "Oops! Something went wrong. Try again!";
  }
};
