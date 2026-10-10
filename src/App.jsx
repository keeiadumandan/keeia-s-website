import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16">
        <section className="bg-white/75 backdrop-blur-sm rounded-[48px] border border-white/60 shadow-[0_25px_40px_-12px_rgba(0,20,40,0.25)] px-10 py-14 text-center max-sm:px-6 max-sm:py-10">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#3b6ea5] text-4xl font-extrabold text-white ring-8 ring-[#3b6ea5]/15">
            K
          </div>
          <h1 className="m-0 text-[clamp(2.25rem,7vw,4.5rem)] font-extrabold leading-tight tracking-tight text-[#1a2639]">
            Welcome to Keeia's Website!
          </h1>
          <p className="mt-4 text-xl text-[#3b6ea5]">Third year IT student. Thanks for visiting!</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#3b6ea5] px-6 py-3 font-extrabold text-white no-underline hover:bg-[#1a2639]"
            >
              See my projects
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-[#3b6ea5] px-6 py-3 font-extrabold text-[#3b6ea5] no-underline hover:bg-[#3b6ea5] hover:text-white"
            >
              Contact me
            </a>
          </div>
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="pb-8 text-center text-[#3b6ea5]">Made with React by Keeia</footer>
    </div>
  );
}

export default App;