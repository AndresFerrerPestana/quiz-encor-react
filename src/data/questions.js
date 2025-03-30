export const questionsByTopic = {
    routing: [
      {
        question: "Qual é a função principal do protocolo OSPF?",
        options: [
          "Gerar endereços IP automaticamente",
          "Definir políticas de segurança",
          "Trocar informação de roteamento entre routers",
          "Monitorizar o tráfego de rede"
        ],
        answer: 2
      },
      {
        question: "What is the default administrative distance of OSPF?",
        options: ["90", "110", "120", "100"],
        answer: 1
      },
      {
        question: "Que tipo de protocolo é o BGP?",
        options: [
          "Protocolo de link-state interno",
          "Protocolo de vetor de distância interno",
          "Protocolo de roteamento externo baseado em path-vector",
          "Protocolo de encapsulamento de pacotes"
        ],
        answer: 2
      }
    ],
    switching: [
      {
        question: "O que acontece se dois switches têm o mesmo valor de bridge ID?",
        options: [
          "Nenhum se torna root bridge",
          "STP entra em loop",
          "O switch com o menor endereço MAC torna-se root",
          "O switch com o maior endereço MAC torna-se root"
        ],
        answer: 2
      }
    ],
    wireless: [
      {
        question: "O que significa o termo SSID?",
        options: [
          "Secure Signal Identity Device",
          "Service Set Identifier",
          "Static Source IP Destination",
          "Signal Set Interference Domain"
        ],
        answer: 1
      },
      {
        question: "Qual é a frequência usada pelas redes Wi-Fi 802.11ac?",
        options: [
          "2.4 GHz",
          "5 GHz",
          "900 MHz",
          "60 GHz"
        ],
        answer: 1
      }
    ],
    security: [
      {
        question: "Qual é a função do protocolo 802.1X?",
        options: [
          "Roteamento dinâmico",
          "Autenticação de dispositivos na rede",
          "Atribuição de endereços IP",
          "Monitorização de tráfego"
        ],
        answer: 1
      },
      {
        question: "O que faz a lista de controlo de acesso (ACL) numa rede?",
        options: [
          "Permite ou nega tráfego com base em regras definidas",
          "Configura VLANs",
          "Cria túneis VPN",
          "Prioriza pacotes de voz"
        ],
        answer: 0
      }
    ],
    automation: [
      {
        question: "Qual destes é um protocolo de automação de rede baseado em HTTP?",
        options: [
          "SNMP",
          "NetFlow",
          "RESTCONF",
          "EIGRP"
        ],
        answer: 2
      },
      {
        question: "Para que serve o YANG na automação de redes?",
        options: [
          "É um protocolo de transporte",
          "Define modelos de dados para configurações",
          "É um tipo de interface CLI",
          "Substitui o DNS"
        ],
        answer: 1
      }
    ]
  };
  