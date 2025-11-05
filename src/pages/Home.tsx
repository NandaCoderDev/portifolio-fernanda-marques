import {} from "/assets/fernanda.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGit,
  FaFigma,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Home() {
  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-4xl mx-auto mb-2" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-4xl mx-auto mb-2" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 text-4xl mx-auto mb-2" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-4xl mx-auto mb-2" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 text-4xl mx-auto mb-2" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-400 text-4xl mx-auto mb-2" />,
    },
    {
      name: "Git",
      icon: <FaGit className="text-red-600 text-4xl mx-auto mb-2" />,
    },
    {
      name: "Figma",
      icon: <FaFigma className="text-purple-500 text-4xl mx-auto mb-2" />,
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center flex items-center justify-center p-6">
        <div className="bg-white bg-opacity-80 rounded-lg flex flex-col md:flex-row items-center gap-8">
          <img
            src="/assets/fernanda.jpg"
            alt="Foto de Fernanda"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="text-center px-3 md:text-left">
            <h1 className="text-4xl font-bold text-pink-600 mb-2">
              Fernanda Marques
            </h1>
            <p className="text-lg text-gray-800 items-center">
              Desenvolvedora Front-End em formação, apaixonada por tecnologia e
              design.
            </p>
            <p className="italic text-md text-blue-500">
              Transformando ideias em interfaces incríveis.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Sobre Mim</h2>
          <p className="mb-4">
            Olá! Meu nome é <strong>Fernanda Marques</strong>, sou estudante de
            <strong> Análise e Desenvolvimento de Sistemas-(ADS)</strong> e estou
            em busca de <strong>oportunidades profissionais como desenvolvedora front-end</strong>, seja em vagas de estágio ou nível júnior. <br />
            <br></br> Tenho me dedicado à criação de projetos front-end utilizando tecnologias como<strong> HTML, CSS, JavaScript, React , Typescript e Tailwind</strong>, com foco em interfaces responsivas, acessíveis e funcionais. <br /><br />

            Também possuo conhecimento em <strong>Figma</strong>, ferramenta que utilizo para estudar prototipação e aprimorar minha visão sobre design de interfaces e experiência do usuário.
          </p>
        
          <p className="mb-4">
            Minha trajetória técnica tem me proporcionado uma compreensão sólida
            sobre estrutura de código, lógica de negócios e experiência do
            usuário — fundamentos que também despertaram meu interesse pela área
            de <strong>Quality Assurance (QA)</strong>. <br /><br />
            Embora meu foco atual
            esteja no desenvolvimento front-end, tenho curiosidade crescente
            sobre testes de software e pretendo aprofundar esse conhecimento
            futuramente.
          </p>
          <p>
            Sou uma pessoa<strong> atenta aos detalhes, comunicativa e apaixonada por aprendizado contínuo </strong>.
             Acredito que a tecnologia pode transformar vidas, e estou animada
            para colaborar com equipes inovadoras, contribuindo com soluções que
            gerem impacto positivo.
          </p>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-pink-600 mb-8 text-center">
            Tecnologias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-white p-4 rounded shadow hover:scale-105 transition"
              >
                {tech.icon}
                <p className="mt-2 font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Projetos</h2>
          <p className="mb-6">
            Veja alguns dos projetos que desenvolvi durante meus estudos:
          </p>
          <div className="flex flex-wrap gap-4">
            {/* card dos projetos */}
            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">
                Página Web Solution{" "}
              </h3>
              <iframe
                src="https://nandacoderdev.github.io/pagina-solution/"
                title="Gerador de frases"
                width="100%"
                height="300"
                className="rounded shadow-md"
              />

              <p className="text-md text-gray-900 py-2">
                Primeiro projeto desenvolvido com HTML, CSS e JavaScript, focado
                em estruturação semântica, estilização moderna e interatividade
                básica. A proposta foi criar uma página web funcional e
                visualmente agradável, aplicando conceitos fundamentais da
                tríade front-end .
              </p>

              <button>
                <a
                  href="https://nandacoderdev.github.io/pagina-solution/"
                  target="_blank"
                  rel="nooper noreferrer"
                  className="inline-block bg-pink-500 text-white px-2 py-2 rounded hover:bg-pink-600 transition text-center"
                >
                  Ver Projeto
                </a>
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">Clone Spotify </h3>
              <iframe
                src="https://nandacoderdev.github.io/clone-spotify/"
                title="Gerador de frases"
                width="100%"
                height="300"
                className="rounded shadow-md"
              />

              <p className="text-md text-gray-900 py-2">
                Projeto intermediário inspirado na interface do Spotify,
                desenvolvido com HTML, CSS, JavaScript e Bootstrap. Foco em
                layout responsivo, navegação intuitiva e design moderno,
                aplicando conceitos mais avançados de estruturação visual e
                estilização com componentes.
              </p>

              <button>
                <a
                  href="https://nandacoderdev.github.io/clone-spotify/"
                  target="_blank"
                  rel="nooper noreferrer"
                  className="inline-block bg-pink-500 text-white px-2 py-2 rounded hover:bg-pink-600 transition text-center"
                >
                  Ver Projeto
                </a>
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">Gerador de frases</h3>
              <iframe
                src="https://nandacoderdev.github.io/gerador-Frases/"
                title="Pagina Solution"
                width="100%"
                height="300"
                className="rounded shadow-md"
              />

              <p className="text-md text-gray-900 py-3">
                Aplicação desenvolvida com React, TypeScript e Vite, que gera
                frases motivacionais aleatórias com apenas um clique. O projeto
                tem como foco a experiência do usuário, com layout responsivo e
                estilização moderna. Ideal para praticar conceitos como
                componentização, hooks, tipagem estática e deploy com GitHub
                Pages
              </p>
              <button>
                <a
                  href="https://nandacoderdev.github.io/gerador-Frases/"
                  target="_blank"
                  rel="nooper noreferrer"
                  className="inline-block bg-pink-500 text-white px-2 py-2 rounded hover:bg-pink-600 transition text-center"
                >
                  Ver Projeto
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 bg-gray-100 text-center" id="contato">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          Vamos conversar?
        </h2>
        <p className="mb-4">
          Entre em contato comigo através da página de contato ou pelas redes
          sociais abaixo.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <a
            href="mailto:nandacoder.dev@gmail.com"
            className="text-pink-600 hover:text-pink-800"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/fernanda-marques-6610261a0"
            target="_blank"
            className="text-pink-600 hover:text-pink-800"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nandacoderdev"
            target="_blank"
            className="text-pink-600 hover:text-pink-800"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/5521959339719"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6 text-center ">
        <p>© 2025 Nanda Coder Dev. Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
