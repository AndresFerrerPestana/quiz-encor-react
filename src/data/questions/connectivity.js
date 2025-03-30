export const connectivity = [
  {
    question: {
      en: "What is the difference between OSPF and EIGRP?",
      pt: "Qual é a diferença entre OSPF e EIGRP?",
    },
    options: {
      en: [
        "OSPF is a link-state protocol using SPF algorithm; EIGRP is an advanced distance-vector using DUAL.",
        "Both are distance-vector protocols.",
        "OSPF uses BGP internally; EIGRP uses RIP.",
        "They are the same type of protocol.",
      ],
      pt: [
        "O OSPF é um protocolo de estado de ligação que usa o algoritmo SPF; o EIGRP é um vetor de distância avançado que usa o algoritmo DUAL.",
        "Ambos são protocolos de vetor de distância.",
        "O OSPF usa BGP internamente; o EIGRP usa RIP.",
        "São o mesmo tipo de protocolo.",
      ],
    },
    answer: 0,
    explanation: {
      en: "OSPF is a link-state protocol using the SPF algorithm, while EIGRP is an advanced distance-vector protocol using DUAL.",
      pt: "O OSPF é um protocolo de estado de ligação que usa o algoritmo SPF; o EIGRP é um vetor de distância avançado que usa o algoritmo DUAL.",
    },
  },
  {
    question: {
      en: "How does OSPF determine the best path?",
      pt: "Como é que o OSPF determina o melhor caminho?",
    },
    options: {
      en: [
        "By hop count",
        "Using cost based on bandwidth",
        "Through latency measurement",
        "By MAC address",
      ],
      pt: [
        "Pela contagem de saltos",
        "Usando custo baseado na largura de banda",
        "Através da medição de latência",
        "Pelo endereço MAC",
      ],
    },
    answer: 1,
    explanation: {
      en: "OSPF calculates the shortest path using cost, which is based on bandwidth.",
      pt: "O OSPF calcula o caminho mais curto com base no custo, que é determinado pela largura de banda.",
    },
  },
  {
    question: {
      en: "What is the function of a loopback interface in routing?",
      pt: "Qual é a função de uma interface de loopback no encaminhamento?",
    },
    options: {
      en: [
        "To test cables",
        "To provide a stable router ID and enhance routing stability",
        "To connect to wireless networks",
        "To provide NAT service",
      ],
      pt: [
        "Para testar cabos",
        "Para fornecer um ID de router estável e melhorar a estabilidade do encaminhamento",
        "Para ligar a redes wireless",
        "Para fornecer serviço NAT",
      ],
    },
    answer: 1,
    explanation: {
      en: "A loopback interface is always up and used as a router ID or for routing protocol stability.",
      pt: "Uma interface de loopback está sempre ativa e é usada como ID do router ou para estabilidade dos protocolos de encaminhamento.",
    },
  },
  {
    question: {
      en: "What are the main types of OSPF areas?",
      pt: "Quais são os principais tipos de áreas OSPF?",
    },
    options: {
      en: [
        "Backbone (Area 0), Standard, Stub, Totally Stubby, and NSSA",
        "Private, Public, Internal, and External",
        "Level 1, Level 2, Level 3, and Global",
        "Admin, Guest, and Restricted",
      ],
      pt: [
        "Backbone (Área 0), Standard, Stub, Totally Stubby e NSSA",
        "Privada, Pública, Interna e Externa",
        "Nível 1, Nível 2, Nível 3 e Global",
        "Admin, Convidado e Restrita",
      ],
    },
    answer: 0,
    explanation: {
      en: "OSPF defines several area types including Backbone (Area 0), Standard, Stub, Totally Stubby, and NSSA.",
      pt: "O OSPF define vários tipos de áreas como Backbone (Área 0), Standard, Stub, Totally Stubby e NSSA.",
    },
  },
  {
    question: {
      en: "What is the administrative distance of OSPF and EIGRP?",
      pt: "Qual é a distância administrativa do OSPF e do EIGRP?",
    },
    options: {
      en: [
        "OSPF: 120, EIGRP: 100",
        "OSPF: 90, EIGRP: 110",
        "OSPF: 110, EIGRP: 90 (internal)",
        "OSPF: 0, EIGRP: 255",
      ],
      pt: [
        "OSPF: 120, EIGRP: 100",
        "OSPF: 90, EIGRP: 110",
        "OSPF: 110, EIGRP: 90 (interna)",
        "OSPF: 0, EIGRP: 255",
      ],
    },
    answer: 2,
    explanation: {
      en: "OSPF has an administrative distance of 110; EIGRP uses 90 for internal routes.",
      pt: "O OSPF tem uma distância administrativa de 110; o EIGRP usa 90 para rotas internas.",
    },
  },
  {
    question: {
      en: "What is the role of the designated router (DR) in OSPF?",
      pt: "Qual é o papel do router designado (DR) no OSPF?",
    },
    options: {
      en: [
        "To perform NAT translation",
        "To reduce LSA flooding in broadcast/multicast networks",
        "To enforce access lists",
        "To manage BGP sessions",
      ],
      pt: [
        "Realizar tradução NAT",
        "Reduzir o envio de LSAs em redes broadcast/multicast",
        "Aplicar listas de acesso",
        "Gerir sessões BGP",
      ],
    },
    answer: 1,
    explanation: {
      en: "The DR helps reduce LSA flooding and maintain efficiency in OSPF networks.",
      pt: "O DR ajuda a reduzir o envio de LSAs e a manter a eficiência em redes OSPF.",
    },
  },
  {
    question: {
      en: "How does BGP establish a peer relationship with a neighbor?",
      pt: "Como é que o BGP estabelece uma relação de vizinhança com outro router?",
    },
    options: {
      en: [
        "Through UDP and RIP configuration",
        "Using TCP port 179 and agreed parameters",
        "Via ICMP handshake",
        "Using DNS and DHCP broadcast",
      ],
      pt: [
        "Através de UDP e configuração RIP",
        "Usando a porta TCP 179 e parâmetros acordados",
        "Via handshake ICMP",
        "Utilizando broadcast DNS e DHCP",
      ],
    },
    answer: 1,
    explanation: {
      en: "BGP establishes a TCP session on port 179 with agreement on parameters like AS number.",
      pt: "O BGP estabelece uma sessão TCP na porta 179 com concordância nos parâmetros como o número de AS.",
    },
  },
];
