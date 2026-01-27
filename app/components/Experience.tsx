import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Signo Tech",
    description: "Atuei na validação e garantia da qualidade de projetos web e mobile, realizando testes manuais end-to-end. Fui o principal ponto de contato com clientes, conduzindo reuniões de alinhamento e entrega, além de participar do desenvolvimento de landing pages e campanhas de e-mail marketing com foco em conversão e engajamento.",
    icon: "/cards/signo-logo.png",
  },
  {
    id: 2,
    title: "Mitel",
    description: "Atuei na automação de infraestrutura com scripts em Shell para padronização de DNS e IPs, reduzindo erros manuais, e desenvolvi rotinas para gerenciamento de logs, diminuindo em 50% o tempo de tarefas recorrentes. Também conduzi a reconfiguração de um switch de grande porte, consolidando a rede e reduzindo custos operacionais.",
    icon: "/cards/mitel-logo.png",
  },
   ];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Experiencia Profissional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

