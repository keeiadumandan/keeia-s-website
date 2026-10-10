const projects = [
  { name: "My Website", tag: "React", color: "#3b6ea5", note: "This site, made with React and Tailwind." },
  { name: "Item CRUD", tag: "Spring Boot", color: "#f2a65a", note: "A Spring Boot app with a MySQL database." },
  { name: "Data Analysis", tag: "School work", color: "#5aa39a", note: "School work where I practice with data." },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="m-0 mb-6 text-center text-3xl font-extrabold text-[#1a2639]">Projects</h2>
      <ul className="grid gap-6 list-none p-0 m-0 md:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.name}
            style={{ borderTopColor: p.color }}
            className="bg-white rounded-2xl border-t-8 p-6 shadow-md transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="m-0 text-sm font-semibold text-[#3b6ea5]">{p.tag}</p>
            <h3 className="mt-1 mb-2 text-xl font-extrabold text-[#1a2639]">{p.name}</h3>
            <p className="m-0 text-[#1a2639]/80">{p.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;