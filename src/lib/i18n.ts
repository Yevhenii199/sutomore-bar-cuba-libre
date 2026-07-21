export type Lang = "en" | "cnr" | "ru";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "cnr", label: "MNE", flag: "🇲🇪" },
  { code: "ru", label: "РУ", flag: "🇷🇺" },
];

type Dict = Record<string, { en: string; cnr: string; ru: string }>;

export const t: Dict = {
  // Navigation
  nav_home: { en: "Home", cnr: "Početna", ru: "Главная" },
  nav_menu: { en: "Cocktails & Menu", cnr: "Kokteli i meni", ru: "Коктейли и меню" },
  nav_gallery: { en: "Gallery", cnr: "Galerija", ru: "Галерея" },
  nav_location: { en: "Location & Hours", cnr: "Lokacija i radno vrijeme", ru: "Локация и часы" },
  nav_view_location: { en: "View Location", cnr: "Prikaži lokaciju", ru: "Показать локацию" },

  // Hero Section
  hero_kicker: { en: "Sutomore Beach · Since 2001", cnr: "Plaža Sutomore · Od 2001.", ru: "Пляж Сутоморе · С 2001 года" },
  hero_title_a: { en: "Feel the Cuban Rhythm", cnr: "Osjetite kubanski ritam", ru: "Почувствуйте кубинский ритм" },
  hero_title_b: { en: "on the Adriatic Shore", cnr: "na jadranskoj obali", ru: "на Адриатическом побережье" },
  hero_sub: {
    en: "Craft cocktails, ice-cold beer & sunset vibes right on Sutomore Beach, Montenegro.",
    cnr: "Vrhunski kokteli, hladno pivo i zalasci sunca na samoj obali Sutomora, Crna Gora.",
    ru: "Фирменные коктейли, ледяное пиво и атмосферные закаты прямо на пляже Сутоморе, Черногория.",
  },
  hero_cta_menu: { en: "Explore Menu", cnr: "Pogledajte meni", ru: "Смотреть меню" },
  hero_cta_dir: { en: "Get Directions", cnr: "Kako do nas", ru: "Как добраться" },

  // Features Section
  features_title: { en: "Your Slice of Havana", cnr: "Vaš komad Havane", ru: "Ваш кусочек Гаваны" },
  features_sub: {
    en: "Everything you need for a perfect beach day — right at the water's edge.",
    cnr: "Sve što vam je potrebno za savršen dan na plaži — tik uz more.",
    ru: "Всё для идеального дня на пляже.",
  },
  feat1_t: { en: "Signature Beach Cocktails", cnr: "Autorski kokteli", ru: "Фирменные коктейли" },
  feat1_d: {
    en: "Mojito, Cuba Libre, Piña Colada — freshly mixed with authentic Cuban soul.",
    cnr: "Mojito, Cuba Libre, Piña Colada — svježe pripremljeni sa pravom kubanskom dušom.",
    ru: "Мохито, Куба Либре, Пинья Колада — свежие коктейли с настоящей кубинской душой.",
  },
  feat2_t: { en: "Beachfront Lounging", cnr: "Odmor na plaži", ru: "Отдых у моря" },
  feat2_d: {
    en: "Sunbeds, umbrellas, and a relaxed wooden deck bar right on the sand.",
    cnr: "Ležaljke, suncobrani i drveni šank bar na samoj plaži.",
    ru: "Шезлонги, зонты и уютный деревянный бар прямо на пляже.",
  },
  feat3_t: { en: "Sunset Beats", cnr: "Ritmovi zalaska", ru: "Ритмы заката" },
  feat3_d: {
    en: "Chillout music, cozy bean bags, and cold drinks with a fresh sea breeze.",
    cnr: "Opuštajuća muzika, udobne fotelje i hladno piće uz morski povjetarac.",
    ru: "Chillout-музыка, удобные кресла-мешки и прохладный напиток с морским бризом.",
  },

  // Categories & Menu
  menu_title: { en: "Cocktail Menu", cnr: "Koktel meni", ru: "Коктейльное меню" },
  menu_sub: {
    en: "Handcrafted drinks poured with a smile.",
    cnr: "Ručno rađena pića poslužena uz osmijeh.",
    ru: "Авторские напитки, приготовленные с любовью.",
  },
  cat_signature: { en: "Signature", cnr: "Autorski", ru: "Фирменные" },
  cat_classic: { en: "Classics", cnr: "Klasici", ru: "Классика" },
  cat_shots: { en: "Shots", cnr: "Šotovi", ru: "Шоты" },
  cat_beer: { en: "Beers & Soft Drinks", cnr: "Piva i bezalkoholna pića", ru: "Пиво и безалкогольные" },

  // Gallery
  gallery_title: { en: "The Vibe", cnr: "Atmosfera", ru: "Атмосфера" },
  gallery_sub: {
    en: "Wooden decks, warm sea light, and refreshing drinks.",
    cnr: "Drvene terase, toplo morsko svjetlo i osvježavajuća pića.",
    ru: "Деревянные террасы, тёплый морской свет и освежающие напитки.",
  },

  // Location & Working Hours
  loc_title: { en: "Find Us", cnr: "Gdje se nalazimo", ru: "Как нас найти" },
  loc_addr_l: { en: "Address", cnr: "Adresa", ru: "Адрес" },
  loc_addr: {
    en: "Sutomore Beach Promenade, Bar, Montenegro",
    cnr: "Šetalište Sutomore, Bar, Crna Gora",
    ru: "Набережная Сутоморе, Бар, Черногория",
  },
  loc_hours_l: { en: "Opening Hours", cnr: "Radno vrijeme", ru: "Режим работы" },
  loc_hours: {
    en: "Mon – Sun · 08:00 – 20:00 (Summer Season)",
    cnr: "Pon – Ned · 08:00 – 20:00 (Ljetnja sezona)",
    ru: "Пн – Вс · 08:00 – 20:00 (Летний сезон)",
  },
  loc_open_daily: { en: "Open Daily", cnr: "Otvoreno svakog dana", ru: "Открыто ежедневно" },
  loc_map_cta: { en: "Open in Google Maps", cnr: "Otvori u Google Maps", ru: "Открыть в Google Maps" },
  loc_follow: { en: "Follow the Vibe", cnr: "Pratite nas", ru: "Следите за нами" },

  // Footer
  footer_rights: { en: "All rights reserved.", cnr: "Sva prava zadržana.", ru: "Все права защищены." },
  footer_tag: {
    en: "Cocktails · Beach · Sunsets since 2001",
    cnr: "Kokteli · Plaža · Zalasci sunca od 2001.",
    ru: "Коктейли · Пляж · Закаты с 2001 года",
  },
};

export function tr(key: keyof typeof t, lang: Lang): string {
  return t[key]?.[lang] ?? t[key]?.en ?? key;
}