import PromptCard from "./PromptCard";

interface ProfilePropsType {
  name: string | null | undefined;
  desc: string;
  data;
  handleEdit: (propmt) => void;
  handleDelete: (prompt) => void;
}

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete
}: ProfilePropsType) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name + "'s "}Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map(prompt => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleDelete={() => handleDelete && handleDelete(prompt)}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleTagClick={() => {}}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
