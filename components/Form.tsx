import { CreatePostFormProps } from "@/types";
import Link from "next/link";

const Form: React.FC<CreatePostFormProps> = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <p className="desc lest-left max-w-md">
        {type} and share amazing prompts with the world.
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI promt
          </span>
          <textarea
            className="form_textarea"
            value={post.prompt}
            onChange={e => setPost({ ...post, prompt: e.target.value })}
            placeholder="Insert promt here..."
            required
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal">(#product, #dev, #idea)</span>
          </span>
          <textarea
            className="form_input"
            value={post.tag}
            onChange={e => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 bg-primary-orange rounded-full text-white text-sm"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
