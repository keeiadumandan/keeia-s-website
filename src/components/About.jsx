const interests = ["Dance", "Singing", "Makeup looks", "Coding"];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white/75 rounded-3xl border border-white/60 shadow-lg p-8 text-center"
    >
      <h2 className="m-0 text-3xl font-extrabold text-[#1a2639]">About Me</h2>
      <p className="mt-3 mx-auto max-w-xl text-lg text-[#3b6ea5]">
        I am a third year BSIT student. I like to dance, sing and do different kinds of makeup looks.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-3 list-none p-0">
        {interests.map((item) => (
          <li
            key={item}
            className="rounded-full bg-[#3b6ea5]/10 px-4 py-1 font-semibold text-[#3b6ea5]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;