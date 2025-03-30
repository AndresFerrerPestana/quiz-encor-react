export const routing = [
    {
      question: {
        pt: "Qual é a função principal do protocolo OSPF?",
        en: "What is the primary function of the OSPF protocol?"
      },
      options: {
        pt: [
          "Gerar endereços IP automaticamente",
          "Definir políticas de segurança",
          "Trocar informação de roteamento entre routers",
          "Monitorizar o tráfego de rede"
        ],
        en: [
          "Automatically generate IP addresses",
          "Define security policies",
          "Exchange routing information between routers",
          "Monitor network traffic"
        ]
      },
      answer: 2,
      explanation: {
        pt: "OSPF é um protocolo de roteamento interno (IGP) que troca dinamicamente informações de roteamento entre routers, permitindo uma topologia de rede mais eficiente.",
        en: "OSPF is an interior routing protocol (IGP) that dynamically exchanges routing information between routers, enabling a more efficient network topology."
      }
    },
    {
      question: {
        pt: "Qual é a distância administrativa padrão do OSPF?",
        en: "What is the default administrative distance of OSPF?"
      },
      options: {
        pt: ["90", "110", "120", "100"],
        en: ["90", "110", "120", "100"]
      },
      answer: 1,
      explanation: {
        pt: "A distância administrativa padrão do OSPF é 110. Esta métrica é usada para escolher a melhor rota entre diferentes protocolos de roteamento.",
        en: "The default administrative distance for OSPF is 110. This metric is used to select the best route among different routing protocols."
      }
    },
    {
      question: {
        pt: "Que tipo de protocolo é o BGP?",
        en: "What type of protocol is BGP?"
      },
      options: {
        pt: [
          "Protocolo de link-state interno",
          "Protocolo de vetor de distância interno",
          "Protocolo de roteamento externo baseado em path-vector",
          "Protocolo de encapsulamento de pacotes"
        ],
        en: [
          "Internal link-state protocol",
          "Internal distance-vector protocol",
          "External path-vector routing protocol",
          "Packet encapsulation protocol"
        ]
      },
      answer: 2,
      explanation: {
        pt: "O BGP é um protocolo de roteamento externo (EGP) que utiliza o método path-vector para tomar decisões baseadas nos caminhos (AS PATH) percorridos.",
        en: "BGP is an external routing protocol (EGP) that uses the path-vector method to make decisions based on the AS PATHs traversed."
      }
    },
    {
      question: {
        pt: "Qual é o propósito do comando 'ip route 0.0.0.0 0.0.0.0' num router?",
        en: "What is the purpose of the command 'ip route 0.0.0.0 0.0.0.0' on a router?"
      },
      options: {
        pt: [
          "Definir uma rota estática para todas as redes desconhecidas",
          "Bloquear todo o tráfego de saída",
          "Redefinir o roteamento dinâmico",
          "Activar o NAT para todas as interfaces"
        ],
        en: [
          "Define a static route for all unknown networks",
          "Block all outbound traffic",
          "Reset dynamic routing",
          "Enable NAT for all interfaces"
        ]
      },
      answer: 0,
      explanation: {
        pt: "Esta é uma rota default que indica ao router para onde enviar pacotes destinados a redes que não estão na tabela de roteamento.",
        en: "This is a default route that tells the router where to send packets destined for networks not in the routing table."
      }
    },
    {
      question: {
        pt: "Em OSPF, o que representa o estado 'FULL' entre routers vizinhos?",
        en: "In OSPF, what does the 'FULL' state represent between neighbor routers?"
      },
      options: {
        pt: [
          "Não há conectividade",
          "Os routers estão a negociar parâmetros",
          "A vizinhança foi estabelecida mas ainda não trocaram LSAs",
          "A vizinhança está totalmente sincronizada e operacional"
        ],
        en: [
          "There is no connectivity",
          "Routers are negotiating parameters",
          "Neighbor relationship established but LSAs not exchanged",
          "Neighbor relationship is fully synchronized and operational"
        ]
      },
      answer: 3,
      explanation: {
        pt: "O estado 'FULL' significa que a troca de LSAs foi concluída e os routers estão totalmente sincronizados, mantendo uma relação de vizinhança estável.",
        en: "The 'FULL' state means LSA exchange is complete and the routers are fully synchronized, maintaining a stable neighbor relationship."
      }
    }
  ];
  