import tradicionalImg from '../assets/coffeeImages/tradicional.svg'
import americanoImg from '../assets/coffeeImages/americano.svg'
import cremosoImg from '../assets/coffeeImages/cremoso.svg'
import geladoImg from '../assets/coffeeImages/gelado.svg'
import comleiteImg from '../assets/coffeeImages/comleite.svg'
import latteImg from '../assets/coffeeImages/latte.svg'
import capuccinoImg from '../assets/coffeeImages/capuccino.svg'
import macchiatoImg from '../assets/coffeeImages/macchiato.svg'
import mocaccinoImg from '../assets/coffeeImages/mocaccino.svg'
import chocolatequenteImg from '../assets/coffeeImages/chocolatequente.svg'
import cubanoImg from '../assets/coffeeImages/cubano.svg'
import havaianoImg from '../assets/coffeeImages/havaiano.svg'
import arabeImg from '../assets/coffeeImages/arabe.svg'
import irlandesImg from '../assets/coffeeImages/irlandes.svg'

export const products = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    tags: ['TRADICIONAL'],
    priceInCents: 990,
    description: 'O tradicional café feito com água quente e grãos moídos',
    inventory: 7,
    image: tradicionalImg,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    tags: ['TRADICIONAL'],
    priceInCents: 990,
    description: 'Expresso diluído, menos intenso que o tradicional',
    inventory: 12,
    image: americanoImg,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    tags: ['TRADICIONAL'],
    priceInCents: 990,
    description: 'Café expresso   com espuma cremosa',
    inventory: 19,
    image: cremosoImg,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    tags: ['TRADICIONAL', 'GELADO'],
    priceInCents: 990,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    inventory: 19,
    image: geladoImg,
  },
  {
    id: 5,
    title: 'Café com Leite',
    tags: ['TRADICIONAL', 'COM LEITE'],
    priceInCents: 990,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    inventory: 19,
    image: comleiteImg,
  },
  {
    id: 6,
    title: 'Latte',
    tags: ['TRADICIONAL', 'COM LEITE'],
    priceInCents: 990,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    inventory: 19,
    image: latteImg,
  },
  {
    id: 7,
    title: 'Capuccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    priceInCents: 990,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    inventory: 2,
    image: capuccinoImg,
  },
  {
    id: 8,
    title: 'Macchiato',
    tags: ['TRADICIONAL', 'COM LEITE'],
    priceInCents: 990,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    inventory: 3,
    image: macchiatoImg,
  },
  {
    id: 9,
    title: 'Macaccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    priceInCents: 990,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    inventory: 10,
    image: mocaccinoImg,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    tags: ['ESPECIAL', 'COM LEITE'],
    priceInCents: 990,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    inventory: 25,
    image: chocolatequenteImg,
  },
  {
    id: 11,
    title: 'Cubano',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    priceInCents: 990,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    inventory: 21,
    image: cubanoImg,
  },
  {
    id: 12,
    title: 'Havaiano',
    tags: ['ESPECIAL'],
    priceInCents: 990,
    description: 'Bebida adocicada preparada com café e leite de coco',
    inventory: 21,
    image: havaianoImg,
  },
  {
    id: 13,
    title: 'Havaiano',
    tags: ['ESPECIAL'],
    priceInCents: 990,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    inventory: 2,
    image: arabeImg,
  },
  {
    id: 14,
    title: 'Irlandês',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    priceInCents: 990,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    inventory: 4,
    image: irlandesImg,
  },
]
