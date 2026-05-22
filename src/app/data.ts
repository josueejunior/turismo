export const fallbackTourismImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85";

export const siteHeroImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=92";

export const institutionalBackgroundImage =
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=85";

export function imageOrFallback(image?: string) {
  return image || fallbackTourismImage;
}

export const categories = [
  "Todos",
  "Gastronomia",
  "Cultura",
  "Natureza",
  "Família",
  "Música",
  "Bem-estar"
];

export const events = [
  {
    title: "Festival Gastronômico de Cascavel",
    subtitle: "Sabores regionais, chefs convidados e música ao vivo no centro da cidade.",
    date: "14 jun - 19h",
    category: "Gastronomia",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
    photos: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Chefs locais, música ao vivo e uma curadoria de sabores regionais em uma noite elegante para moradores, turistas e associados.",
    href: "/eventos/festival-gastronomico-da-serra"
  },
  {
    title: "Circuito de Natureza e Lazer",
    subtitle: "Trilhas leves, áreas verdes e experiências guiadas para famílias.",
    date: "22 jun - 08h",
    category: "Natureza",
    image: "",
    photos: [],
    description:
      "Passeio guiado por paisagens abertas, pontos de contemplação e parada especial para café colonial.",
    href: "/eventos/festival-gastronomico-da-serra"
  },
  {
    title: "Noite Cultural Convention",
    subtitle: "Programação musical com gastronomia, networking e vista para a cidade.",
    date: "28 jun - 20h",
    category: "Música",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=85",
    photos: [],
    description:
      "Show intimista, carta de vinhos selecionada e experiência para casais, grupos e visitantes corporativos.",
    href: "/eventos/festival-gastronomico-da-serra"
  },
  {
    title: "Feira Criativa Regional",
    subtitle: "Produtores, artesanato, moda autoral e apresentações durante todo o dia.",
    date: "05 jul - 10h",
    category: "Cultura",
    image:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=900&q=85",
    photos: [],
    description:
      "Artesanato, moda autoral, produtores rurais e apresentações culturais durante todo o dia.",
    href: "/eventos/festival-gastronomico-da-serra"
  }
];

export const cuisines = [
  "Café colonial",
  "Alta cozinha",
  "Churrascarias",
  "Comida italiana",
  "Doces artesanais",
  "Bares e pubs"
];

export const restaurants = [
  {
    name: "Sabores do Oeste",
    title: "Sabores do Oeste",
    subtitle: "Cozinha regional contemporânea para visitantes e eventos corporativos.",
    logo: "SO",
    logoImage: "",
    bannerImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=86",
    description:
      "Restaurante associado com menu regional, ambiente elegante e estrutura para receber turistas, grupos e encontros empresariais.",
    address: "Av. Brasil, Centro, Cascavel - PR",
    contact: "(00) 90000-1111",
    website: "https://exemplo.com.br",
    detailHref: "/estabelecimentos/sabores-do-oeste"
  },
  {
    name: "Casa Amarela Café",
    title: "Casa Amarela Café",
    subtitle: "Café, doces artesanais e produtos locais em uma experiência acolhedora.",
    logo: "CA",
    logoImage: "",
    bannerImage: "",
    description:
      "Espaço gastronômico com foco em cafés especiais, doces autorais e produtos regionais, ideal para pausas no roteiro turístico.",
    address: "Rua Paraná, Cascavel - PR",
    contact: "(00) 90000-2222",
    website: "https://exemplo.com.br",
    detailHref: "/estabelecimentos/sabores-do-oeste"
  },
  {
    name: "Brasa Convention",
    title: "Brasa Convention",
    subtitle: "Churrascaria premium para turismo de negócios e lazer.",
    logo: "BC",
    logoImage: "",
    bannerImage:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=86",
    description:
      "Operação gastronômica preparada para receber visitantes, delegações e famílias com padrão de atendimento premium.",
    address: "Região Central, Cascavel - PR",
    contact: "(00) 90000-3333",
    website: "https://exemplo.com.br",
    detailHref: "/estabelecimentos/sabores-do-oeste"
  }
];

export const sectors = [
  "Parques e áreas verdes",
  "Cultura e memória",
  "Turismo de negócios",
  "Experiências rurais",
  "Lazer em família"
];

export const marketplaceCategories = [
  "Artesanato",
  "Produtos coloniais",
  "Experiências guiadas",
  "Souvenirs",
  "Ingressos e vouchers"
];

