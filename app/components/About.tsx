import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            Movido pela curiosidade e pela melhoria contínua, estou sempre explorando <span className="text-purple-400">novas tecnologias</span><br/> <span className="text-2xl max-w-6xl mx-auto">para transformar ideias em soluções sólidas, 
            acessíveis e de alto impacto </span>
          </p>
        </div>
        <Image 
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}

