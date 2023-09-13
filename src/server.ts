import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import { getAllPromptsRoute } from "./routes.ts/get-all-prompts";
import { uploadVideoRoute } from "./routes.ts/upload-video";
import { createTranscriptionRoute } from "./routes.ts/create-transcription";
import { generateAICompletionRoute } from "./routes.ts/generate-ai-completion";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
})

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP Server is running.");
});