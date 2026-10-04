function App() {
  return (
    <div className="bg-white/75 backdrop-blur-sm px-16 py-16 rounded-[64px] shadow-[0_25px_40px_-12px_rgba(0,20,40,0.25),inset_0_1px_4px_rgba(255,255,255,0.8)] border border-white/60 text-center transition-transform duration-200 hover:scale-[1.01] hover:shadow-[0_30px_50px_-12px_rgba(0,20,40,0.3)] max-sm:px-8 max-sm:py-10 max-sm:rounded-[40px]">
      <h1 className="text-[clamp(3rem,10vw,5.5rem)] font-semibold tracking-[-0.02em] text-[#1a2639] leading-tight m-0 [text-shadow:0_2px_5px_rgba(255,255,255,0.8)] after:content-[''] after:block after:w-20 after:h-[5px] after:bg-[#3b6ea5] after:mx-auto after:mt-6 after:rounded after:opacity-80">
        Welcome to Keeia's Website!
      </h1>
      <p className="mt-6 text-xl text-[#3b6ea5] tracking-wide">Thanks for visiting!</p>
    </div>
  );
}

export default App;