const testimonials = [
  {
    name: "Ana Souza",
    role: "Analista de Dados · Transição de Carreira",
    text: "A mentoria do Felipe foi transformadora! Em 4 meses passei de uma área completamente diferente para minha primeira vaga como analista de dados. O plano personalizado e a preparação para entrevistas fizeram toda a diferença.",
    avatar: "AS",
    color: "bg-blue-600",
  },
  {
    name: "Carlos Mendes",
    role: "Engenheiro de Dados Sênior",
    text: "Contratei o Felipe para estruturar nosso pipeline de dados do zero. Em poucos meses tínhamos uma plataforma moderna e confiável. Conhecimento técnico sólido e comunicação excelente com o time.",
    avatar: "CM",
    color: "bg-indigo-600",
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de BI",
    text: "Os dashboards desenvolvidos pelo Felipe deram visibilidade a métricas que nunca havíamos acompanhado. Agora tomamos decisões muito mais rápidas e embasadas. Recomendo muito!",
    avatar: "FL",
    color: "bg-cyan-600",
  },
  {
    name: "Rafael Costa",
    role: "Estudante → Data Analyst",
    text: "Sem experiência prévia na área, o Felipe me ajudou a montar um portfólio do zero e me preparou para entrevistas técnicas. Consegui minha primeira oferta em menos de 3 meses de mentoria.",
    avatar: "RC",
    color: "bg-teal-600",
  },
  {
    name: "Juliana Martins",
    role: "Head of Data · Startup",
    text: "Precisávamos de uma estratégia de dados para escalar nosso produto. O Felipe entregou um roadmap claro, implementou as bases e treinou nosso time. Excelente trabalho!",
    avatar: "JM",
    color: "bg-violet-600",
  },
  {
    name: "Bruno Alves",
    role: "Analista de BI",
    text: "A mentoria me ajudou a entender onde queria chegar na carreira e como chegar lá. O acompanhamento semanal e os feedbacks diretos aceleraram meu crescimento de forma impressionante.",
    avatar: "BA",
    color: "bg-blue-700",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Resultados reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            O que dizem meus alunos e clientes
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Histórias de quem transformou sua carreira e seus negócios com dados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <StarRating />
              <p className="text-slate-700 leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
