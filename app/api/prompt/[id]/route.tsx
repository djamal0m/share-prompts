import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/db";
import logger from "@/utils/logger";

export const GET = async (request, { params }) => {
  try {
    await dbConnect();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found.", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (e) {
    return new Response("Failed to fetch prompt.", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  logger.debug(`prompt: ${prompt}, tag: ${tag}`);
  try {
    await dbConnect();
    const promptExists = await Prompt.findById(params.id);
    logger.debug("prompExists: ", promptExists);
    if (!promptExists)
      return new Response("Prompt not found.", { status: 404 });
    promptExists.prompt = prompt;
    promptExists.tag = tag;
    promptExists.save();
    return new Response(JSON.stringify(promptExists), { status: 200 });
  } catch (err) {
    return new Response("Failed to update prompt.", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await dbConnect();
    await Prompt.findByIdAndDelete(params.id);
    return new Response("Prompt deleted successfully.", { status: 200 });
  } catch (err) {
    return new Response("Failed to delete prompt.", { status: 500 });
  }
};
