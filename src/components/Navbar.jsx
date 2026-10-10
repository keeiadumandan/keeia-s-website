const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-[#3b6ea5]/15">
      <nav className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="text-lg font-extrabold text-[#1a2639] no-underline">
          Keeia
        </a>
        <ul className="flex gap-6 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-semibold text-[#3b6ea5] no-underline hover:text-[#1a2639]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;