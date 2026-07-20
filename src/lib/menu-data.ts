import type { Lang } from "./i18n";

export type Category = "signature" | "classic" | "shots" | "beer";

export type MenuItem = {
  name: string;
  price: string;
  ingredients: string;
  desc: { en: string; cnr: string; ru: string };
  category: Category;
};

export const MENU: MenuItem[] = [
  {
    name: "Cuba Libre",
    price: "€7",
    ingredients: "Havana Rum · Cola · Lime",
    desc: {
      en: "The one that started it all. Rum, cola, and a squeeze of lime.",
      cnr: "Онај који је све покренуо. Рум, кола и мало лимете.",
      ru: "С него всё началось. Ром, кола и долька лайма.",
    },
    category: "signature",
  },
  {
    name: "Mojito",
    price: "€7",
    ingredients: "White Rum · Mint · Lime · Soda",
    desc: {
      en: "Fresh mint muddled with lime — Havana in a highball.",
      cnr: "Свјежа нана уз лимету — Хавана у чаши.",
      ru: "Свежая мята с лаймом — Гавана в бокале.",
    },
    category: "signature",
  },
  {
    name: "Piña Colada",
    price: "€8",
    ingredients: "White Rum · Pineapple · Coconut Cream",
    desc: {
      en: "Creamy tropical escape, blended over crushed ice.",
      cnr: "Кремасти тропски бијег, мућкан са леденом коцком.",
      ru: "Кремовый тропический побег, взбитый со льдом.",
    },
    category: "signature",
  },
  {
    name: "Mai Tai",
    price: "€8",
    ingredients: "Dark & White Rum · Orange · Almond",
    desc: {
      en: "Tiki classic with a Caribbean soul.",
      cnr: "Тики класик уз карипску душу.",
      ru: "Тики-классика с карибской душой.",
    },
    category: "signature",
  },
  {
    name: "Caipirinha",
    price: "€7",
    ingredients: "Cachaça · Lime · Sugar",
    desc: {
      en: "Brazil's national drink — bright, punchy, honest.",
      cnr: "Национално пиће Бразила — свјеже и снажно.",
      ru: "Национальный напиток Бразилии — яркий и прямой.",
    },
    category: "classic",
  },
  {
    name: "Tequila Sunrise",
    price: "€7",
    ingredients: "Tequila · Orange · Grenadine",
    desc: {
      en: "A sunset in a glass. Slow-poured, poolside perfect.",
      cnr: "Залазак сунца у чаши. Полагано точен, савршен уз базен.",
      ru: "Закат в бокале. Не спеша налит, идеально у бассейна.",
    },
    category: "classic",
  },
  {
    name: "Margarita",
    price: "€7",
    ingredients: "Tequila · Triple Sec · Lime · Salt",
    desc: {
      en: "Tart, cold, and salty-rimmed. Yes please.",
      cnr: "Кисела, ледена и слано ободрена. Да, молим.",
      ru: "Кислый, холодный, с солью по ободку. Да, пожалуйста.",
    },
    category: "classic",
  },
  {
    name: "B-52",
    price: "€5",
    ingredients: "Kahlúa · Baileys · Grand Marnier",
    desc: {
      en: "Three layers of trouble. Down in one.",
      cnr: "Три слоја невоље. У једном гутљају.",
      ru: "Три слоя удовольствия. Залпом.",
    },
    category: "shots",
  },
  {
    name: "Tequila Boom",
    price: "€3",
    ingredients: "Tequila · Sprite",
    desc: {
      en: "Slam it, drink it, dance.",
      cnr: "Тресни, попиј, плеши.",
      ru: "Стукни, выпей, танцуй.",
    },
    category: "shots",
  },
  {
    name: "Jägerbomb",
    price: "€6",
    ingredients: "Jägermeister · Energy Drink",
    desc: {
      en: "Fuel for the second half of the night.",
      cnr: "Гориво за други дио ноћи.",
      ru: "Топливо для второй половины ночи.",
    },
    category: "shots",
  },
  {
    name: "Corona Extra",
    price: "€4",
    ingredients: "Ice cold · with lime",
    desc: {
      en: "The bottle you'll see in every sunset photo.",
      cnr: "Флаша коју ћете видјети на сваком заласку.",
      ru: "Та самая бутылка на каждом закатном фото.",
    },
    category: "beer",
  },
  {
    name: "Nikšićko Draft",
    price: "€3",
    ingredients: "Local lager · 0.5L",
    desc: {
      en: "Montenegro's classic, straight from the tap.",
      cnr: "Класик Црне Горе, право са точионика.",
      ru: "Классика Черногории, прямо из крана.",
    },
    category: "beer",
  },
  {
    name: "Fresh Lemonade",
    price: "€4",
    ingredients: "Lemon · Mint · Cane sugar",
    desc: {
      en: "Bright, cold, and served in a big glass.",
      cnr: "Свјежа, ледена, у великој чаши.",
      ru: "Свежий, холодный, в большом бокале.",
    },
    category: "beer",
  },
];

export function descOf(item: MenuItem, lang: Lang) {
  return item.desc[lang];
}
