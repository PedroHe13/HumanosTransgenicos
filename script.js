const topics = [
    {
        id: 1,
        title: "Erradicação de Doenças Genéticas",
        description: "Imaginem um mundo onde doenças como a distrofia muscular de Duchenne, a fibrose cística ou a doença de Huntington simplesmente não existam mais. Com a engenharia genética, isso não é só um sonho: é uma possibilidade real. Ao editar o DNA humano, podemos eliminar essas condições hereditárias devastadoras antes mesmo de elas se manifestarem. Isso significa menos sofrimento para milhões de famílias, menos crianças enfrentando vidas limitadas e uma redução drástica nos custos dos sistemas de saúde. Estamos falando de uma revolução que não apenas cura, mas previne, garantindo um futuro mais saudável pra humanidade.",
        image: "https://imgs.search.brave.com/zN10DcENyXhd46f-H_Th0JUWhKLsllR_9RwYPMd0rdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ia3Qt/c2EtZWFzdC0xLWNt/cy1kcnVwYWwuczMu/c2EtZWFzdC0xLmFt/YXpvbmF3cy5jb20v/c2Fsb21hb3pvcHBp/LmNvbS5ici9hc3Nl/dHMvaW5saW5lLWlt/YWdlcy9BbmVtaWEl/MjBmYWxjaWZvcm1l/LlBORz9BSWFfcFpw/cTJqLjZKZ2k1dEhB/d2pIYVNlX0VKd0Jm/NA",
        mainColor: "#ff0000" // Azul aço (destaque da imagem)
    },
    {
        id: 2,
        title: "Aumento da Resistência a Doenças",
        description: "E se nossos corpos fossem naturalmente blindados contra vírus como o HIV ou até pandemias que ainda nem imaginamos? A criação de humanos transgênicos nos permite projetar sistemas imunológicos mais fortes e adaptáveis. Pense nisso: um mundo onde as próximas gerações possam enfrentar doenças infecciosas com uma resistência que hoje só sonhamos. Isso não só salvaria vidas, mas também reduziria o impacto econômico e social de crises sanitárias, nos preparando pra qualquer ameaça que a natureza jogue no nosso caminho.",
        image: "https://static.biologianet.com/2019/08/antibioticos.jpg",
        mainColor: "#ff1493" // Laranja forte (destaque da imagem)
    },
    {
        id: 3,
        title: "Expansão da Longevidade e Qualidade de Vida",
        description: "Quem aqui não gostaria de viver mais, e viver melhor? Com a modificação genética, podemos desacelerar o envelhecimento celular, combatendo doenças degenerativas como Alzheimer e Parkinson. Isso significa mais anos de vida ativa, com memórias intactas e corpos funcionando bem. Não é só sobre adicionar tempo à vida, mas qualidade a cada dia. Imagine avós brincando com os netos sem limitações, ou você mesmo aproveitando décadas extras com energia e saúde. Isso é o que a transgenia pode nos oferecer.",
        image: "https://nutritotal.com.br/pro/wp-content/uploads/2023/12/envelhecimento-saudavel-1024x410.png",
        mainColor: "#006400" // Azul claro (destaque da imagem)
    },
    {
        id: 4,
        title: "Melhoria das Capacidades Físicas e Cognitivas",
        description: "Agora, pensem em um ser humano otimizado: mais inteligente, com memória afiada, força física impressionante e capaz de se adaptar a qualquer ambiente — até o espaço sideral! A engenharia genética pode aprimorar nossas capacidades, nos tornando mais aptos pra desafios como colonizar Marte ou resolver problemas complexos aqui na Terra. Isso não é ficção científica, é o próximo passo da nossa evolução, abrindo portas pra conquistas que hoje parecem impossíveis.",
        image: "https://metodosupera.com.br/wp-content/uploads/2022/08/como-melhorar-capacidade-cognitiva-1024x576.jpeg",
        mainColor: "#ff8c00" // Laranja escuro (destaque da imagem)
    },
    {
        id: 5,
        title: "Avanço da Ciência e da Biotecnologia",
        description: "A pesquisa com humanos transgênicos é um portal pra avanços incríveis. Estamos falando de terapias revolucionárias, órgãos artificiais perfeitamente compatíveis e soluções médicas que podem transformar a vida de bilhões. Cada experimento nessa área é um tijolo na construção de um futuro onde a ciência não só entende o corpo humano, mas o recria de forma mais eficiente. Isso é biotecnologia na sua forma mais poderosa, beneficiando desde a medicina até a exploração espacial.",
        image: "https://fia.com.br/wp-content/uploads/2020/07/b1.jpg",
        mainColor: "#32cd32" // Verde limão (destaque da imagem)
    },
    {
        id: 6,
        title: "Redução de Desigualdades Biológicas",
        description: "Hoje, muitas pessoas nascem com desvantagens genéticas que afetam sua saúde e oportunidades. E se pudéssemos corrigir isso? A transgenia pode nivelar o campo, eliminando predisposições a doenças e garantindo que todos tenham uma base biológica justa. Não é sobre criar super-humanos privilegiados, mas sobre dar a todos a chance de uma vida saudável, reduzindo desigualdades que a natureza, às vezes, impõe sem piedade.",
        image: "https://www.politize.com.br/wp-content/uploads/2024/07/Reducao-da-desigualdade-1-1024x683.webp",
        mainColor: "#696969" // Vermelho tomate (destaque da imagem)
    },
    {
        id: 7,
        title: "Adaptação a Mudanças Climáticas",
        description: "Com o planeta mudando — aquecimento global, radiação solar intensa, ambientes extremos —, precisamos de humanos que possam sobreviver a isso. A modificação genética pode nos tornar resistentes a altas temperaturas, capazes de viver com menos oxigênio ou até prosperar em outros planetas. Imagine uma humanidade que não só enfrenta o colapso climático, mas se adapta a ele, garantindo nossa sobrevivência em um universo cada vez mais hostil.",
        image: "https://s3.static.brasilescola.uol.com.br/img/2019/11/aquecimento-global-e-efeito-estufa.jpg",
        mainColor: "#8b4513" // Laranja forte (destaque da imagem)
    },
    {
        id: 8,
        title: "Aceleração da Evolução Humana",
        description: "A evolução natural é lenta, aleatória, e muitas vezes cruel. Por que esperar milhares de anos pra melhorar, se podemos direcionar esse processo agora? Com a transgenia, eliminamos traços prejudiciais e desenvolvemos habilidades que nos tornam mais fortes, inteligentes e adaptados. É como pegar o volante da nossa própria história biológica e acelerar rumo a uma espécie humana mais avançada, pronta pra dominar o futuro.",
        image: "https://blog.stoodi.com.br/wp-content/uploads/2020/04/evolu%C3%A7%C3%A3o-humana-1.png",
        mainColor: "#000000" // Azul aço (destaque da imagem)
    },
    {
        id: 9,
        title: "Redução da Dependência de Recursos",
        description: "E se precisássemos de menos comida, água ou energia pra viver bem? Modificando nosso metabolismo pra ser mais eficiente, os humanos transgênicos poderiam reduzir o impacto no meio ambiente. Menos calorias, menos desperdício, mais sustentabilidade. Isso não só alivia a pressão sobre os recursos naturais, mas nos torna uma espécie mais harmoniosa com o planeta, garantindo que ele continue habitável pras próximas gerações.",
        image: "https://cdn.shopify.com/s/files/1/0076/0994/2086/files/amazonia_480x480.jpg?v=1694020033",
        mainColor: "#228b22" // Verde floresta (destaque da imagem)
    },
    {
        id: 10,
        title: "Expansão das Possibilidades Artísticas",
        description: "Por fim, imagine um mundo onde nossa percepção de cores, sons e emoções é ampliada. A modificação genética pode turbinar nossa criatividade, nos dando habilidades sensoriais e físicas que revolucionam a arte, o esporte e a inovação. Pintores vendo tons que nunca existiram, músicos criando sinfonias impossíveis, atletas quebrando barreiras inimagináveis. Isso é a transgenia abrindo um novo capítulo na expressão humana.",
        image: "https://ceugaleria.com.br/galeria/wp-content/uploads/2024/01/Arte-Contemporanea-e-Tecnologia.jpg",
        mainColor: "#00008b" // Rosa quente (destaque da imagem)
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".topic-btn");
    const descriptionBox = document.getElementById("topic-description");
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const topicId = parseInt(button.getAttribute("data-id"));
            const topic = topics.find(t => t.id === topicId);

            // Atualiza o conteúdo da descrição
            descriptionBox.innerHTML = `
                <h3>${topic.title}</h3>
                <img src="${topic.image}" alt="${topic.title}">
                <p>${topic.description}</p>
            `;

            // Aplica a paleta de cores baseada na cor principal
            body.style.background = `linear-gradient(135deg, ${topic.mainColor}33, ${topic.mainColor}11)`;
            header.style.background = topic.mainColor;
            footer.style.background = topic.mainColor;
            descriptionBox.style.background = `${topic.mainColor}22`; // Transparência leve
            descriptionBox.querySelector("h3").style.color = topic.mainColor;

            // Animação
            descriptionBox.style.animation = "none";
            setTimeout(() => {
                descriptionBox.style.animation = "slideUp 0.5s ease-out";
            }, 10);
        });
    });
});