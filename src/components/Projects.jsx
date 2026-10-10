import Project from "../models/Project";

const projects = [
  new Project("My Website", "React", "#d9488a", "This site, made with React and Tailwind."),
  new Project("Item CRUD", "Spring Boot", "#f9a8d4", "A Spring Boot app with a MySQL database."),
  new Project("Data Analysis", "School work", "#f472b6", "School work where I practice with data."),
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
<h2 className="m-0 mb-6 text-center text-3xl font-extrabold text-[#4a1d33]">Projects</h2>      <ul className="grid gap-6 list-none p-0 m-0 md:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.name}
            style={{ borderTopColor: p.color }}
            className="bg-white rounded-2xl border-t-8 p-6 shadow-md transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="m-0 text-sm font-semibold text-[#3b6ea5]">{p.tag}</p>
            <p className="m-0 text-sm font-semibold text-[#d9488a]">{p.tag}</p>
            <h3 className="mt-1 mb-2 text-xl font-extrabold text-[#4a1d33]">{p.name}</h3>
            <p className="m-0 text-[#4a1d33]/80">{p.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


export default Projects;