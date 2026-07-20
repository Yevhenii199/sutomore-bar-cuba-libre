export type Lang = "en" | "cnr" | "ru";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "cnr", label: "ЦРН", flag: "🇲🇪" },
  { code: "ru", label: "РУ", flag: "🇷🇺" },
];

type Dict = Record<string, { en: string; cnr: string; ru: string }>;

export const t: Dict = {
  nav_home: { en: "Home", cnr: "Почетна", ru: "Главная" },
  nav_menu: { en: "Cocktails & Menu", cnr: "Коктели и Мени", ru: "Коктейли и Меню" },
  nav_gallery: { en: "Gallery", cnr: "Галерија", ru: "Галерея" },
  nav_location: { en: "Location & Hours", cnr: "Локација и Радно време", ru: "Локация и Часы" },
  nav_view_location: { en: "View Location", cnr: "Прикажи Локацију", ru: "Показать Локацию" },

  hero_kicker: { en: "Sutomore Beach · Since 2001", cnr: "Плажа Сутоморе · Од 2001.", ru: "Пляж Сутоморе · С 2001" },
  hero_title_a: { en: "Feel the Cuban Rhythm", cnr: "Осјетите Кубански Ритам", ru: "Почувствуй Кубинский Ритм" },
  hero_title_b: { en: "on the Adriatic Shore", cnr: "на Јадранској Обали", ru: "на Адриатическом Берегу" },
  hero_sub: {
    en: "Best cocktails, ice cold beer & sunset vibes on Sutomore Beach, Montenegro.",
    cnr: "Најбољи коктели, ледено пиво и залазак сунца на плажи Сутоморе, Црна Гора.",
    ru: "Лучшие коктейли, ледяное пиво и закаты на пляже Сутоморе, Черногория.",
  },
  hero_cta_menu: { en: "Explore Menu", cnr: "Погледај Мени", ru: "Смотреть Меню" },
  hero_cta_dir: { en: "Get Directions", cnr: "Правац до нас", ru: "Как добраться" },

  features_title: { en: "Your Slice of Havana", cnr: "Ваш комад Хаване", ru: "Твой кусочек Гаваны" },
  features_sub: {
    en: "Everything a perfect beach day needs — right at the water's edge.",
    cnr: "Све што савршен дан на плажи тражи — на самој обали мора.",
    ru: "Всё для идеального дня на пляже — прямо у кромки воды.",
  },
  feat1_t: { en: "Signature Beach Cocktails", cnr: "Ауторски Коктели", ru: "Фирменные Коктейли" },
  feat1_d: {
    en: "Mojito, Cuba Libre, Piña Colada — mixed fresh with real Cuban soul.",
    cnr: "Мохито, Куба Либре, Пина Колада — свјеже мијешани уз праву кубанску душу.",
    ru: "Мохито, Куба Либре, Пина Колада — свежие, с настоящей кубинской душой.",
  },
  feat2_t: { en: "Beachfront Lounging", cnr: "Уживање на плажи", ru: "Отдых у моря" },
  feat2_d: {
    en: "Sunbeds, umbrellas, and a wooden deck bar right by the sea.",
    cnr: "Лежаљке, сунцобрани и дрвени бар на самом мору.",
    ru: "Шезлонги, зонты и деревянный бар прямо у воды.",
  },
  feat3_t: { en: "Sunset Beats", cnr: "Ритмови заласка", ru: "Закатные Ритмы" },
  feat3_d: {
    en: "Chill music, lazy bags, and a cold drink with the ocean breeze.",
    cnr: "Опуштајућа музика, лење вреће и хладно пиће уз морски поветарац.",
    ru: "Расслабляющая музыка, ленивые кресла и прохладный напиток с морским бризом.",
  },

  menu_title: { en: "Cocktail Menu", cnr: "Коктел Мени", ru: "Коктейльное Меню" },
  menu_sub: {
    en: "Handcrafted drinks, poured with a smile.",
    cnr: "Ручно прављена пића, послужена уз осмијех.",
    ru: "Напитки ручной работы, поданные с улыбкой.",
  },
  cat_signature: { en: "Signature", cnr: "Ауторски", ru: "Фирменные" },
  cat_classic: { en: "Classics", cnr: "Класици", ru: "Классика" },
  cat_shots: { en: "Shots", cnr: "Шотови", ru: "Шоты" },
  cat_beer: { en: "Beers & Soft", cnr: "Пива и Соко", ru: "Пиво и Софт" },

  gallery_title: { en: "The Vibe", cnr: "Атмосфера", ru: "Атмосфера" },
  gallery_sub: {
    en: "Wooden decks, warm light, cold drinks.",
    cnr: "Дрвене терасе, топло свјетло, хладна пића.",
    ru: "Деревянные террасы, тёплый свет, холодные напитки.",
  },

  loc_title: { en: "Find Us", cnr: "Пронађите Нас", ru: "Найти Нас" },
  loc_addr_l: { en: "Address", cnr: "Адреса", ru: "Адрес" },
  loc_addr: {
    en: "Sutomore Beach Promenade, Bar Municipality, Montenegro",
    cnr: "Шеталиште плаже Сутоморе, Општина Бар, Црна Гора",
    ru: "Набережная пляжа Сутоморе, муниципалитет Бар, Черногория",
  },
  loc_hours_l: { en: "Working Hours", cnr: "Радно вријеме", ru: "Часы работы" },
  loc_hours: {
    en: "Mon – Sun · 08:00 – 01:00 (Summer Season)",
    cnr: "Пон – Нед · 08:00 – 01:00 (Љетна сезона)",
    ru: "Пн – Вс · 08:00 – 01:00 (Летний сезон)",
  },
  loc_open_daily: { en: "Open Daily", cnr: "Отворено сваког дана", ru: "Открыто ежедневно" },
  loc_map_cta: { en: "Open in Google Maps", cnr: "Отвори у Google Maps", ru: "Открыть в Google Maps" },
  loc_follow: { en: "Follow the vibe", cnr: "Пратите нас", ru: "Следите за нами" },

  footer_rights: { en: "All rights reserved.", cnr: "Сва права задржана.", ru: "Все права защищены." },
  footer_tag: {
    en: "Cocktails · Beach · Sunsets since 2001",
    cnr: "Коктели · Плажа · Заласци од 2001.",
    ru: "Коктейли · Пляж · Закаты с 2001",
  },
};

export function tr(key: keyof typeof t, lang: Lang): string {
  return t[key]?.[lang] ?? t[key]?.en ?? key;
}
