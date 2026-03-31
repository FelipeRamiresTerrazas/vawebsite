const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Mentoria de Carreira",
    description:
      "Orientação personalizada para profissionais que querem ingressar ou crescer na área de dados. Planejamento de carreira, revisão de currículo, preparação para entrevistas e direcionamento estratégico.",
    highlights: ["Plano de carreira personalizado", "Preparação para entrevistas", "Revisão de currículo e LinkedIn", "Acompanhamento contínuo"],
    color: "blue",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analytics & BI",
    description:
      "Transformo dados brutos em insights acionáveis. Criação de dashboards, análise exploratória, KPIs e relatórios executivos para apoiar a tomada de decisão baseada em dados.",
    highlights: ["Dashboards interativos", "Análise de KPIs", "Relatórios executivos", "Power BI · Looker · Tableau"],
    color: "indigo",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Engenharia de Dados",
    description:
      "Arquitetura e desenvolvimento de pipelines de dados robustos e escaláveis. Integração de fontes, modelagem de dados, ETL/ELT e implementação de plataformas modernas de dados.",
    highlights: ["Pipelines ETL/ELT", "Data Lakehouse", "Modelagem de dados", "Python · SQL · dbt · Airflow"],
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string }> = {
  blue: {
    bg: "bg-blue-50 border-blue-100",
    icon: "bg-blue-100 text-blue-700",
    tag: "bg-blue-100 text-blue-700",
  },
  indigo: {
    bg: "bg-indigo-50 border-indigo-100",
    icon: "bg-indigo-100 text-indigo-700",
    tag: "bg-indigo-100 text-indigo-700",
  },
  cyan: {
    bg: "bg-cyan-50 border-cyan-100",
    icon: "bg-cyan-100 text-cyan-700",
    tag: "bg-cyan-100 text-cyan-700",
  },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            O que eu ofereço
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Serviços
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Soluções completas para sua jornada profissional e os desafios de
            dados da sua empresa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`rounded-2xl border p-8 flex flex-col gap-6 ${colors.bg} transition-shadow hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.icon}`}>
                  {service.icon}
                </div>

                {/* Title & description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.tag}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className="mt-2 text-center text-sm font-semibold text-slate-700 hover:text-blue-700 underline underline-offset-2 transition-colors"
                >
                  Solicitar este serviço →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
