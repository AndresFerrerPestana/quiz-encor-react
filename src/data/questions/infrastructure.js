export const infrastructure = [
  {
    question: {
      en: "What is the function of first-hop redundancy protocols (FHRP)?",
      pt: "Qual é a função dos protocolos de redundância de primeiro salto (FHRP)?",
    },
    options: {
      en: [
        "To provide automatic failover of the default gateway in case the active router fails.",
        "To encrypt routing protocols",
        "To perform address translation",
        "To assign IP addresses to clients",
      ],
      pt: [
        "Fornecer alternância automática do gateway predefinido caso o router ativo falhe.",
        "Encriptar protocolos de encaminhamento",
        "Realizar tradução de endereços",
        "Atribuir endereços IP aos clientes",
      ],
    },
    answer: 0,
    explanation: {
      en: "FHRP ensures gateway availability by enabling automatic switchover if the main router goes down.",
      pt: "O FHRP assegura a disponibilidade do gateway ao permitir alternância automática se o router principal falhar.",
    },
  },
  {
    question: {
      en: "What are the main types of FHRP?",
      pt: "Quais são os principais tipos de FHRP?",
    },
    options: {
      en: [
        "HSRP, VRRP, and GLBP",
        "OSPF, BGP, and EIGRP",
        "SNMP, NetFlow, and Syslog",
        "ACL, NAT, and DHCP",
      ],
      pt: [
        "HSRP, VRRP e GLBP",
        "OSPF, BGP e EIGRP",
        "SNMP, NetFlow e Syslog",
        "ACL, NAT e DHCP",
      ],
    },
    answer: 0,
    explanation: {
      en: "HSRP, VRRP, and GLBP are the primary first-hop redundancy protocols.",
      pt: "HSRP, VRRP e GLBP são os principais protocolos de redundância de primeiro salto.",
    },
  },
  {
    question: {
      en: "What is the difference between SNMPv2 and SNMPv3?",
      pt: "Qual é a diferença entre SNMPv2 e SNMPv3?",
    },
    options: {
      en: [
        "SNMPv3 provides authentication, encryption, and message integrity; SNMPv2 does not.",
        "SNMPv2 supports IPv6; SNMPv3 does not.",
        "SNMPv3 only works on Linux systems.",
        "There is no difference.",
      ],
      pt: [
        "O SNMPv3 oferece autenticação, encriptação e integridade das mensagens; o SNMPv2 não.",
        "O SNMPv2 suporta IPv6; o SNMPv3 não.",
        "O SNMPv3 só funciona em sistemas Linux.",
        "Não há diferença.",
      ],
    },
    answer: 0,
    explanation: {
      en: "SNMPv3 improves security by including authentication, encryption, and message integrity.",
      pt: "O SNMPv3 melhora a segurança incluindo autenticação, encriptação e integridade das mensagens.",
    },
  },
  {
    question: {
      en: "What is the purpose of NetFlow?",
      pt: "Qual é o propósito do NetFlow?",
    },
    options: {
      en: [
        "To collect and analyse IP traffic data for visibility and troubleshooting.",
        "To encrypt IP traffic end-to-end.",
        "To dynamically assign IP addresses.",
        "To replace SNMP for log messages.",
      ],
      pt: [
        "Recolher e analisar dados de tráfego IP para visibilidade e resolução de problemas.",
        "Encriptar tráfego IP de ponta a ponta.",
        "Atribuir endereços IP dinamicamente.",
        "Substituir o SNMP para mensagens de log.",
      ],
    },
    answer: 0,
    explanation: {
      en: "NetFlow enables monitoring and analysis of IP traffic for visibility and troubleshooting.",
      pt: "O NetFlow permite monitorizar e analisar tráfego IP para visibilidade e resolução de problemas.",
    },
  },
  {
    question: {
      en: "What is SPAN and how is it used?",
      pt: "O que é o SPAN e como é utilizado?",
    },
    options: {
      en: [
        "SPAN mirrors traffic from one or more ports to another for monitoring locally.",
        "SPAN blocks unknown multicast traffic.",
        "SPAN replaces VLAN tagging.",
        "SPAN is a routing protocol.",
      ],
      pt: [
        "O SPAN espelha o tráfego de uma ou mais portas para outra, para monitorização local.",
        "O SPAN bloqueia tráfego multicast desconhecido.",
        "O SPAN substitui o tagging de VLAN.",
        "O SPAN é um protocolo de encaminhamento.",
      ],
    },
    answer: 0,
    explanation: {
      en: "SPAN is used to locally monitor traffic by mirroring it to a designated port.",
      pt: "O SPAN é usado para monitorizar localmente o tráfego, espelhando-o para uma porta designada.",
    },
  },
  {
    question: {
      en: "What is ERSPAN and how does it differ from SPAN?",
      pt: "O que é o ERSPAN e em que difere do SPAN?",
    },
    options: {
      en: [
        "ERSPAN sends mirrored traffic through GRE tunnels to remote destinations.",
        "ERSPAN only supports IPv6.",
        "ERSPAN is a replacement for OSPF.",
        "There is no difference.",
      ],
      pt: [
        "O ERSPAN envia tráfego espelhado através de túneis GRE para destinos remotos.",
        "O ERSPAN só suporta IPv6.",
        "O ERSPAN é um substituto do OSPF.",
        "Não há diferença.",
      ],
    },
    answer: 0,
    explanation: {
      en: "ERSPAN extends SPAN functionality by sending mirrored traffic to remote locations via GRE tunnels.",
      pt: "O ERSPAN estende a funcionalidade do SPAN ao enviar tráfego espelhado para locais remotos através de túneis GRE.",
    },
  },
  {
    question: {
      en: "What is the role of syslog in network monitoring?",
      pt: "Qual é o papel do syslog na monitorização da rede?",
    },
    options: {
      en: [
        "Syslog collects and stores log messages from devices for monitoring and alerting.",
        "Syslog encrypts routing protocol updates.",
        "Syslog performs packet switching.",
        "Syslog manages QoS policies.",
      ],
      pt: [
        "O syslog recolhe e armazena mensagens de log dos dispositivos para monitorização e alertas.",
        "O syslog encripta atualizações dos protocolos de encaminhamento.",
        "O syslog realiza comutação de pacotes.",
        "O syslog gere políticas de QoS.",
      ],
    },
    answer: 0,
    explanation: {
      en: "Syslog is used for collecting, storing, and reviewing system and device logs.",
      pt: "O syslog é usado para recolher, armazenar e rever logs de sistemas e dispositivos.",
    },
  },
];
