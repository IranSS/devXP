let dados = [
  {
    "titulo": "Introdução ao Python",
    "descricao": "Aprenda a programar em Python do zero com este curso completo, cobrindo desde os conceitos básicos até a implementação de scripts práticos. Ideal para iniciantes que querem dominar uma das linguagens mais versáteis e populares da atualidade.",
    "link": "https://www.coursera.org/learn/python",
    "tags": "Python, Programação, Curso Online, Coursera, Iniciantes, Automação, Ciência de Dados",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento Web com React",
    "descricao": "Domine o React, a biblioteca JavaScript mais usada para criação de interfaces de usuário dinâmicas e escaláveis. Aprenda a desenvolver aplicações web modernas com um foco prático e direto.",
    "link": "https://www.udemy.com/react-the-complete-guide/",
    "tags": "React, JavaScript, Desenvolvimento Web, Udemy, Frontend, UI, Aplicações Modernas",
    "nivel": "Intermediário",
    "acesso": "Pago"
  },
  {
    "titulo": "Machine Learning para Iniciantes",
    "descricao": "Introdução ao aprendizado de máquina, explorando algoritmos e técnicas fundamentais com exemplos práticos. Ideal para quem está começando no campo da inteligência artificial.",
    "link": "https://www.kaggle.com/learn/machine-learning",
    "tags": "Machine Learning, Data Science, Kaggle, IA, Inteligência Artificial, Algoritmos",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Docker para Iniciantes",
    "descricao": "Aprenda a containerizar suas aplicações com Docker, uma ferramenta essencial para DevOps e desenvolvimento ágil. Ideal para desenvolvedores que buscam isolar ambientes e facilitar o deployment.",
    "link": "https://docs.docker.com/get-started/",
    "tags": "Docker, Containerização, DevOps, Deploy, CI/CD, Virtualização",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Kubernetes: Orquestração de Containers",
    "descricao": "Gerencie seus containers em escala com Kubernetes, a ferramenta líder para orquestração de contêineres em ambientes de produção. Domine os conceitos de clusters e deploys automáticos.",
    "link": "https://kubernetes.io/docs/tutorials/",
    "tags": "Kubernetes, Docker, Cloud, Orquestração, DevOps, Escalabilidade, Automação",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Documentação do Pandas",
    "descricao": "Explore a documentação oficial do Pandas, uma biblioteca essencial para manipulação e análise de dados em Python. Encontre informações detalhadas sobre funções, métodos e exemplos práticos para melhorar suas habilidades em análise de dados.",
    "link": "https://pandas.pydata.org/pandas-docs/stable/",
    "tags": "Python, Pandas, Ciência de Dados, Análise de Dados, Manipulação de Dados",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento Web Full Stack com MEAN na Udemy",
    "descricao": "Domine a stack MEAN (MongoDB, Express.js, Angular e Node.js) com este curso completo, que abrange o desenvolvimento de aplicações web tanto no frontend quanto no backend. Aprenda a construir e gerenciar aplicações modernas e escaláveis usando essas tecnologias.",
    "link": "https://www.udemy.com/topic/mean-stack/",
    "tags": "MEAN Stack, Desenvolvimento Web, MongoDB, Express.js, Angular, Node.js, Full Stack",
    "nivel": "Intermediário",
    "acesso": "Pago"
  },
  {
    "titulo": "Desenvolvimento Web com MEAN Stack na Pluralsight",
    "descricao": "Aprofunde seus conhecimentos no desenvolvimento web com a stack MEAN. Este curso abrange todos os aspectos das tecnologias MEAN, desde a configuração até a construção de aplicações web robustas.",
    "link": "https://www.pluralsight.com/professional-services/software-development/mean-stack",
    "tags": "MEAN Stack, Desenvolvimento Web, MongoDB, Express.js, Angular, Node.js",
    "nivel": "Intermediário",
    "acesso": "Pago"
  },
  {
    "titulo": "Realidade Virtual com Unreal Engine",
    "descricao": "Crie jogos e experiências imersivas em realidade virtual com o Unreal Engine, a poderosa ferramenta para desenvolvimento de jogos AAA. Aprenda técnicas avançadas de design e programação 3D.",
    "link": "https://docs.unrealengine.com/",
    "tags": "Unreal Engine, Realidade Virtual, Game Development, 3D, VR, Design de Jogos",
    "nivel": "Avançado",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Inteligência Artificial com PyTorch",
    "descricao": "Construa modelos de deep learning avançados com PyTorch, uma das bibliotecas mais populares e flexíveis para inteligência artificial. Aprenda a treinar redes neurais para tarefas complexas.",
    "link": "https://pytorch.org/tutorials/",
    "tags": "PyTorch, Inteligência Artificial, Deep Learning, Machine Learning, Redes Neurais",
    "nivel": "Avançado",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Introdução à Engenharia de Software",
    "descricao": "Aprenda os princípios fundamentais da engenharia de software, incluindo metodologias ágeis, ciclo de vida de desenvolvimento e boas práticas para garantir a qualidade de sistemas robustos e escaláveis.",
    "link": "https://www.coursera.org/specializations/software-engineering",
    "tags": "Engenharia de Software, Metodologias Ágeis, Scrum, Kanban, Desenvolvimento de Sistemas",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento de Aplicativos Móveis Híbridos com Ionic",
    "descricao": "Crie aplicativos móveis para iOS e Android utilizando Ionic, uma poderosa ferramenta que permite o desenvolvimento com uma única base de código. A solução perfeita para quem quer economizar tempo e recursos.",
    "link": "https://ionicframework.com/docs/",
    "tags": "Ionic, Desenvolvimento Mobile, Híbrido, iOS, Android, Aplicativos, Cross-platform",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Cibersegurança: Protegendo seus Sistemas",
    "descricao": "Aprenda sobre as principais ameaças cibernéticas e como implementar medidas de segurança robustas para proteger seus sistemas. Ideal para profissionais de TI e segurança da informação.",
    "link": "https://www.coursera.org/specializations/cybersecurity",
    "tags": "Cibersegurança, Segurança da Informação, Hacking Ético, Proteção de Sistemas, TI",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Banco de Dados NoSQL com MongoDB",
    "descricao": "Domine o MongoDB, um dos bancos de dados NoSQL mais utilizados no mercado, ideal para o armazenamento de grandes volumes de dados não estruturados e altamente escaláveis.",
    "link": "https://www.mongodb.com/docs/",
    "tags": "MongoDB, NoSQL, Banco de Dados, Big Data, Escalabilidade, Documentos",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Automação de Testes com Selenium",
    "descricao": "Automatize seus testes de software web com Selenium, garantindo maior qualidade e eficiência no desenvolvimento de aplicações. Aprenda a criar scripts de automação robustos e reutilizáveis.",
    "link": "https://www.selenium.dev/",
    "tags": "Selenium, Testes Automatizados, Qualidade de Software, Web, Automação, Testes Funcionais",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento de Jogos 3D com Unity",
    "descricao": "Crie jogos em 3D profissionais com Unity, a engine líder no desenvolvimento de jogos para diversas plataformas. Aprenda técnicas avançadas de design e programação para alcançar resultados de alta qualidade.",
    "link": "https://learn.unity.com/",
    "tags": "Unity, Game Development, 3D, Jogos, Realidade Virtual, Gráficos",
    "nivel": "Avançado",
    "acesso": "Pago"
  },
  {
    "titulo": "Machine Learning Avançado com TensorFlow",
    "descricao": "Explore técnicas avançadas de deep learning com TensorFlow, uma das ferramentas mais poderosas para construir modelos de machine learning de alto desempenho.",
    "link": "https://www.tensorflow.org/tutorials",
    "tags": "TensorFlow, Deep Learning, Machine Learning, Redes Neurais, IA, Algoritmos",
    "nivel": "Avançado",
    "acesso": "Pago"
  },
  {
    "titulo": "Curso de Linux - Primeiros Passos",
    "descricao": "Mergulhe no mundo do Linux com este curso gratuito ideal para iniciantes. Você aprenderá desde a instalação até o uso dos principais comandos e ferramentas essenciais para o dia a dia com o sistema operacional Linux.",
    "link": "https://www.youtube.com/playlist?list=PLHz_AreHm4dlIXleu20uwPWFOSswqLYbV",
    "tags": "Linux, Bash, Terminal, Open Source, Sistemas",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Introdução à Ciência de Dados com R",
    "descricao": "Aprenda a explorar e analisar dados com a linguagem R, uma das ferramentas mais populares entre estatísticos e cientistas de dados. Descubra a versatilidade do R para criar visualizações e modelos preditivos.",
    "link": "https://www.datacamp.com/courses/free-introduction-to-r",
    "tags": "R, Ciência de Dados, Estatística, Análise de Dados, Visualizações, Modelos Preditivos",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "C# para Desenvolvimento .NET",
    "descricao": "Aprenda a criar aplicações Windows, web e mobile com C# e a plataforma .NET. Domine os conceitos de orientação a objetos e o framework .NET.",
    "link": "https://docs.microsoft.com/en-us/dotnet/",
    "tags": "C#, .NET, Desenvolvimento Web, Desenvolvimento Mobile, Windows, Orientação a Objetos, Csharp",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial)"
  },
  {
    "titulo": "JavaScript Avançado: ES6+ e Frameworks Modernos",
    "descricao": "Explore os recursos modernos do JavaScript, como ES6+, e domine frameworks populares como Vue.js e Angular. Construa aplicações web interativas e performantes.",
    "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "tags": "JavaScript, ES6, Vue.js, Angular, Desenvolvimento Web, Frontend",
    "nivel": "Avançado",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "PHP para Desenvolvimento Web",
    "descricao": "Crie sites dinâmicos e aplicações web com PHP. Aprenda a trabalhar com bancos de dados, frameworks como Laravel e Symfony, e a construir APIs RESTful.",
    "link": "https://www.php.net/",
    "tags": "PHP, Desenvolvimento Web, Laravel, Symfony, MySQL, APIs",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "Swift para Desenvolvimento iOS",
    "descricao": "Desenvolva aplicativos nativos para iOS utilizando a linguagem Swift. Aprenda a criar interfaces fluidas e aproveitar os recursos do sistema iOS.",
    "link": "https://developer.apple.com/swift/",
    "tags": "Swift, iOS, Desenvolvimento Mobile, Xcode",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e playgrounds interativos)"
  },
  {
    "titulo": "Kotlin para Desenvolvimento Multiplataforma",
    "descricao": "Construa aplicações Android, web e desktop com Kotlin. Descubra os benefícios da tipagem estática e da interoperabilidade com Java.",
    "link": "https://kotlinlang.org/",
    "tags": "Kotlin, Android, Desenvolvimento Multiplataforma, Java",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Ruby on Rails para Desenvolvimento Web",
    "descricao": "Construa aplicações web de forma rápida e eficiente com Ruby on Rails. Aprenda a utilizar o framework MVC e a convenção sobre configuração.",
    "link": "https://rubyonrails.org/",
    "tags": "Ruby on Rails, Ruby, Desenvolvimento Web, MVC",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "Introdução à Ciência de Dados com Python (Parte 2)",
    "descricao": "Dando continuidade à jornada na ciência de dados com Python, aprofunde seus conhecimentos em visualização de dados com Seaborn e Matplotlib, além de explorar técnicas de modelagem preditiva mais avançadas.",
    "link": "https://www.fast.ai/",
    "tags": "Python, Ciência de Dados, Visualização, Seaborn, Matplotlib, Modelagem Preditiva",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento de Jogos 2D com Phaser",
    "descricao": "Crie jogos 2D envolventes e divertidos com Phaser, um framework JavaScript poderoso e fácil de usar. Aprenda a criar animações, interações e jogos completos.",
    "link": "https://phaser.io/",
    "tags": "Phaser, JavaScript, Desenvolvimento de Jogos, 2D, Game Development",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Introdução à Engenharia de Dados com Apache Spark",
    "descricao": "Aprenda a processar grandes volumes de dados em tempo real com Apache Spark. Domine as principais transformações e operações para extrair insights valiosos de seus dados.",
    "link": "https://spark.apache.org/",
    "tags": "Apache Spark, Big Data, Engenharia de Dados, Processamento de Dados, Data Engineering",
    "nivel": "Avançado",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Lógica de Programação com Algoritmos e Estruturas de Dados",
    "descricao": "Aprofunde seus conhecimentos em lógica de programação, algoritmos e estruturas de dados. Aprenda a resolver problemas complexos e a otimizar o desempenho das suas aplicações.",
    "link": "https://www.udemy.com/course/algorithms-and-data-structures/",
    "tags": "Lógica de Programação, Algoritmos, Estruturas de Dados, Udemy, Programação, Otimização",
    "nivel": "Iniciante",
    "acesso": "Pago"
  },
  {
    "titulo": "Programação Orientada a Objetos com C#",
    "descricao": "Domine os conceitos fundamentais da programação orientada a objetos com C#. Aprenda a criar aplicações robustas e escaláveis usando princípios de design e práticas recomendadas.",
    "link": "https://www.microsoft.com/en-us/learning/csharp-tutorials/",
    "tags": "C#, Programação Orientada a Objetos, .NET, Desenvolvimento de Software, Design Patterns, Csharp",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "Java Avançado: Streams e Lambdas",
    "descricao": "Explore conceitos avançados de Java, como Streams e Expressões Lambda, para escrever código mais limpo e eficiente. Aprenda a manipular dados e criar pipelines funcionais.",
    "link": "https://www.baeldung.com/java-8-streams",
    "tags": "Java, Streams, Lambdas, Programação Funcional, Baeldung, Desenvolvimento Avançado",
    "nivel": "Avançado",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento de Aplicações Web com PHP e Laravel",
    "descricao": "Aprenda a construir aplicações web modernas e robustas com PHP e o framework Laravel. Aprofunde seus conhecimentos em desenvolvimento backend e melhores práticas.",
    "link": "https://laravel.com/docs",
    "tags": "PHP, Laravel, Desenvolvimento Web, Backend, Frameworks, APIs",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "JavaScript para Desenvolvimento de Frontend: React e Vue.js",
    "descricao": "Aprofunde-se no desenvolvimento frontend com JavaScript, explorando frameworks modernos como React e Vue.js. Aprenda a criar interfaces interativas e dinâmicas.",
    "link": "https://www.frontendmasters.com/",
    "tags": "JavaScript, React, Vue.js, Frontend, Desenvolvimento Web, Interfaces Dinâmicas",
    "nivel": "Avançado",
    "acesso": "Pago"
  },
  {
    "titulo": "Introdução ao SQL para Programadores",
    "descricao": "Aprenda os fundamentos do SQL, incluindo consultas básicas e avançadas, para gerenciar e manipular bancos de dados relacionais. Ideal para quem deseja solidificar conhecimentos em banco de dados.",
    "link": "https://www.sqlcourse.com/",
    "tags": "SQL, Banco de Dados, Consultas SQL, Programação, Relacional, Tutorial",
    "nivel": "Iniciante",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Inglês para Profissionais de TI - Udemy",
    "descricao": "Aprimore suas habilidades em inglês técnico e comunicação profissional no campo da TI. Aprenda a utilizar terminologias específicas e a se comunicar efetivamente em ambientes corporativos internacionais.",
    "link": "https://www.udemy.com/course/curso-de-ingles-para-ti/?couponCode=OF83024E",
    "tags": "Inglês para TI, Comunicação Profissional, Terminologia, Habilidades Linguísticas, Udemy",
    "nivel": "Intermediário",
    "acesso": "Pago"
  },
  {
    "titulo": "Programação Multithread com Java",
    "descricao": "Entenda como implementar e gerenciar múltiplos threads em Java para melhorar o desempenho e a eficiência das suas aplicações. Explore técnicas de sincronização e concorrência.",
    "link": "https://www.javarevisited.blogspot.com/",
    "tags": "Java, Multithreading, Concorrência, Programação, Desempenho, Sincronização",
    "nivel": "Avançado",
    "acesso": "Gratuito"
  },
  {
    "titulo": "Desenvolvimento Backend com Node.js e Express",
    "descricao": "Aprenda a criar APIs e serviços backend escaláveis utilizando Node.js e o framework Express. Explore conceitos de desenvolvimento assíncrono e gerenciamento de rotas.",
    "link": "https://expressjs.com/",
    "tags": "Node.js, Express, Backend, APIs, Desenvolvimento Web, Assíncrono",
    "nivel": "Intermediário",
    "acesso": "Gratuito (documentação oficial e tutoriais online)"
  },
  {
    "titulo": "Design Patterns em PHP",
    "descricao": "Explore os principais padrões de design de software aplicáveis em PHP, como Singleton, Factory e Observer. Aprenda a aplicar esses padrões para criar código mais modular e reutilizável.",
    "link": "https://www.php-fig.org/psr/",
    "tags": "PHP, Design Patterns, Programação, Modularidade, Reutilização, Padrões de Software",
    "nivel": "Intermediário",
    "acesso": "Gratuito"
  }
]