export const stays = [
  {
    name: "Hotel Deville Express Cascavel",
    logo: "DE",
    logoImage: "",
    bannerImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=86",
    tagline: "Hotel associado",
    title: "Hotel Deville Express Cascavel",
    subtitle: "Hospedagem executiva com estrutura para turismo de negócios e lazer.",
    description:
      "Hotel associado com localização estratégica, atendimento profissional e estrutura para receber visitantes, equipes e eventos regionais.",
    address: "Av. Brasil, Cascavel - PR",
    contact: "(00) 90000-4444",
    website: "https://exemplo.com.br",
    detailHref: "/hospedagens/hotel-deville-express-cascavel"
  },
  {
    name: "Bourbon Cascavel Hotel",
    logo: "BO",
    logoImage: "",
    bannerImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=86",
    tagline: "Hospedagem executiva",
    title: "Bourbon Cascavel Hotel",
    subtitle: "Conforto urbano para eventos, negócios e viagens em família.",
    description:
      "Hospedagem com perfil executivo e estrutura completa para visitantes que buscam praticidade, conforto e acesso rápido aos atrativos.",
    address: "Centro, Cascavel - PR",
    contact: "(00) 90000-5555",
    website: "https://exemplo.com.br",
    detailHref: "#"
  },
  {
    name: "Pousada Vale Oeste",
    logo: "VO",
    logoImage: "",
    bannerImage: "",
    tagline: "Refúgio regional",
    title: "Pousada Vale Oeste",
    subtitle: "Estadia regional com atmosfera tranquila e acolhedora.",
    description:
      "Opção de hospedagem para quem procura descanso, atendimento próximo e uma experiência conectada ao turismo local.",
    address: "Região Oeste, Cascavel - PR",
    contact: "(00) 90000-6666",
    website: "https://exemplo.com.br",
    detailHref: "#"
  },
  {
    name: "Hotel Maestro Premium",
    logo: "MP",
    logoImage: "",
    bannerImage:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=86",
    tagline: "Conforto urbano",
    title: "Hotel Maestro Premium",
    subtitle: "Hotelaria premium para visitantes exigentes.",
    description:
      "Hospedagem associada com padrão de conforto elevado, serviços urbanos e perfil adequado para turismo qualificado.",
    address: "Cascavel - PR",
    contact: "(00) 90000-7777",
    website: "https://exemplo.com.br",
    detailHref: "#"
  }
];

export const members = [
  { name: "Cascavel CVB", logoImage: "" },
  { name: "Hotelaria", logoImage: "" },
  { name: "Gastronomia", logoImage: "" },
  { name: "Eventos", logoImage: "" },
  { name: "Agências", logoImage: "" },
  { name: "Comércio", logoImage: "" }
];

export const posts = [
  {
    slug: "fim-de-semana-em-cascavel",
    title: "Como viver um fim de semana em Cascavel",
    subtitle: "Roteiro compacto para comer bem, circular pela cidade e descobrir experiências locais.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    category: "Roteiro",
    readTime: "4 min",
    content: [
      "Cascavel funciona muito bem para uma viagem curta quando o roteiro combina gastronomia, parques urbanos e experiências regionais em deslocamentos simples.",
      "A sugestão é começar pelo centro gastronômico, reservar uma tarde para áreas verdes e finalizar com uma programação cultural ou evento local. Essa combinação cria uma experiência compacta, mas com cara de destino completo.",
      "Para visitantes corporativos, o mesmo roteiro pode ser adaptado para horários livres entre compromissos, valorizando associados e negócios locais."
    ]
  },
  {
    slug: "sabores-do-turismo-regional",
    title: "Sabores que movimentam o turismo regional",
    subtitle: "Conheça restaurantes, produtores e casas que dão identidade ao destino.",
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=85",
    category: "Gastronomia",
    readTime: "3 min",
    content: [
      "A gastronomia regional é uma das formas mais diretas de apresentar a cidade para visitantes. Restaurantes, cafés, bares e produtores contam histórias que ajudam a diferenciar o destino.",
      "Quando essas empresas aparecem com imagem, descrição e caminho claro de contato, o portal deixa de ser apenas informativo e passa a gerar descoberta comercial.",
      "A curadoria valoriza casas com identidade local, atendimento consistente e potencial para receber turistas, grupos e eventos."
    ]
  },
  {
    slug: "onde-hospedar-visitantes-e-equipes",
    title: "Onde hospedar visitantes e equipes",
    subtitle: "Do hotel executivo às estadias de lazer, veja opções para diferentes perfis.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    category: "Hospedagem",
    readTime: "5 min",
    content: [
      "A hospedagem certa depende do perfil da viagem: executiva, lazer, eventos, grupos familiares ou delegações. Por isso, apresentar opções com clareza melhora a decisão do visitante.",
      "Hotéis centrais tendem a atender melhor agendas rápidas e turismo de negócios, enquanto estadias com áreas de lazer ajudam famílias e grupos que permanecem mais tempo.",
      "Uma página de entidade com fotos, contatos e diferenciais reduz dúvidas e facilita o encaminhamento para reserva."
    ]
  }
];
