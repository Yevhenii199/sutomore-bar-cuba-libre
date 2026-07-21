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
      cnr: "Onaj koji je sve pokrenuo. Rum, kola i malo limete.",
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
      cnr: "Svježa nana sa limetom — Havana u čaši.",
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
      cnr: "Kremasti tropski bijeg, pripremljen sa drobljenim ledom.",
      ru: "Кремовый тропический коктейль со дробленым льдом.",
    },
    category: "signature",
  },
  {
    name: "Mai Tai",
    price: "€8",
    ingredients: "Dark & White Rum · Orange · Almond",
    desc: {
      en: "Tiki classic with a Caribbean soul.",
      cnr: "Tiki klasik sa karipskom dušom.",
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
      cnr: "Nacionalno piće Brazila — svježe, snažno i osvježavajuće.",
      ru: "Национальный напиток Бразилии — яркий, освежающий и крепкий.",
    },
    category: "classic",
  },
  {
    name: "Tequila Sunrise",
    price: "€7",
    ingredients: "Tequila · Orange · Grenadine",
    desc: {
      en: "A sunset in a glass. Slow-poured, beachside perfect.",
      cnr: "Zalazak sunca u čaši. Savršen izbor za opuštanje pored mora.",
      ru: "Закат в бокале. Идеально для расслабленного отдыха у моря.",
    },
    category: "classic",
  },
  {
    name: "Margarita",
    price: "€7",
    ingredients: "Tequila · Triple Sec · Lime · Salt",
    desc: {
      en: "Tart, cold, and salty-rimmed. Yes please.",
      cnr: "Oštar, hladan i sa slanim obrubom na čaši.",
      ru: "Освежающий, холодный, с соляным ободком.",
    },
    category: "classic",
  },
  {
    name: "B-52",
    price: "€5",
    ingredients: "Kahlúa · Baileys · Grand Marnier",
    desc: {
      en: "Three layers of trouble. Down in one.",
      cnr: "Tri sloja uživanja. Pije se u jednom gutljaju.",
      ru: "Три слоя удовольствия. Пьётся залпом.",
    },
    category: "shots",
  },
  {
    name: "Tequila Boom",
    price: "€3",
    ingredients: "Tequila · Sprite",
    desc: {
      en: "Slam it, drink it, dance.",
      cnr: "Udari, popij, pleši.",
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
      cnr: "Gorivo za drugu polovinu noći.",
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
      cnr: "Flaša koju ćete vidjeti na svakoj fotografiji zalaska sunca.",
      ru: "Та самая бутылка с каждого фото на закате.",
    },
    category: "beer",
  },
  {
    name: "Nikšićko Draft",
    price: "€3",
    ingredients: "Local lager · 0.5L",
    desc: {
      en: "Montenegro's classic, straight from the tap.",
      cnr: "Klasik Crne Gore, pravo sa točionika.",
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
      cnr: "Svježa, hladna i poslužena u velikoj čaši.",
      ru: "Свежий, холодный, в большом бокале.",
    },
    category: "beer",
  },
];

export function descOf(item: MenuItem, lang: Lang) {
  return item.desc[lang];
}