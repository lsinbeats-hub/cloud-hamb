export interface ImagePreset {
  id: string;
  name: string;
  url: string;
  category: 'transparent' | 'burger' | 'experience' | 'artesanal';
  description: string;
}

export const BURGER_IMAGE_PRESETS: ImagePreset[] = [
  // Transparent PNGs (ideais para o Hero)
  {
    id: 'preset-transp-1',
    name: 'Burger Smash HD (Transparente)',
    url: '/images/hero-burger.png',
    category: 'transparent',
    description: 'Pão brioche, duplo smash, cheddar e alface (fundo transparente)',
  },
  {
    id: 'preset-transp-2',
    name: 'Burger Clássico Brioche (Transparente)',
    url: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4114.png',
    category: 'transparent',
    description: 'Hambúrguer artesanal tradicional com gergelim (fundo transparente)',
  },
  {
    id: 'preset-transp-3',
    name: 'Double Cheddar Monster (Transparente)',
    url: 'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4140.png',
    category: 'transparent',
    description: 'Dupla carne alta, muito cheddar e picles (fundo transparente)',
  },

  // Fotos de Burgers para Cardápio e Galeria
  {
    id: 'preset-burger-1',
    name: 'Cloud Classic Brioche',
    url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Pão selado com manteiga, queijo derretido e blend suculento',
  },
  {
    id: 'preset-burger-2',
    name: 'Cloud Bacon Defumado',
    url: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Fatias fartas de bacon crocante e queijo cremoso',
  },
  {
    id: 'preset-burger-3',
    name: 'Cloud BBQ Especial',
    url: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Molho barbecue rústico e queijo tostado',
  },
  {
    id: 'preset-burger-4',
    name: 'Double Smash Cheddar Melt',
    url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Dois blends esmagados na chapa com queijo dourado',
  },
  {
    id: 'preset-burger-5',
    name: 'Crispy Onion Supreme',
    url: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Cebola empanada crocante e molho da casa',
  },
  {
    id: 'preset-burger-6',
    name: 'Carne Alta & Queijo Prato',
    url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Blend de 200g grelhado no ponto vermelho',
  },
  {
    id: 'preset-burger-7',
    name: 'Smash com Queijo Escorrendo',
    url: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1000&auto=format&fit=crop',
    category: 'burger',
    description: 'Queijo cheddar derretido com crosta perfeita',
  },
  {
    id: 'preset-burger-8',
    name: 'Chapa em Chamas & Fogo',
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    category: 'experience',
    description: 'Chapa quente e fogo alto na grelha',
  },
];
