import * as FileSystem from "expo-file-system/legacy";
import * as ImageManipulator from "expo-image-manipulator";
import { supabase } from "../lib/supabase";
import type { Evidence } from "./types";

export async function analyzePhoto(photoUri: string): Promise<Evidence> {
  console.log("Compressing image...");

  const compressed = await ImageManipulator.manipulateAsync(
    photoUri,
    [{ resize: { width: 512 } }],
    { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }
  );

  const base64 = await FileSystem.readAsStringAsync(compressed.uri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  console.log("Base64 length:", base64.length);

  const imageBase64 = `data:image/jpeg;base64,${base64}`;

  const { data, error } = await supabase.functions.invoke("analyze-pet-photo", {
    body: { imageBase64 },
  });

  if (error) {
  console.error("Function invoke error:", JSON.stringify(error));

  const context = (error as any).context;

  if (context) {
    try {
      const errorBody = await context.json();
      console.error("Function error body:", JSON.stringify(errorBody));
    } catch {
      console.error("Could not read function error body");
    }
  }

  throw error;
}

  if (data.error) {
    console.error("Gemini debug error:", JSON.stringify(data));
    throw new Error(data.error);
  }

  console.log("Gemini response:", data);

  return {
    posture: data.posture,
    tail: data.tail,
    ears: data.ears,
    tongue: data.tongue,
    headPosition: data.headPosition,
  };
}