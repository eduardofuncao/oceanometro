"use client";
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-slate-600 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-12 bg-black shadow-md mt-16 mb-16 rounded-md">
        <h1 className="text-4xl font-mono mb-6 text-center text-indigo-200">Sobre Nós</h1>

        <p className="text-lg font-mono text-white mb-6">
          Bem-vindo ao Oceanômetro! Nosso site é dedicado a apoiar iniciativas ambientais e facilitar doações para
          projetos que visam a preservação dos oceanos.
        </p>
        <p className="text-lg font-mono text-white mb-6">
          A cada um real doado, você está ajudando a manter nossos oceanos limpos e saudáveis. Agradecemos pelo seu
          apoio e contribuição!
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Se você tiver alguma dúvida ou quiser saber mais sobre nosso trabalho, não hesite em entrar em contato conosco.
          Estamos aqui para ajudar e fornecer todas as informações necessárias.
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Nosso compromisso é com a sustentabilidade e a saúde dos nossos oceanos. No Oceanômetro, acreditamos que cada pequena contribuição faz a diferença. Com a sua ajuda, podemos impulsionar projetos que combatem a poluição marinha, protegem a vida marinha e promovem a conscientização sobre a importância dos oceanos para o equilíbrio do nosso planeta.
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Além disso, estamos sempre buscando parcerias com organizações e especialistas dedicados à preservação dos oceanos. Juntos, podemos fazer muito mais.
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Fique à vontade para explorar nosso site, conhecer os projetos em andamento e, se sentir vontade, fazer uma doação. Cada contribuição é um passo em direção a um futuro mais sustentável para as gerações presentes e futuras.
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Obrigado por se juntar a nós nesta jornada rumo a oceanos mais limpos e saudáveis!
        </p>
        <p className="text-lg font-mono text-white mb-6">
          Se precisar de qualquer informação adicional ou tiver alguma dúvida, estamos à disposição para ajudar. Entre em contato conosco a qualquer momento.
        </p>
      </div>
    </div>
  );
};

export default About;
