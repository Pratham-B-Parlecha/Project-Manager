import Button from "./Button.jsx";
import Logo from "../assets/no-projects.png";

export default function NoProjrctSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={Logo}
        alt="An Empty task List"
        className="w-16 hh-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      <p className="mt-4">
        <Button onClick={onStartAddProject}>Create a project</Button>
      </p>
    </div>
  );
}
