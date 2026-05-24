Deno.serve(async (req) => {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return Response.json(
        { error: "Missing imageBase64" },
        { status: 400 }
      );
    }

    const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

    if (!geminiApiKey) {
      return Response.json(
        { error: "Missing Gemini API key" },
        { status: 500 }
      );
    }

    const base64Data = imageBase64.replace(
      /^data:image\/\w+;base64,/,
      ""
    );

    const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Analyze this dog image for visible body evidence only.

Return ONLY valid JSON.

Allowed values:

posture:
- laying_belly_down
- laying_belly_up
- sitting
- up
- laying_side
- curling_in
- arched_back

tail:
- wag
- down
- normal

ears:
- up
- down

tongue:
- out
- in

headPosition:
- normal
- pressed_against_object

Rules:
- Use ONLY what is visually visible.
- Do not diagnose.
- If posture is visible, NEVER default to sitting automatically.
- No markdown.
- No explanation.

Return exactly:
{
  "posture": "...",
  "tail": "...",
  "ears": "...",
  "tongue": "...",
  "headPosition": "..."
}
                  `,
                },

                {
                  inline_data: {
                    mime_type: "image/jpeg",
                    data: base64Data,
                  },
                },
              ],
            },
          ],

          generationConfig: {
            responseMimeType: "application/json",
            temperature: 0.2,
          },
        }),
      }
    );

    const result = await response.json();

    console.log("Gemini status:", response.status);
    console.log("Gemini raw result:", JSON.stringify(result));

    const text =
      result?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    console.log("Gemini text:", text);

    if (!text) {
      return Response.json(
        {
          error: "Gemini returned empty text",
          rawResult: result,
        },
        { status: 500 }
      );
    }

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      return Response.json(
        {
          error: "Gemini returned invalid JSON",
          rawText: text,
          rawResult: result,
        },
        { status: 500 }
      );
    }

    return Response.json(parsed);
  } catch (error) {
    console.error("EDGE FUNCTION ERROR:", error);

    return Response.json(
      {
        error: "Failed inside edge function",
        details:
          error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
});