export const architecture = [
  {
    question: {
      en: "What is the difference between the control plane and data plane?",
      pt: "Qual é a diferença entre o plano de controlo e o plano de dados?",
    },
    options: {
      en: [
        "The control plane makes decisions; the data plane forwards packets.",
        "The data plane handles routing; the control plane encrypts traffic.",
        "The control plane deals with physical interfaces; the data plane controls policies.",
        "Both are used for encryption and authentication.",
      ],
      pt: [
        "O plano de controlo toma decisões; o plano de dados encaminha pacotes.",
        "O plano de dados gere o encaminhamento; o plano de controlo encripta tráfego.",
        "O plano de controlo gere interfaces físicas; o plano de dados controla políticas.",
        "Ambos são usados para encriptação e autenticação.",
      ],
    },
    answer: 0,
    explanation: {
      en: "The control plane makes decisions about traffic (routing, policy); the data plane forwards packets based on those decisions.",
      pt: "O plano de controlo toma decisões sobre o tráfego (encaminhamento, políticas); o plano de dados encaminha pacotes com base nessas decisões.",
    },
  },
  {
    question: {
      en: "What are the main components of the Cisco SD-WAN architecture?",
      pt: "Quais são os principais componentes da arquitectura Cisco SD-WAN?",
    },
    options: {
      en: [
        "vSmart, vBond, vManage, and vEdge/cEdge",
        "ISE, DNA Center, WLC",
        "BGP, OSPF, RIP",
        "Leaf, Spine, Core",
      ],
      pt: [
        "vSmart, vBond, vManage e vEdge/cEdge",
        "ISE, DNA Center, WLC",
        "BGP, OSPF, RIP",
        "Leaf, Spine, Core",
      ],
    },
    answer: 0,
    explanation: {
      en: "vSmart, vBond, vManage, and vEdge/cEdge are core components of Cisco SD-WAN.",
      pt: "vSmart, vBond, vManage e vEdge/cEdge são os componentes principais do Cisco SD-WAN.",
    },
  },
  {
    question: {
      en: "What is the role of vSmart in Cisco SD-WAN?",
      pt: "Qual é o papel do vSmart no Cisco SD-WAN?",
    },
    options: {
      en: [
        "Manages and distributes policies via OMP",
        "Authenticates devices",
        "Handles user authentication",
        "Controls encryption between routers",
      ],
      pt: [
        "Gere e distribui políticas através do OMP",
        "Autentica dispositivos",
        "Gere a autenticação de utilizadores",
        "Controla a encriptação entre routers",
      ],
    },
    answer: 0,
    explanation: {
      en: "vSmart manages and distributes routing and security policies to vEdge/cEdge routers using OMP.",
      pt: "O vSmart gere e distribui políticas de encaminhamento e segurança para os routers vEdge/cEdge através do OMP.",
    },
  },
  {
    question: {
      en: "What is the function of the vBond orchestrator?",
      pt: "Qual é a função do orquestrador vBond?",
    },
    options: {
      en: [
        "Authenticates devices and helps establish secure control connections",
        "Distributes routing policies",
        "Acts as a DHCP server",
        "Monitors bandwidth",
      ],
      pt: [
        "Autentica dispositivos e ajuda a estabelecer conexões seguras de controlo",
        "Distribui políticas de encaminhamento",
        "Actua como servidor DHCP",
        "Monitoriza largura de banda",
      ],
    },
    answer: 0,
    explanation: {
      en: "vBond authenticates devices, facilitates NAT traversal, and helps establish secure control connections.",
      pt: "O vBond autentica dispositivos, facilita a travessia de NAT e ajuda a estabelecer conexões de controlo seguras.",
    },
  },
  {
    question: {
      en: "What is the difference between underlay and overlay networks?",
      pt: "Qual é a diferença entre redes underlay e overlay?",
    },
    options: {
      en: [
        "Underlay is physical; overlay is logical built on tunnels",
        "Overlay encrypts; underlay routes",
        "Overlay is slower than underlay",
        "Overlay uses MAC, underlay uses IP",
      ],
      pt: [
        "Underlay é físico; overlay é lógico construído sobre túneis",
        "Overlay encripta; underlay encaminha",
        "Overlay é mais lento que underlay",
        "Overlay usa MAC; underlay usa IP",
      ],
    },
    answer: 0,
    explanation: {
      en: "Underlay is the physical transport network; overlay is the logical topology built on top using tunnels.",
      pt: "O underlay é a rede de transporte física; o overlay é a topologia lógica construída por cima usando túneis.",
    },
  },
  {
    question: {
      en: "What is a spine-leaf architecture and where is it used?",
      pt: "O que é uma arquitectura spine-leaf e onde é utilizada?",
    },
    options: {
      en: [
        "A scalable data centre design using spine and leaf switches",
        "A cloud-native firewall model",
        "A wireless topology for high availability",
        "A routing policy architecture for branch offices",
      ],
      pt: [
        "Uma arquitectura escalável para centros de dados com switches spine e leaf",
        "Um modelo de firewall nativo na cloud",
        "Uma topologia wireless para alta disponibilidade",
        "Uma arquitectura de políticas de routing para filiais",
      ],
    },
    answer: 0,
    explanation: {
      en: "A scalable data centre design using spine switches (core) and leaf switches (access), providing predictable latency and bandwidth.",
      pt: "Uma arquitectura escalável para centros de dados usando switches spine (núcleo) e leaf (acesso), garantindo latência e largura de banda previsíveis.",
    },
  },
  {
    question: {
      en: "What is the purpose of a fabric in a network architecture?",
      pt: "Qual é o propósito de um fabric numa arquitectura de rede?",
    },
    options: {
      en: [
        "To simplify and standardise connectivity with centralised control",
        "To virtualise the control plane only",
        "To encrypt the underlay network",
        "To replace BGP and OSPF in LANs",
      ],
      pt: [
        "Simplificar e padronizar a conectividade com controlo centralizado",
        "Virtualizar apenas o plano de controlo",
        "Encriptar a rede underlay",
        "Substituir BGP e OSPF nas LANs",
      ],
    },
    answer: 0,
    explanation: {
      en: "To simplify and standardise connectivity, allowing centralised control and consistent policy enforcement.",
      pt: "Simplificar e padronizar a conectividade, permitindo controlo centralizado e aplicação consistente de políticas.",
    },
  },
];
