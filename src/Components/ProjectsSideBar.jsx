import Button from "./Button.jsx";

export default function ProjectsSideBar({
  onStartAddProject,
  projects,
  onSelected,
  selectedProjectId,
}) {
  return (
    <aside className="px-8 py-16 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (selectedProjectId === project.id) {
            cssClass += " text-stone-200 bg-stone-800";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelected(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
