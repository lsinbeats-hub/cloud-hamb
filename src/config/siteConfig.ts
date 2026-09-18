/**
 * Configurações da Hamburgueria CLOUD
 * Altere facilmente o número do WhatsApp, redes sociais, endereço e cardápio aqui.
 */

export interface BurgerItem {
  id: string;
  name: string;
  description: string;
  price: string;
  weight?: string;
  isBestSeller?: boolean;
  image: string;
  tags: string[];
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Beef' | 'Sparkles' | 'Clock' | 'Heart' | 'UtensilsCrossed';
}

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const SITE_CONFIG = {
  // Informações da Marca
  brandName: 'CLOUD',
  tagline: 'BURGER. SABOR. EXPERIÊNCIA.',
  segment: 'Burger House Artesanal',

  // Configuração do WhatsApp
  // IMPORTANTE: Insira aqui o número com código do país (55 para Brasil) e DDD, apenas números.
  // Exemplo: '5511999998888'
  whatsapp: {
    number: '5511999998888', // PLACEHOLDER: substitua pelo número real da CLOUD
    displayNumber: '(11) 99999-8888',
    defaultMessage: 'Olá, equipe da CLOUD! Gostaria de fazer um pedido e conhecer o cardápio.',
    ctaHero: 'Olá, equipe da CLOUD! Quero conhecer os burgers artesanais e pedir agora.',
    ctaExperience: 'Olá, CLOUD! Quero viver essa experiência e pedir um burger artesanal.',
    ctaContact: 'Olá, CLOUD! Gostaria de mais informações sobre o cardápio e horário de hoje.',
  },

  // Redes Sociais e Contato
  instagram: {
    handle: '@cloudburger',
    url: 'https://instagram.com', // PLACEHOLDER: substitua pelo link real
  },

  location: {
    address: 'Rua Augusta, 1492 - Consolação',
    city: 'São Paulo - SP',
    postalCode: '01304-001',
    googleMapsUrl: 'https://maps.google.com/?q=Rua+Augusta+1492+Consolação+Sao+Paulo',
    hours: [
      { days: 'Terça a Quinta', hours: '18:00 às 23:00' },
      { days: 'Sexta e Sábado', hours: '18:00 às 00:00' },
      { days: 'Domingo', hours: '18:00 às 23:30' },
      { days: 'Segunda-feira', hours: 'Fechado para descanso' },
    ],
  },

  // Hero Section
  hero: {
    badge: '100% ARTESANAL • SABOR INCOMPARÁVEL',
    headlinePart1: 'SEU NOVO',
    headlinePart2: 'BURGER FAVORITO.',
    subheadline:
      'Hambúrguer artesanal, ingredientes de verdade e muito sabor em cada mordida. Pão brioche selado, carne suculenta e queijo derretido.',
    mainImage:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    highlights: [
      { label: 'ARTESANAL', sub: 'Blend secreto 180g' },
      { label: '100% SABOR', sub: 'Sem conservantes' },
      { label: 'FEITO NA HORA', sub: 'Chapa em alta temperatura' },
    ],
  },

  // Barra de Diferenciais
  differentials: [
    {
      id: 'diff-1',
      title: 'BURGER ARTESANAL',
      description: 'Carne preparada com cuidado',
      iconName: 'Beef',
    },
    {
      id: 'diff-2',
      title: 'INGREDIENTES SELECIONADOS',
      description: 'Qualidade em cada detalhe',
      iconName: 'Sparkles',
    },
    {
      id: 'diff-3',
      title: 'FEITO NA HORA',
      description: 'Preparado especialmente para você',
      iconName: 'Flame',
    },
    {
      id: 'diff-4',
      title: 'SABOR DE VERDADE',
      description: 'Uma experiência diferente',
      iconName: 'Heart',
    },
  ] as DifferentialItem[],

  // Cardápio de Burgers (5 cards conforme solicitado)
  burgers: [
    {
      id: 'cloud-classic',
      name: 'CLOUD CLASSIC',
      description:
        'Pão brioche dourado, burger artesanal 180g, queijo cheddar derretido, molho especial da casa e cebola caramelizada lentamente.',
      price: 'R$ 36,90',
      weight: '180g',
      isBestSeller: false,
      image: '/images/burgers/cloud-classic.jpg',
      tags: ['Brioche', 'Cheddar', 'Caramelizada'],
    },
    {
      id: 'cloud-bacon',
      name: 'CLOUD BACON',
      description:
        'Burger artesanal 180g, generosa camada de cheddar cremoso, fatias crocantes de bacon defumado e molho especial da casa.',
      price: 'R$ 39,90',
      weight: '180g',
      isBestSeller: false,
      image: '/images/burgers/cloud-bacon.jpg',
      tags: ['Bacon Crocante', 'Cheddar Cremoso'],
    },
    {
      id: 'cloud-bbq',
      name: 'CLOUD BBQ',
      description:
        'Burger artesanal 180g, queijo prato tostado, bacon crocante em tiras e molho barbecue artesanal com toque defumado de macieira.',
      price: 'R$ 38,90',
      weight: '180g',
      isBestSeller: false,
      image: '/images/burgers/cloud-bbq.jpg',
      tags: ['Barbecue Defumado', 'Queijo Prato'],
    },
    {
      id: 'cloud-double',
      name: 'CLOUD DOUBLE',
      description:
        'Dois burgers artesanais de 160g cada (320g de pura carne), queijo cheddar duplo em profusão, bacon e molho especial CLOUD.',
      price: 'R$ 47,90',
      weight: '320g',
      isBestSeller: true, // DESTAQUE com borda vermelha e badge similar à referência visual
      image: '/images/burgers/cloud-double.jpg',
      tags: ['Dupla Carne', 'Duplo Cheddar', 'Mais Pedido'],
    },
    {
      id: 'cloud-crispy',
      name: 'CLOUD CRISPY',
      description:
        'Burger artesanal 180g, queijo derretido, montanha de cebola crispy super crocante e finalização com molho barbecue especial.',
      price: 'R$ 41,90',
      weight: '180g',
      isBestSeller: false,
      image: '/images/burgers/cloud-crispy.jpg',
      tags: ['Cebola Crispy', 'Crocância Máxima'],
    },
  ] as BurgerItem[],

  // Seção Destaque / Experiência
  experience: {
    tag: 'NOSSO SEGREDO',
    titleLine1: 'MAIS QUE UM BURGER.',
    titleLine2: 'UMA EXPERIÊNCIA.',
    text: 'Na CLOUD, cada detalhe importa. Da escolha dos ingredientes à montagem final, tudo é pensado para entregar aquele sabor que faz você querer repetir.',
    badgeYear: '2024',
    badgeText: 'BURGER ARTESANAL',
    image: '/images/experience-artisan.jpg', // Burger artesanal com chapa quente e queijo derretido
  },

  // Números / Por que Cloud?
  stats: [
    {
      number: '+10',
      label: 'OPÇÕES DE BURGERS',
      sublabel: 'Receitas autorais e combinações exclusivas',
    },
    {
      number: '100%',
      label: 'ARTESANAL',
      sublabel: 'Moagem diária de carne fresca selecionada',
    },
    {
      number: 'TOP',
      label: 'INGREDIENTES SELECIONADOS',
      sublabel: 'Pão fresco todo dia e queijos nobres',
    },
    {
      number: '1',
      label: 'EXPERIÊNCIA CLOUD',
      sublabel: 'Do primeiro cheiro até a última mordida',
    },
  ] as StatItem[],

  // Galeria Gastronômica (100% fotos distintas de hambúrgueres apetitosos)
  gallery: [
    {
      id: 'g-1',
      title: 'Double Smash com Queijo Derretido',
      category: 'Smash Burger',
      image: '/images/gallery/gallery-1.jpg',
    },
    {
      id: 'g-2',
      title: 'Burger Artesanal & Batatas Rústicas',
      category: 'Combo Gourmet',
      image: '/images/gallery/gallery-2.jpg',
    },
    {
      id: 'g-3',
      title: 'Cheddar Melt & Queijo Escorrendo',
      category: 'Melt Lover',
      image: '/images/gallery/gallery-3.jpg',
    },
    {
      id: 'g-4',
      title: 'Pão Selado & Carne Suculenta',
      category: 'Artesanal',
      image: '/images/gallery/gallery-4.jpg',
    },
    {
      id: 'g-5',
      title: 'Chapa Quente & Fogo na Grelha',
      category: 'Smoked BBQ',
      image: '/images/gallery/gallery-5.jpg',
    },
    {
      id: 'g-6',
      title: 'Smash Burger Crocante',
      category: 'Crispy Smash',
      image: '/images/gallery/gallery-6.jpg',
    },
  ] as GalleryItem[],

  // Instagram Feed Mock (100% fotos reais e apetitosas de burgers)
  instagramFeed: [
    {
      id: 'insta-1',
      image: '/images/instagram/insta-1.jpg',
      caption: 'Cascata de cheddar derretido e carne no ponto ideal. Quem resiste? 🔥🍔 #cloudburger',
      likes: '512',
      comments: '41',
    },
    {
      id: 'insta-2',
      image: '/images/instagram/insta-2.jpg',
      caption: 'O inconfundível sabor da brasa com bacon crocante e queijo cremoso em abundância. 🥓',
      likes: '468',
      comments: '32',
    },
    {
      id: 'insta-3',
      image: '/images/instagram/insta-3.jpg',
      caption: 'Blend 180g fresco moído no dia, selado em fogo alto para máxima suculência. 🥩',
      likes: '620',
      comments: '58',
    },
    {
      id: 'insta-4',
      image: '/images/instagram/insta-4.jpg',
      caption: 'Cloud Double: o mais pedido da casa. Dois burgers, dobro de queijo! 🍔🔥',
      likes: '734',
      comments: '64',
    },
  ],
};

/**
 * Utilitário para gerar URL do WhatsApp com mensagem pré-preenchida
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = SITE_CONFIG.whatsapp.number.replace(/\D/g, '');
  const message = customMessage || SITE_CONFIG.whatsapp.defaultMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Utilitário para gerar URL do WhatsApp para um hambúrguer específico
 */
export function getBurgerWhatsAppUrl(burgerName: string): string {
  const message = `Olá, Cloud! Quero saber mais sobre o ${burgerName}.`;
  return getWhatsAppUrl(message);
}
