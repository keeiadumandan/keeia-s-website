function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 rounded-3xl bg-[#1a2639] p-10 text-center shadow-lg"
    >
      <h2 className="m-0 text-3xl font-extrabold text-white">Contact</h2>
      <p className="mt-3 text-lg text-white/80">Want to say hi? Send me an email.</p>
      <a
        href="mailto:keeia@gmail.com"
        className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-extrabold text-[#1a2639] no-underline hover:bg-[#dbeafe]"
      >
        keeia@gmail.com
      </a>
    </section>
  );
}

export default Contact;