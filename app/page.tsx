import Feed from "@/components/Feed";

export default function Home(): JSX.Element {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        Share-Prompts is an open-source AI prompting for modern world to
        discover, create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
}
