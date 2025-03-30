export const security = [
  {
    question: {
      en: "What is the purpose of AAA in network security?",
      pt: "Qual é o propósito do AAA na segurança de redes?",
    },
    options: {
      en: [
        "To provide Authentication, Authorization, and Accounting for users accessing network resources.",
        "To encrypt data end-to-end.",
        "To block all unauthorised access automatically.",
        "To configure VLANs across routers.",
      ],
      pt: [
        "Fornecer Autenticação, Autorização e Contabilização dos utilizadores que acedem aos recursos da rede.",
        "Encriptar dados de ponta a ponta.",
        "Bloquear automaticamente todos os acessos não autorizados.",
        "Configurar VLANs entre routers.",
      ],
    },
    answer: 0,
    explanation: {
      en: "AAA stands for Authentication, Authorization and Accounting, ensuring access control and auditing.",
      pt: "AAA significa Autenticação, Autorização e Contabilização, garantindo controlo de acesso e auditoria.",
    },
  },
  {
    question: {
      en: "What are the three components of AAA?",
      pt: "Quais são os três componentes do AAA?",
    },
    options: {
      en: [
        "Authentication, Authorization, Accounting",
        "Access, Alert, Assignment",
        "Allow, Audit, Action",
        "Application, Agreement, Accounting",
      ],
      pt: [
        "Autenticação, Autorização, Contabilização",
        "Acesso, Alerta, Atribuição",
        "Permitir, Auditar, Ação",
        "Aplicação, Acordo, Contabilização",
      ],
    },
    answer: 0,
    explanation: {
      en: "AAA stands for Authentication, Authorization, and Accounting — the three pillars of access control.",
      pt: "AAA representa Autenticação, Autorização e Contabilização — os três pilares do controlo de acesso.",
    },
  },
  {
    question: {
      en: "What is 802.1X and where is it used?",
      pt: "O que é o 802.1X e onde é utilizado?",
    },
    options: {
      en: [
        "A network access control protocol used to authenticate devices before granting access to the LAN.",
        "A routing protocol for IPv6 networks.",
        "A switching method for VLAN tagging.",
        "A firewall rule standard.",
      ],
      pt: [
        "Um protocolo de controlo de acesso à rede usado para autenticar dispositivos antes de permitir o acesso à LAN.",
        "Um protocolo de encaminhamento para redes IPv6.",
        "Um método de comutação para tagging de VLAN.",
        "Um padrão de regras de firewall.",
      ],
    },
    answer: 0,
    explanation: {
      en: "802.1X is used for port-based network access control, authenticating devices before granting access.",
      pt: "O 802.1X é usado para controlo de acesso à rede baseado em portas, autenticando os dispositivos antes de conceder acesso.",
    },
  },
  {
    question: {
      en: "What is the function of a RADIUS server?",
      pt: "Qual é a função de um servidor RADIUS?",
    },
    options: {
      en: [
        "It authenticates users and authorises access to network services based on credentials.",
        "It switches traffic between VLANs.",
        "It performs NAT translation.",
        "It provides DNS resolution.",
      ],
      pt: [
        "Autentica utilizadores e autoriza o acesso a serviços de rede com base em credenciais.",
        "Comuta tráfego entre VLANs.",
        "Realiza tradução NAT.",
        "Fornece resolução DNS.",
      ],
    },
    answer: 0,
    explanation: {
      en: "A RADIUS server centralises authentication and authorization based on user credentials.",
      pt: "Um servidor RADIUS centraliza a autenticação e a autorização com base nas credenciais dos utilizadores.",
    },
  },
  {
    question: {
      en: "What is the difference between standard and extended ACLs?",
      pt: "Qual é a diferença entre ACLs standard e ACLs extendidas?",
    },
    options: {
      en: [
        "Standard ACLs filter traffic based on source IP only; extended ACLs filter based on source, destination, protocol, and port.",
        "Standard ACLs are used for IPv6; extended ACLs for IPv4.",
        "Extended ACLs are deprecated.",
        "There is no difference.",
      ],
      pt: [
        "As ACLs standard filtram com base apenas no IP de origem; as ACLs extendidas filtram por IP de origem, destino, protocolo e porta.",
        "As ACLs standard são usadas para IPv6; as extendidas para IPv4.",
        "As ACLs extendidas estão obsoletas.",
        "Não há diferença.",
      ],
    },
    answer: 0,
    explanation: {
      en: "Standard ACLs match only source IP, while extended ACLs offer more granular control.",
      pt: "As ACLs standard filtram apenas por IP de origem, enquanto as ACLs extendidas oferecem controlo mais granular.",
    },
  },
  {
    question: {
      en: "What is port security on a switch?",
      pt: "O que é a segurança de portas (port security) num switch?",
    },
    options: {
      en: [
        "A feature that restricts access to a switch port based on MAC addresses.",
        "A feature that disables unused ports automatically.",
        "A method of VLAN allocation.",
        "A way to configure DHCP snooping.",
      ],
      pt: [
        "Uma funcionalidade que restringe o acesso a uma porta do switch com base em endereços MAC.",
        "Uma funcionalidade que desativa automaticamente portas não utilizadas.",
        "Um método de atribuição de VLAN.",
        "Uma forma de configurar DHCP snooping.",
      ],
    },
    answer: 0,
    explanation: {
      en: "Port security allows only specific MAC addresses to use a switch port, improving security.",
      pt: "A segurança de portas permite que apenas endereços MAC específicos utilizem uma porta do switch, melhorando a segurança.",
    },
  },
  {
    question: {
      en: "What is control plane policing (CoPP)?",
      pt: "O que é o controlo de policiamento do plano de controlo (CoPP)?",
    },
    options: {
      en: [
        "It limits traffic sent to the control plane to protect the router from attacks or overload.",
        "It manages NAT translations in high-speed interfaces.",
        "It enforces QoS policies on user data.",
        "It detects routing loops in STP.",
      ],
      pt: [
        "Limita o tráfego enviado ao plano de controlo para proteger o router de ataques ou sobrecarga.",
        "Gere traduções NAT em interfaces de alta velocidade.",
        "Aplica políticas de QoS aos dados dos utilizadores.",
        "Deteta loops de encaminhamento no STP.",
      ],
    },
    answer: 0,
    explanation: {
      en: "CoPP protects the control plane of a router by filtering and rate-limiting traffic.",
      pt: "O CoPP protege o plano de controlo de um router ao filtrar e limitar o tráfego.",
    },
  },
];
