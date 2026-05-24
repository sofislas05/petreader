import * as FileSystem from "expo-file-system/legacy";
import { supabase } from "../lib/supabase";
import type { Evidence } from "./types";

export async function analyzePhoto(
  photoUri: string
): Promise<Evidence> {
  console.log("Reading image...");

  const base64 = await FileSystem.readAsStringAsync(photoUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const imageBase64 = `data:image/jpeg;base64,${base64}`;

  console.log("Sending image to Gemini...");

  const { data, error } = await supabase.functions.invoke(
    "analyze-pet-photo",
    {
      body: {
        imageBase64,
      },
    }
  );

  if (error) {
    console.error("Function invoke error:", error);
    throw error;
  }

  console.log("Gemini response:", data);

  return {
    posture: data.posture,
    tail: data.tail,
    ears: data.ears,
    tongue: data.tongue,
    headPosition: data.headPosition,

    // still user-provided later
    activityChange: "normal",
    appetiteChanged: "no",
  };
}