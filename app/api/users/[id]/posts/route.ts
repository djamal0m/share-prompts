import Prompt from "@/models/prompt";
import { dbConnect } from "@/utils/db";

export const GET = async (request, { params }) => {
  try {
    await dbConnect();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
