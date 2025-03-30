export const wireless = [
    {
      question: {
        pt: "Qual é a função de um controlador wireless (WLC)?",
        en: "What is the function of a wireless LAN controller (WLC)?"
      },
      options: {
        pt: [
          "Aumentar a largura de banda de switches",
          "Controlar e gerir múltiplos access points",
          "Converter sinais analógicos para digitais",
          "Fornecer autenticação para dispositivos VPN"
        ],
        en: [
          "Increase switch bandwidth",
          "Control and manage multiple access points",
          "Convert analog to digital signals",
          "Provide authentication for VPN devices"
        ]
      },
      answer: 1,
      explanation: {
        pt: "O WLC centraliza a gestão dos access points (APs), facilitando a configuração, segurança e políticas de mobilidade.",
        en: "A WLC centralises the management of access points (APs), simplifying configuration, security, and mobility policies."
      }
    },
    {
      question: {
        pt: "O que é um SSID numa rede wireless?",
        en: "What is an SSID in a wireless network?"
      },
      options: {
        pt: [
          "O nome atribuído a uma VLAN",
          "Um identificador exclusivo para uma interface Ethernet",
          "O nome da rede wireless visível pelos dispositivos",
          "O número de canais disponíveis"
        ],
        en: [
          "A name assigned to a VLAN",
          "A unique identifier for an Ethernet interface",
          "The name of the wireless network visible to devices",
          "The number of available channels"
        ]
      },
      answer: 2,
      explanation: {
        pt: "SSID (Service Set Identifier) é o nome que identifica uma rede Wi-Fi para os clientes.",
        en: "SSID (Service Set Identifier) is the name that identifies a Wi-Fi network to clients."
      }
    },
    {
      question: {
        pt: "Qual é a principal vantagem do uso de 5 GHz em redes Wi-Fi?",
        en: "What is the main advantage of using 5 GHz in Wi-Fi networks?"
      },
      options: {
        pt: [
          "Maior alcance",
          "Menor interferência",
          "Maior compatibilidade",
          "Menor consumo de energia"
        ],
        en: [
          "Greater range",
          "Less interference",
          "More compatibility",
          "Lower power consumption"
        ]
      },
      answer: 1,
      explanation: {
        pt: "A banda de 5 GHz é menos congestionada e tem menos interferência que 2.4 GHz, apesar de menor alcance.",
        en: "The 5 GHz band is less congested and has less interference than 2.4 GHz, although it has a shorter range."
      }
    },
    {
      question: {
        pt: "O que é o protocolo CAPWAP usado em redes wireless?",
        en: "What is the CAPWAP protocol used for in wireless networks?"
      },
      options: {
        pt: [
          "Proteger comunicações VoIP",
          "Autenticar clientes wireless",
          "Permitir comunicação entre APs e WLCs",
          "Gerar relatórios de tráfego"
        ],
        en: [
          "Secure VoIP communications",
          "Authenticate wireless clients",
          "Enable communication between APs and WLCs",
          "Generate traffic reports"
        ]
      },
      answer: 2,
      explanation: {
        pt: "CAPWAP (Control and Provisioning of Wireless Access Points) permite que APs comuniquem com o WLC para controlo centralizado.",
        en: "CAPWAP (Control and Provisioning of Wireless Access Points) allows APs to communicate with the WLC for centralised control."
      }
    },
    {
      question: {
        pt: "O que é uma topologia wireless baseada em controladora (WLC)?",
        en: "What is a controller-based wireless topology?"
      },
      options: {
        pt: [
          "Cada AP funciona de forma independente",
          "APs comunicam diretamente entre si",
          "APs são geridos por um WLC central",
          "A rede não possui autenticação"
        ],
        en: [
          "Each AP operates independently",
          "APs communicate directly with each other",
          "APs are managed by a central WLC",
          "The network has no authentication"
        ]
      },
      answer: 2,
      explanation: {
        pt: "Numa topologia baseada em controladora, os APs dependem do WLC para gestão, configuração e políticas.",
        en: "In a controller-based topology, APs rely on the WLC for management, configuration, and policies."
      }
    }
  ];
  