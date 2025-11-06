

export function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="fixed top-0 w-full bg-black text-white shadow-md z-50 ">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between itens-center">
          <h1 className="text-pink-500 font-bold text-xl">NandaCoderDev</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#sobre" className="hover:text-pink-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-pink-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-pink-400">
                Contato
              </a>
            </li>
            <li>
              <a href="/Fernanda-Dev.pdf" download className="hover:text-pink-400">
                Currículo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
