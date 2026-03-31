export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-blue-500/30">
            Mentoria · Analytics · Engenharia de Dados
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Acelere sua carreira com{" "}
            <span className="text-blue-400">dados e estratégia</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Ofereço mentoria de carreira personalizada, consultoria em Analytics
            e Engenharia de Dados para profissionais e empresas que querem
            tomar decisões mais inteligentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full text-center transition-colors shadow-lg shadow-blue-900/40"
            >
              Solicitar Orçamento Grátis
            </a>
            <a
              href="#servicos"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-center transition-colors"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 fill-white"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
