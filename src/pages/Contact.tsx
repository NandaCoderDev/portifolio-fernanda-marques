
export function Contact() {


  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-900 to-purple-700 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Entre em Contato</h2>
        <p className="mb-6 text-gray-700">
          Vamos conversar! Use o formulário ou escolha um dos canais abaixo para entrar em contato.
        </p>
        <form className="flex flex-col gap-4" >
          <input
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            placeholder="Mensagem"
            className="border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}