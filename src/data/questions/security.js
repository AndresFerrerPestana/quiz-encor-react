export const security = [
    {
      question: {
        pt: "Qual é o propósito principal de uma ACL em redes Cisco?",
        en: "What is the primary purpose of an ACL in Cisco networks?"
      },
      options: {
        pt: [
          "Criar VLANs",
          "Filtrar tráfego com base em critérios definidos",
          "Realizar NAT",
          "Aumentar a largura de banda"
        ],
        en: [
          "Create VLANs",
          "Filter traffic based on defined criteria",
          "Perform NAT",
          "Increase bandwidth"
        ]
      },
      answer: 1,
      explanation: {
        pt: "As ACLs (Access Control Lists) permitem filtrar o tráfego com base em IP, portas, protocolos, etc.",
        en: "ACLs (Access Control Lists) allow traffic filtering based on IP, ports, protocols, etc."
      }
    },
    {
      question: {
        pt: "O que faz o protocolo 802.1X numa rede?",
        en: "What does the 802.1X protocol do in a network?"
      },
      options: {
        pt: [
          "Encaminha pacotes multicast",
          "Autentica dispositivos em portas de switch",
          "Define rotas dinâmicas",
          "Agrupa interfaces físicas"
        ],
        en: [
          "Routes multicast packets",
          "Authenticates devices on switch ports",
          "Defines dynamic routes",
          "Bonds physical interfaces"
        ]
      },
      answer: 1,
      explanation: {
        pt: "O 802.1X fornece autenticação baseada em portas, permitindo controlar o acesso à rede.",
        en: "802.1X provides port-based authentication, allowing control over network access."
      }
    },
    {
      question: {
        pt: "Qual destas opções é um exemplo de ataque de engenharia social?",
        en: "Which of the following is an example of a social engineering attack?"
      },
      options: {
        pt: [
          "DDoS",
          "Phishing",
          "Man-in-the-middle",
          "Sniffing"
        ],
        en: [
          "DDoS",
          "Phishing",
          "Man-in-the-middle",
          "Sniffing"
        ]
      },
      answer: 1,
      explanation: {
        pt: "Phishing tenta enganar o utilizador para obter informações sensíveis, explorando a confiança humana.",
        en: "Phishing tricks users into revealing sensitive information, exploiting human trust."
      }
    },
    {
      question: {
        pt: "O que é uma VPN site-to-site?",
        en: "What is a site-to-site VPN?"
      },
      options: {
        pt: [
          "Uma VPN para dispositivos móveis",
          "Uma ligação segura entre dois locais da mesma organização",
          "Uma rede virtual entre switches",
          "Um túnel GRE sobre MPLS"
        ],
        en: [
          "A VPN for mobile devices",
          "A secure connection between two locations of the same organisation",
          "A virtual network between switches",
          "A GRE tunnel over MPLS"
        ]
      },
      answer: 1,
      explanation: {
        pt: "Uma VPN site-to-site cria um túnel seguro entre dois locais distintos através da Internet.",
        en: "A site-to-site VPN creates a secure tunnel between two distinct locations over the Internet."
      }
    },
    {
      question: {
        pt: "Qual comando é usado para aplicar uma ACL a uma interface em Cisco IOS?",
        en: "Which command is used to apply an ACL to an interface in Cisco IOS?"
      },
      options: {
        pt: [
          "access-class",
          "ip access-group",
          "access-control",
          "set acl"
        ],
        en: [
          "access-class",
          "ip access-group",
          "access-control",
          "set acl"
        ]
      },
      answer: 1,
      explanation: {
        pt: "O comando 'ip access-group' aplica uma ACL a uma interface de entrada ou saída.",
        en: "The 'ip access-group' command applies an ACL to an inbound or outbound interface."
      }
    }
  ];
  