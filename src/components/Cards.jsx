import { Subtitle } from './Subtitle'
import { Text } from './Text'
import { Image } from './Image'
import './styles/cards.css'

export function Cards() {
  return(
    <div className="cards_container">
      <div className="card">
        <Subtitle texto="Git"/>
        <Text 
          content="Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho." 
        />
        <Image estilo="imagem" link="https://img.freepik.com/fotos-gratis/obrigado-mulher-negra-sorridente-curvando-se-com-gesto-de-maos-de-gratidao-namaste-agradecendo-de-pe-sobre-fundo-branco_176420-50501.jpg?w=2000" />
      </div>
      <div className="card">
        <Subtitle texto="HTML"/>
        <Text 
          content="HTML é uma linguagem de marcação utilizada na construção de páginas na Web.
           A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo." 
        />
        <Image estilo="imagem" link="https://conteudo.imguol.com.br/c/entretenimento/9c/2019/05/23/mulher-negra-1558628777867_v2_900x506.jpg.webp" />
      </div>
      <div className="card">
        <Subtitle texto="CSS"/>
        <Text 
          content="CSS é uma linguagem de marcação, amplamente utilizada com HTML, nele você pode fazer a formatção desejada: definir tamanho, cores e fontes." 
        />
        <Image estilo="imagem" link="https://i.pinimg.com/originals/c9/8a/8c/c98a8cf39305b42845dd1087e6c1c65b.jpg" />
      </div>
      <div className="card">
        <Subtitle texto="JavaScript"/>
        <Text 
          content="JavaScript é uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web, o JavaScript é uma das mais importantes tecnologias voltadas para o front-end. Com seus scripts é possível incluir, em uma página estática, elementos dinâmicos como mapas, formulários, operações numéricas, animações, infográficos interativos e muito mais." 
        />
        <Image estilo="imagem" link="https://thumbs.dreamstime.com/b/mo%C3%A7a-sozinha-e-s%C3%B3-que-sente-comprimida-105627555.jpg" />
      </div>
      <div className="card">
        <Subtitle texto="React"/>
        <Text 
          content="O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites, ela veio para facilitar a vida de seus usuários." 
        />
        <Image estilo="imagem" link="https://img.freepik.com/fotos-gratis/retrato-de-uma-mulher-negra-espantada-emocionalmente-engracada-em-roupas-brilhantes-mantendo-as-maos-no-rosto-atonita-com-fofocas-ou-precos-de-venda-grandes-expressoes-faciais-humanas-emocoes-sentimentos-e-atitudes_273609-7754.jpg?w=2000" />
      </div>
    </div>
  )
}