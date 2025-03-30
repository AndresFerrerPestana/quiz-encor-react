export const switching = [
    {
      question: {
        pt: "O que acontece se dois switches têm o mesmo valor de bridge ID?",
        en: "What happens if two switches have the same bridge ID value?"
      },
      options: {
        pt: [
          "Nenhum se torna root bridge",
          "STP entra em loop",
          "O switch com o menor endereço MAC torna-se root",
          "O switch com o maior endereço MAC torna-se root"
        ],
        en: [
          "Neither becomes root bridge",
          "STP enters a loop",
          "The switch with the lowest MAC address becomes root",
          "The switch with the highest MAC address becomes root"
        ]
      },
      answer: 2,
      explanation: {
        pt: "Em caso de empate na prioridade, o switch com o menor endereço MAC torna-se root bridge.",
        en: "If the priority is the same, the switch with the lowest MAC address becomes the root bridge."
      }
    },
    {
      question: {
        pt: "Qual é a principal função do protocolo STP?",
        en: "What is the main function of the STP protocol?"
      },
      options: {
        pt: [
          "Aumentar a largura de banda entre switches",
          "Permitir a comunicação entre VLANs",
          "Evitar loops na camada 2 da rede",
          "Gerar endereços MAC automaticamente"
        ],
        en: [
          "Increase bandwidth between switches",
          "Allow communication between VLANs",
          "Prevent loops at layer 2",
          "Automatically generate MAC addresses"
        ]
      },
      answer: 2,
      explanation: {
        pt: "O STP (Spanning Tree Protocol) evita loops na camada 2 bloqueando caminhos redundantes.",
        en: "STP (Spanning Tree Protocol) prevents layer 2 loops by blocking redundant paths."
      }
    },
    {
      question: {
        pt: "Qual é o valor padrão da prioridade STP em switches Cisco?",
        en: "What is the default STP priority value on Cisco switches?"
      },
      options: {
        pt: ["0", "1", "32768", "65535"],
        en: ["0", "1", "32768", "65535"]
      },
      answer: 2,
      explanation: {
        pt: "A prioridade padrão do STP em switches Cisco é 32768, usada na eleição da root bridge.",
        en: "The default STP priority on Cisco switches is 32768, used during root bridge election."
      }
    },
    {
      question: {
        pt: "Qual é a função do protocolo EtherChannel?",
        en: "What is the function of the EtherChannel protocol?"
      },
      options: {
        pt: [
          "Criar túneis entre VLANs",
          "Aumentar a largura de banda agrupando interfaces físicas",
          "Isolar o tráfego multicast",
          "Reduzir o tempo de convergência do STP"
        ],
        en: [
          "Create tunnels between VLANs",
          "Increase bandwidth by bundling physical interfaces",
          "Isolate multicast traffic",
          "Reduce STP convergence time"
        ]
      },
      answer: 1,
      explanation: {
        pt: "EtherChannel permite agrupar várias interfaces físicas para criar um único link lógico com maior largura de banda.",
        en: "EtherChannel allows multiple physical interfaces to be grouped as one logical link to increase bandwidth."
      }
    },
    {
      question: {
        pt: "Qual das seguintes opções é um protocolo usado para negociar EtherChannel?",
        en: "Which of the following is a protocol used to negotiate EtherChannel?"
      },
      options: {
        pt: ["LLDP", "VTP", "PAgP", "CDP"],
        en: ["LLDP", "VTP", "PAgP", "CDP"]
      },
      answer: 2,
      explanation: {
        pt: "O PAgP (Port Aggregation Protocol) é um protocolo proprietário da Cisco usado para negociar EtherChannel.",
        en: "PAgP (Port Aggregation Protocol) is a Cisco proprietary protocol used to negotiate EtherChannel."
      }
    },
    {
      question: {
        pt: "O que faz o comando 'switchport mode access'?",
        en: "What does the 'switchport mode access' command do?"
      },
      options: {
        pt: [
          "Coloca a interface em modo trunk",
          "Configura uma interface para negociar automaticamente o modo",
          "Coloca a interface numa VLAN de voz",
          "Define a interface como acesso a uma única VLAN"
        ],
        en: [
          "Puts the interface in trunk mode",
          "Configures the interface to automatically negotiate mode",
          "Assigns the interface to a voice VLAN",
          "Sets the interface as access for a single VLAN"
        ]
      },
      answer: 3,
      explanation: {
        pt: "O comando 'switchport mode access' configura a interface para funcionar como porta de acesso numa VLAN específica.",
        en: "The 'switchport mode access' command sets the interface as an access port for a specific VLAN."
      }
    }
  ];
  