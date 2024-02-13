import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/db";

export const POST = async request => {
  const requestBody = await request.json();
  const { creator, prompt, tag } = requestBody;
  try {
    await dbConnect();
    const newPrompt = new Prompt({ creator, prompt, tag });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (e) {
    console.error("error: ", e);
    return new Response("Failed to create prompt.", { status: 500 });
  }
};
