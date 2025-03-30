export const virtualization = [
  {
    question: {
      en: "What is a hypervisor?",
      pt: "O que é um hypervisor?",
    },
    options: {
      en: [
        "A software for managing only physical networks.",
        "A software layer that allows multiple operating systems to run on a single physical machine.",
        "A dedicated network storage server.",
        "An operating system used on Cisco routers.",
      ],
      pt: [
        "Um software que gere apenas redes físicas.",
        "Uma camada de software que permite a execução de vários sistemas operativos numa única máquina física.",
        "Um servidor dedicado para armazenamento em rede.",
        "Um sistema operativo utilizado em routers Cisco.",
      ],
    },
    answer: 1,
    explanation: {
      en: "A hypervisor enables multiple operating systems to run concurrently on a single physical machine, sharing resources.",
      pt: "Um hypervisor permite que vários sistemas operativos corram simultaneamente numa única máquina física, partilhando recursos.",
    },
  },
  {
    question: {
      en: "What is the difference between a Type 1 and a Type 2 hypervisor?",
      pt: "Qual é a diferença entre um hypervisor Tipo 1 e Tipo 2?",
    },
    options: {
      en: [
        "Type 1 is used on desktops; Type 2 on servers.",
        "Type 1 runs on top of an OS; Type 2 runs on hardware.",
        "Type 1 runs directly on hardware; Type 2 runs on top of a host OS.",
        "There is no functional difference between them.",
      ],
      pt: [
        "O Tipo 1 é usado em desktops; o Tipo 2 em servidores.",
        "O Tipo 1 corre sobre um sistema operativo; o Tipo 2 no hardware.",
        "O Tipo 1 corre diretamente no hardware; o Tipo 2 corre sobre um sistema operativo anfitrião.",
        "Não existe diferença funcional entre eles.",
      ],
    },
    answer: 2,
    explanation: {
      en: "Type 1 hypervisors run directly on physical hardware, while Type 2 requires a host operating system.",
      pt: "O hypervisor Tipo 1 corre diretamente sobre o hardware físico, enquanto o Tipo 2 necessita de um sistema operativo anfitrião.",
    },
  },
  {
    question: {
      en: "What is the purpose of virtual machines (VMs)?",
      pt: "Qual é o propósito das máquinas virtuais (VMs)?",
    },
    options: {
      en: [
        "Increase network traffic.",
        "To create isolated environments for running applications and OS, improving resource utilization.",
        "Replace physical switches.",
        "Manage backup servers.",
      ],
      pt: [
        "Aumentar o tráfego de rede.",
        "Criar ambientes isolados para executar aplicações e sistemas operativos, melhorando a utilização de recursos.",
        "Substituir switches físicos.",
        "Gerir servidores de backup.",
      ],
    },
    answer: 1,
    explanation: {
      en: "VMs create independent environments on shared hardware, improving efficiency and resource utilization.",
      pt: "As VMs criam ambientes independentes em hardware partilhado, melhorando a eficiência e utilização de recursos.",
    },
  },
];
