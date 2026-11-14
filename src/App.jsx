
import React, { useEffect, useMemo, useState } from "react";

const t = {
  brand: "Aloha \u043C\u0435\u0431\u0435\u043B\u044C",
  home: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
  catalog: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
  about: "\u041E \u043D\u0430\u0441",
  contacts: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
  heroTitle: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F",
  heroText: "\u041C\u0435\u0431\u0435\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043A\u043E\u043C\u0444\u043E\u0440\u0442, \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0443 \u0438 \u043F\u0440\u043E\u0434\u0443\u043C\u0430\u043D\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D.",
  explore: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
  collection: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F",
  collectionText: "\u041F\u043E\u0434\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0431\u0435\u043B\u044C, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0432\u0430\u0448\u0435\u043C\u0443 \u0434\u043E\u043C\u0443 \u0438 \u043E\u0431\u0440\u0430\u0437\u0443 \u0436\u0438\u0437\u043D\u0438.",
  all: "\u0412\u0441\u0435",
  sofas: "\u0414\u0438\u0432\u0430\u043D\u044B",
  beds: "\u041A\u0440\u043E\u0432\u0430\u0442\u0438",
  chairs: "\u041A\u0440\u0435\u0441\u043B\u0430",
  tables: "\u0421\u0442\u043E\u043B\u044B",
  storage: "\u0428\u043A\u0430\u0444\u044B",
  living: "\u0413\u043E\u0441\u0442\u0438\u043D\u044B\u0435",
  search: "\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0431\u0435\u043B\u0438...",
  sort: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
  popular: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435",
  cheap: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0448\u0435\u0432\u044B\u0435",
  expensive: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0438\u0435",
  details: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
  add: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443",
  aboutTitle: "\u0411\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043C\u0435\u0431\u0435\u043B\u044C",
  aboutText: "\u041C\u044B \u0432 Aloha \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0434\u043E\u043C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u0441\u0442\u043E\u043C, \u0433\u0434\u0435 \u043A\u0430\u0436\u0434\u0430\u044F \u0434\u0435\u0442\u0430\u043B\u044C \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435. \u041C\u044B \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u043C\u0435\u0431\u0435\u043B\u044C, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u043E\u0447\u0435\u0442\u0430\u044E\u0442\u0441\u044F \u0441\u0442\u0438\u043B\u044C, \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E.",
  aboutButton: "\u041D\u0430\u0448 \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
  why: "\u041F\u043E\u0447\u0435\u043C\u0443 Aloha?",
  whyText: "\u041C\u044B \u0437\u0430\u0431\u043E\u0442\u0438\u043C\u0441\u044F \u043E \u0434\u0435\u0442\u0430\u043B\u044F\u0445, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0430\u0442\u044C\u0441\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u043E\u043C\u043E\u043C.",
  quality: "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E",
  qualityText: "\u041F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u043C\u0435\u0431\u0435\u043B\u044C \u0441 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435\u043C \u043A \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u043C \u0438 \u0434\u0435\u0442\u0430\u043B\u044F\u043C.",
  design: "\u0414\u0438\u0437\u0430\u0439\u043D",
  designText: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B \u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F.",
  service: "\u0421\u0435\u0440\u0432\u0438\u0441",
  serviceText: "\u041F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.",
  delivery: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
  deliveryText: "\u0423\u0442\u043E\u0447\u043D\u044F\u0439\u0442\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0443 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430.",
  contactTitle: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0447\u0442\u043E-\u0442\u043E \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0435",
  contactText: "\u0415\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0431\u0435\u043B\u044C? \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443.",
  name: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",
  phone: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
  message: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
  send: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
  success: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430.",
  cart: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
  empty: "\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0430",
  total: "\u0418\u0442\u043E\u0433\u043E",
  checkout: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",
  close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  favorites: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
  noResults: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
  reviews: "\u041E\u0442\u0437\u044B\u0432\u044B",
  reviewText: "\u0412\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
  instagram: "\u041D\u0430\u0448 \u043C\u0438\u0440 \u0432 Instagram",
  footerText: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0443\u044E\u0442 \u0438 \u0441\u0442\u0438\u043B\u044C \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u0443\u0433\u043E\u043B\u043E\u043A \u0432\u0430\u0448\u0435\u0433\u043E \u0434\u043E\u043C\u0430."
};

const products = [
  {
    id: 1,
    name: "\u0414\u0438\u0432\u0430\u043D \u041C\u043E\u043D\u0430\u043A\u043E",
    category: "sofas",
    price: 12500000,
    oldPrice: 14500000,
    tag: "\u0425\u0438\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
    description: "\u0423\u044E\u0442\u043D\u044B\u0439 \u0434\u0438\u0432\u0430\u043D \u0441 \u043C\u044F\u0433\u043A\u0438\u043C\u0438 \u043F\u043E\u0434\u0443\u0448\u043A\u0430\u043C\u0438 \u0438 \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 2,
    name: "\u041A\u0440\u043E\u0432\u0430\u0442\u044C \u041B\u0443\u043D\u0430",
    category: "beds",
    price: 9800000,
    oldPrice: null,
    tag: "\u041D\u043E\u0432\u0438\u043D\u043A\u0430",
    description: "\u0421\u0442\u0438\u043B\u044C\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u0430\u0442\u044C \u0441 \u043C\u044F\u0433\u043A\u0438\u043C \u0438\u0437\u0433\u043E\u043B\u043E\u0432\u044C\u0435\u043C \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043E\u0442\u0434\u044B\u0445\u0430.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 3,
    name: "\u041A\u0440\u0435\u0441\u043B\u043E \u0410\u0440\u0438\u0430",
    category: "chairs",
    price: 4200000,
    oldPrice: 4900000,
    tag: "\u0421\u043A\u0438\u0434\u043A\u0430",
    description: "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u043E\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0434\u043B\u044F \u0437\u043E\u043D\u044B \u043E\u0442\u0434\u044B\u0445\u0430.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 4,
    name: "\u0421\u0442\u043E\u043B \u041D\u043E\u0440\u0434",
    category: "tables",
    price: 3500000,
    oldPrice: null,
    tag: "",
    description: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0441\u0442\u043E\u043B \u0441 \u043F\u0440\u043E\u0447\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u043E\u0439 \u0438 \u0442\u0435\u043F\u043B\u043E\u0439 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u043E\u0439 \u0434\u0435\u0440\u0435\u0432\u0430.",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 5,
    name: "\u0428\u043A\u0430\u0444 \u041C\u0438\u043B\u0430\u043D",
    category: "storage",
    price: 8700000,
    oldPrice: null,
    tag: "",
    description: "\u041F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u0439 \u0448\u043A\u0430\u0444 \u0441 \u0447\u0438\u0441\u0442\u044B\u043C\u0438 \u043B\u0438\u043D\u0438\u044F\u043C\u0438 \u0438 \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 6,
    name: "\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F \u0412\u0435\u0440\u043E\u043D\u0430",
    category: "living",
    price: 15800000,
    oldPrice: 17900000,
    tag: "\u0421\u043A\u0438\u0434\u043A\u0430",
    description: "\u0413\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0434\u043B\u044F \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 7,
    name: "\u0414\u0438\u0432\u0430\u043D \u041E\u0440\u0431\u0438\u0442",
    category: "sofas",
    price: 11200000,
    oldPrice: null,
    tag: "",
    description: "\u041C\u044F\u0433\u043A\u0438\u0439 \u0434\u0438\u0432\u0430\u043D \u0441 \u0433\u043B\u0443\u0431\u043E\u043A\u043E\u0439 \u043F\u043E\u0441\u0430\u0434\u043A\u043E\u0439 \u0438 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0443\u0448\u043A\u0430\u043C\u0438.",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1000&q=85"
  },
  {
    id: 8,
    name: "\u041A\u0440\u0435\u0441\u043B\u043E \u0411\u0435\u043B\u043B\u0430",
    category: "chairs",
    price: 3900000,
    oldPrice: null,
    tag: "\u041D\u043E\u0432\u0438\u043D\u043A\u0430",
    description: "\u042D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0435 \u043A\u0440\u0435\u0441\u043B\u043E \u0441 \u043C\u044F\u0433\u043A\u043E\u0439 \u043E\u0431\u0438\u0432\u043A\u043E\u0439 \u0438 \u043E\u0431\u0442\u0435\u043A\u0430\u0435\u043C\u044B\u043C\u0438 \u0444\u043E\u0440\u043C\u0430\u043C\u0438.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=85"
  }
];

const categories = [
  { id: "all", label: t.all },
  { id: "sofas", label: t.sofas },
  { id: "beds", label: t.beds },
  { id: "chairs", label: t.chairs },
  { id: "tables", label: t.tables },
  { id: "storage", label: t.storage },
  { id: "living", label: t.living }
];

function Icon({ name, size = 21 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const paths = {
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    heart: <path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    minus: <path d="M5 12h14" />,
    trash: <><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="m19 6-1 14H6L5 6" /><path d="M10 11v5M14 11v5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2 3a14 14 0 0 1-7-7l3-2-3-5Z" />
  };

  return <svg {...common}>{paths[name] || null}</svg>;
}

const money = (value) =>
  new Intl.NumberFormat("ru-RU").format(value) + " UZS";

function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aloha-cart")) || [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aloha-favorites")) || [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    localStorage.setItem("aloha-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("aloha-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const favoriteMatch = !showFavorites || favorites.includes(product.id);
      return categoryMatch && searchMatch && favoriteMatch;
    });

    if (sort === "cheap") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "expensive") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, search, sort, showFavorites, favorites]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function changeQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  }

  function submitForm(event) {
    event.preventDefault();
    setFormSent(true);
    event.target.reset();
  }

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        :root {
          --bg: #f8f7f4;
          --white: #ffffff;
          --ink: #24231f;
          --muted: #77756e;
          --accent: #9a8064;
          --accent-dark: #80664c;
          --line: #e9e6df;
          --soft: #efede7;
          --serif: 'Playfair Display', Georgia, serif;
          --sans: 'DM Sans', Arial, sans-serif;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--sans); }
        button, input, textarea, select { font: inherit; }
        button { cursor: pointer; }
        a { color: inherit; text-decoration: none; }
        .app { overflow: hidden; min-height: 100vh; }
        .container { width: min(1240px, calc(100% - 64px)); margin: 0 auto; }

        .announcement {
          background: #292820;
          color: #f8f6ef;
          text-align: center;
          padding: 10px 16px;
          font-size: 11px;
          letter-spacing: 1.7px;
          text-transform: uppercase;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(248,247,244,.94);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(40,38,32,.07);
        }
        .nav {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }
        .logo {
          font-family: var(--serif);
          font-size: 28px;
          letter-spacing: -.8px;
          white-space: nowrap;
        }
        .logo span { color: var(--accent); }
        .nav-links { display: flex; align-items: center; gap: 34px; }
        .nav-links button {
          border: 0;
          background: none;
          color: #55534c;
          font-size: 13px;
          transition: color .2s;
        }
        .nav-links button:hover { color: var(--accent); }
        .nav-actions { display: flex; align-items: center; gap: 19px; }
        .icon-btn {
          position: relative;
          border: 0;
          background: transparent;
          color: var(--ink);
          display: grid;
          place-items: center;
          padding: 5px;
        }
        .count {
          position: absolute;
          top: -5px;
          right: -8px;
          background: var(--accent);
          color: white;
          font-size: 9px;
          min-width: 17px;
          height: 17px;
          border-radius: 20px;
          display: grid;
          place-items: center;
        }
        .mobile-toggle { display: none; }

        .hero {
          position: relative;
          min-height: 670px;
          display: flex;
          align-items: center;
          background: #d8d2c7;
          isolation: isolate;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90') center 52%/cover;
        }
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(90deg, rgba(24,23,19,.68), rgba(24,23,19,.27) 58%, rgba(24,23,19,.04));
        }
        .hero-content { max-width: 650px; color: white; padding: 90px 0; }
        .eyebrow {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 20px;
        }
        .hero .eyebrow { color: #e2c7a8; }
        h1, h2, h3, p { margin-top: 0; }
        .hero h1 {
          font-family: var(--serif);
          font-size: clamp(42px, 5.4vw, 72px);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -1.8px;
          margin-bottom: 24px;
        }
        .hero p { max-width: 470px; color: rgba(255,255,255,.82); font-size: 15px; line-height: 1.9; margin-bottom: 34px; }
        .btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--accent);
          background: var(--accent);
          color: white;
          padding: 16px 25px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          transition: .25s;
        }
        .btn:hover { background: var(--accent-dark); border-color: var(--accent-dark); transform: translateY(-2px); }
        .btn-outline { background: transparent; border-color: rgba(255,255,255,.65); }
        .btn-outline:hover { background: white; color: var(--ink); border-color: white; }

        .section { padding: 105px 0; }
        .section-heading { text-align: center; max-width: 650px; margin: 0 auto 46px; }
        .section-heading h2, .about-copy h2, .contact-copy h2 {
          font-family: var(--serif);
          font-size: clamp(34px, 4vw, 49px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -.8px;
          margin-bottom: 16px;
        }
        .section-heading p { color: var(--muted); line-height: 1.8; font-size: 14px; }

        .catalog-tools { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 30px; flex-wrap: wrap; }
        .filters { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
        .filter {
          border: 1px solid var(--line);
          background: transparent;
          padding: 10px 17px;
          color: #66635b;
          font-size: 12px;
          transition: .2s;
        }
        .filter.active, .filter:hover { background: var(--ink); border-color: var(--ink); color: white; }
        .tools-right { display: flex; gap: 10px; align-items: center; }
        .search-box { display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #ccc7bd; padding: 8px 0; }
        .search-box input { border: 0; outline: 0; background: transparent; width: 155px; font-size: 12px; color: var(--ink); }
        .sort-select { border: 0; background: transparent; outline: 0; color: var(--muted); font-size: 12px; padding: 8px; }

        .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 34px 22px; }
        .product-card { min-width: 0; }
        .product-image-wrap { position: relative; overflow: hidden; background: #eeece6; aspect-ratio: 4/4.7; }
        .product-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .65s cubic-bezier(.2,.7,.2,1); }
        .product-card:hover .product-image { transform: scale(1.055); }
        .product-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255,255,255,.92);
          padding: 7px 10px;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .favorite-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 35px;
          height: 35px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.9);
          display: grid;
          place-items: center;
          color: #4d4a44;
        }
        .favorite-btn.active { color: #a45b55; }
        .product-hover {
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 12px;
          opacity: 0;
          transform: translateY(8px);
          transition: .25s;
        }
        .product-card:hover .product-hover { opacity: 1; transform: translateY(0); }
        .product-hover button { width: 100%; border: 0; background: white; color: var(--ink); padding: 14px; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; }
        .product-info { padding: 17px 2px 0; }
        .product-info h3 { font-family: var(--serif); font-size: 19px; font-weight: 500; margin-bottom: 9px; }
        .product-prices { display: flex; align-items: center; gap: 10px; }
        .price { font-size: 13px; font-weight: 700; }
        .old-price { color: #a19d94; font-size: 11px; text-decoration: line-through; }
        .mobile-add { display: none; }
        .empty-state { grid-column: 1/-1; padding: 65px 20px; text-align: center; color: var(--muted); }

        .about-section { background: #eeece6; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-image { height: 550px; width: 100%; object-fit: cover; }
        .about-copy { max-width: 500px; }
        .about-copy p { color: #77736b; font-size: 14px; line-height: 2; margin-bottom: 28px; }
        .text-link { display: inline-flex; align-items: center; gap: 13px; color: var(--accent-dark); font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid var(--accent); padding-bottom: 9px; }

        .features-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 35px; }
        .feature { text-align: center; padding: 15px 10px; }
        .feature-icon { width: 58px; height: 58px; border: 1px solid #d7d0c5; border-radius: 50%; display: grid; place-items: center; margin: 0 auto 22px; color: var(--accent); }
        .feature h3 { font-family: var(--serif); font-size: 21px; font-weight: 500; margin-bottom: 10px; }
        .feature p { color: var(--muted); font-size: 12px; line-height: 1.8; max-width: 230px; margin: auto; }

        .reviews-section { background: #292820; color: white; }
        .reviews-section .section-heading p { color: #bdb9af; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .review { border: 1px solid rgba(255,255,255,.15); padding: 30px; }
        .stars { color: #d4b48e; letter-spacing: 4px; margin-bottom: 18px; font-size: 13px; }
        .review p { color: #d0cdc5; font-size: 13px; line-height: 1.9; min-height: 95px; }
        .review strong { font-size: 12px; font-weight: 600; }
        .review small { display: block; color: #aaa69c; margin-top: 6px; font-size: 10px; }

        .instagram-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        .instagram-grid img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: .35s; }
        .instagram-grid img:hover { opacity: .8; }

        .contact-section { background: #eeece6; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 90px; align-items: center; }
        .contact-copy p { color: var(--muted); font-size: 14px; line-height: 1.9; max-width: 420px; }
        .contact-detail { display: flex; align-items: center; gap: 13px; margin-top: 22px; font-size: 13px; color: #5c5952; }
        .contact-detail svg { color: var(--accent); }
        .contact-form { background: white; padding: 38px; }
        .contact-form input, .contact-form textarea {
          width: 100%;
          border: 0;
          border-bottom: 1px solid var(--line);
          padding: 15px 0;
          outline: 0;
          margin-bottom: 13px;
          resize: vertical;
          font-size: 12px;
          background: transparent;
        }
        .contact-form input:focus, .contact-form textarea:focus { border-color: var(--accent); }
        .contact-form .btn { width: 100%; margin-top: 12px; }
        .success-message { color: #557d5c; font-size: 12px; margin-top: 15px; }

        .footer { background: #22211d; color: white; padding: 65px 0 25px; }
        .footer-main { display: flex; justify-content: space-between; gap: 50px; padding-bottom: 50px; }
        .footer-brand { max-width: 300px; }
        .footer-brand .logo { display: inline-block; margin-bottom: 15px; }
        .footer-brand p { color: #aaa69d; font-size: 12px; line-height: 1.9; }
        .footer-links h4 { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 20px; }
        .footer-links button { display: block; background: none; border: 0; color: #aaa69d; padding: 0; margin: 12px 0; font-size: 12px; }
        .footer-links button:hover { color: white; }
        .footer-bottom { border-top: 1px solid #3b3933; padding-top: 22px; display: flex; justify-content: space-between; color: #89857c; font-size: 10px; }

        .overlay { position: fixed; inset: 0; background: rgba(20,19,16,.5); z-index: 50; display: flex; justify-content: flex-end; }
        .cart-panel { width: min(470px,100%); background: var(--bg); height: 100%; padding: 30px; display: flex; flex-direction: column; animation: slideIn .3s ease; }
        @keyframes slideIn { from { transform: translateX(40px); opacity: .5; } to { transform: translateX(0); opacity: 1; } }
        .panel-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 22px; border-bottom: 1px solid var(--line); }
        .panel-head h2 { font-family: var(--serif); font-weight: 500; font-size: 27px; margin: 0; }
        .cart-items { overflow-y: auto; flex: 1; padding: 15px 0; }
        .cart-item { display: grid; grid-template-columns: 85px 1fr auto; gap: 15px; padding: 15px 0; border-bottom: 1px solid var(--line); }
        .cart-item img { width: 85px; height: 100px; object-fit: cover; }
        .cart-item h4 { font-family: var(--serif); font-weight: 500; margin: 4px 0 8px; font-size: 16px; }
        .cart-item p { font-size: 11px; color: var(--muted); margin: 0; }
        .quantity { display: flex; align-items: center; gap: 12px; margin-top: 13px; }
        .quantity button { border: 1px solid var(--line); background: transparent; width: 25px; height: 25px; display: grid; place-items: center; }
        .quantity span { font-size: 12px; }
        .cart-item-remove { border: 0; background: transparent; color: #999; align-self: start; padding: 5px; }
        .cart-bottom { border-top: 1px solid var(--line); padding-top: 20px; }
        .total-row { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 20px; }
        .total-row strong { font-size: 16px; }
        .cart-bottom .btn { width: 100%; }
        .empty-cart { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: var(--muted); gap: 15px; }
        .empty-cart svg { color: #b8ad9d; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(20,19,16,.65); z-index: 60; display: grid; place-items: center; padding: 20px; }
        .product-modal { width: min(850px,100%); background: var(--bg); display: grid; grid-template-columns: 1fr 1fr; position: relative; max-height: 90vh; overflow: auto; }
        .product-modal img { width: 100%; height: 100%; min-height: 400px; object-fit: cover; }
        .modal-content { padding: 50px 35px; display: flex; flex-direction: column; justify-content: center; }
        .modal-content h2 { font-family: var(--serif); font-weight: 500; font-size: 32px; margin-bottom: 15px; }
        .modal-content p { color: var(--muted); font-size: 13px; line-height: 1.9; margin: 25px 0; }
        .modal-close { position: absolute; top: 13px; right: 13px; border: 0; background: white; width: 36px; height: 36px; display: grid; place-items: center; z-index: 2; }

        @media (max-width: 1000px) {
          .nav-links { gap: 18px; }
          .products-grid { grid-template-columns: repeat(3,1fr); }
          .about-grid, .contact-grid { gap: 45px; }
          .about-image { height: 460px; }
        }
        @media (max-width: 760px) {
          .container { width: min(100% - 36px, 600px); }
          .announcement { font-size: 9px; letter-spacing: 1px; }
          .nav { height: 70px; }
          .logo { font-size: 24px; }
          .mobile-toggle { display: grid; }
          .nav-links {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--bg);
            padding: 20px;
            border-bottom: 1px solid var(--line);
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .nav-links.open { display: flex; }
          .nav-links button { text-align: left; padding: 14px 5px; border-bottom: 1px solid var(--line); }
          .nav-actions { gap: 12px; }
          .hero { min-height: 600px; }
          .hero::after { background: linear-gradient(90deg,rgba(24,23,19,.75),rgba(24,23,19,.35)); }
          .hero-content { padding: 70px 0; }
          .hero h1 { font-size: clamp(39px, 10vw, 56px); }
          .section { padding: 75px 0; }
          .catalog-tools { align-items: flex-start; }
          .filters { width: 100%; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 7px; }
          .filter { white-space: nowrap; }
          .tools-right { width: 100%; justify-content: space-between; }
          .products-grid { grid-template-columns: repeat(2,1fr); gap: 28px 13px; }
          .product-info h3 { font-size: 16px; }
          .product-prices { flex-wrap: wrap; gap: 5px; }
          .product-hover { display: none; }
          .mobile-add { display: block; width: 100%; margin-top: 12px; background: transparent; border: 1px solid var(--line); padding: 10px; font-size: 9px; letter-spacing: .7px; text-transform: uppercase; }
          .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 35px; }
          .about-image { height: 370px; }
          .about-copy { order: -1; }
          .features-grid { grid-template-columns: repeat(2,1fr); gap: 28px 10px; }
          .reviews-grid { grid-template-columns: 1fr; }
          .review p { min-height: auto; }
          .instagram-grid { grid-template-columns: repeat(2,1fr); gap: 8px; }
          .footer-main { flex-wrap: wrap; gap: 35px; }
          .footer-brand { width: 100%; }
          .product-modal { grid-template-columns: 1fr; max-width: 480px; }
          .product-modal img { height: 280px; min-height: 0; }
          .modal-content { padding: 28px; }
        }
        @media (max-width: 420px) {
          .container { width: calc(100% - 28px); }
          .hero { min-height: 550px; }
          .hero h1 { font-size: 39px; }
          .products-grid { gap: 24px 10px; }
          .product-image-wrap { aspect-ratio: 4/4.9; }
          .product-info h3 { font-size: 15px; }
          .price { font-size: 11px; }
          .old-price { font-size: 10px; }
          .contact-form { padding: 25px 20px; }
          .footer-bottom { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <div className="announcement">
        ALOHA FURNITURE - YOUR HOME, YOUR STYLE
      </div>

      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            Aloha<span>.</span>
          </a>

          <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>{t.home}</button>
            <button onClick={() => scrollTo("catalog")}>{t.catalog}</button>
            <button onClick={() => scrollTo("about")}>{t.about}</button>
            <button onClick={() => scrollTo("contacts")}>{t.contacts}</button>
          </nav>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => scrollTo("catalog")}>
              <Icon name="search" />
            </button>
            <button
              className={`icon-btn ${showFavorites ? "active" : ""}`}
              aria-label="Favorites"
              onClick={() => {
                setShowFavorites(!showFavorites);
                scrollTo("catalog");
              }}
            >
              <Icon name="heart" />
              {favorites.length > 0 && <span className="count">{favorites.length}</span>}
            </button>
            <button className="icon-btn" aria-label="Cart" onClick={() => setCartOpen(true)}>
              <Icon name="bag" />
              {cartCount > 0 && <span className="count">{cartCount}</span>}
            </button>
            <button className="icon-btn mobile-toggle" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)}>
              <Icon name={mobileMenu ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="eyebrow">A NEW WAY TO FEEL AT HOME</div>
              <h1>{t.heroTitle}</h1>
              <p>{t.heroText}</p>
              <button className="btn btn-outline" onClick={() => scrollTo("catalog")}>
                {t.explore} <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="catalog">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">DESIGNED FOR LIVING</div>
              <h2>{showFavorites ? t.favorites : t.collection}</h2>
              <p>{t.collectionText}</p>
            </div>

            <div className="catalog-tools">
              <div className="filters">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter ${activeCategory === category.id ? "active" : ""}`}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowFavorites(false);
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <div className="tools-right">
                <div className="search-box">
                  <Icon name="search" size={17} />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={t.search}
                  />
                </div>
                <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label={t.sort}>
                  <option value="popular">{t.popular}</option>
                  <option value="cheap">{t.cheap}</option>
                  <option value="expensive">{t.expensive}</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {visibleProducts.length === 0 ? (
                <div className="empty-state">{t.noResults}</div>
              ) : (
                visibleProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                      {product.tag && <span className="product-tag">{product.tag}</span>}
                      <button
                        className={`favorite-btn ${favorites.includes(product.id) ? "active" : ""}`}
                        onClick={() => toggleFavorite(product.id)}
                        aria-label="Add to favorites"
                      >
                        <Icon name="heart" size={18} />
                      </button>
                      <div className="product-hover">
                        <button onClick={() => addToCart(product)}>{t.add}</button>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <div className="product-prices">
                        <span className="price">{money(product.price)}</span>
                        {product.oldPrice && <span className="old-price">{money(product.oldPrice)}</span>}
                      </div>
                      <button className="mobile-add" onClick={() => addToCart(product)}>{t.add}</button>
                      <button
                        className="text-link"
                        style={{ marginTop: 13, border: 0, background: "transparent", padding: 0 }}
                        onClick={() => setSelectedProduct(product)}
                      >
                        {t.details} <Icon name="arrow" size={14} />
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <img
              className="about-image"
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Modern living room"
              loading="lazy"
            />
            <div className="about-copy">
              <div className="eyebrow">THE ALOHA PHILOSOPHY</div>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutText}</p>
              <button className="text-link" onClick={() => scrollTo("catalog")}>
                {t.aboutButton} <Icon name="arrow" size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">THE DIFFERENCE IS IN DETAILS</div>
              <h2>{t.why}</h2>
              <p>{t.whyText}</p>
            </div>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon"><Icon name="check" size={25} /></div>
                <h3>{t.quality}</h3>
                <p>{t.qualityText}</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><Icon name="heart" size={25} /></div>
                <h3>{t.design}</h3>
                <p>{t.designText}</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><Icon name="phone" size={25} /></div>
                <h3>{t.service}</h3>
                <p>{t.serviceText}</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><Icon name="bag" size={25} /></div>
                <h3>{t.delivery}</h3>
                <p>{t.deliveryText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews-section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">KIND WORDS</div>
              <h2>{t.reviews}</h2>
              <p>{t.reviewText}</p>
            </div>
            <div className="reviews-grid">
              {[
                {
                  text: "\u041E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0441\u044F \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C. \u041C\u0435\u0431\u0435\u043B\u044C \u043E\u0442\u043B\u0438\u0447\u043D\u043E \u0432\u043F\u0438\u0441\u0430\u043B\u0430\u0441\u044C \u0432 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440.",
                  name: "\u0410\u0437\u0438\u0437\u0430 \u041C.",
                  role: "\u041A\u043B\u0438\u0435\u043D\u0442"
                },
                {
                  text: "\u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u0432\u044B\u0431\u043E\u0440 \u0438 \u043E\u0447\u0435\u043D\u044C \u0441\u0442\u0438\u043B\u044C\u043D\u044B\u0435 \u043C\u043E\u0434\u0435\u043B\u0438. \u041F\u043E\u043C\u043E\u0433\u043B\u0438 \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043B\u044F \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439.",
                  name: "\u041C\u0430\u0434\u0438\u043D\u0430 \u0420.",
                  role: "\u041A\u043B\u0438\u0435\u043D\u0442"
                },
                {
                  text: "\u041F\u0440\u0438\u044F\u0442\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C. \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u0438\u0441\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0446\u0432\u0435\u0442\u0430.",
                  name: "\u0414\u0430\u0432\u0440\u043E\u043D \u0410.",
                  role: "\u041A\u043B\u0438\u0435\u043D\u0442"
                }
              ].map((review, index) => (
                <div className="review" key={index}>
                  <div className="stars">*****</div>
                  <p>{review.text}</p>
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">FOLLOW OUR JOURNEY</div>
              <h2>{t.instagram}</h2>
              <p>INSPIRATION FOR YOUR EVERYDAY SPACE</p>
            </div>
            <div className="instagram-grid">
              {[
                "photo-1600210492486-724fe5c67fb0",
                "photo-1600607687939-ce8a6c25118c",
                "photo-1600566753086-00f18fb6b3ea",
                "photo-1600607687920-4e2a09cf159d"
              ].map((photo) => (
                <img
                  key={photo}
                  src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=600&q=80`}
                  alt="Furniture inspiration"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contacts">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">LET'S TALK</div>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-detail">
                <Icon name="pin" />
                <span>Tashkent, Uzbekistan</span>
              </div>
              <div className="contact-detail">
                <Icon name="phone" />
                <span>Contact details - add your phone number</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <input name="name" placeholder={t.name} required />
              <input name="phone" type="tel" placeholder={t.phone} required />
              <textarea name="message" rows="4" placeholder={t.message} />
              <button type="submit" className="btn">{t.send} <Icon name="arrow" size={15} /></button>
              {formSent && <div className="success-message">{t.success}</div>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="logo">Aloha<span>.</span></a>
              <p>{t.footerText}</p>
            </div>
            <div className="footer-links">
              <h4>{t.navigation || "NAVIGATION"}</h4>
              <button onClick={() => scrollTo("home")}>{t.home}</button>
              <button onClick={() => scrollTo("catalog")}>{t.catalog}</button>
              <button onClick={() => scrollTo("about")}>{t.about}</button>
              <button onClick={() => scrollTo("contacts")}>{t.contacts}</button>
            </div>
            <div className="footer-links">
              <h4>CONTACT</h4>
              <button onClick={() => scrollTo("contacts")}>Tashkent, Uzbekistan</button>
              <button onClick={() => scrollTo("contacts")}>Contact details</button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Aloha Furniture. All rights reserved.</span>
            <span>DESIGNED FOR YOUR HOME</span>
          </div>
        </div>
      </footer>

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="panel-head">
              <h2>{t.cart} ({cartCount})</h2>
              <button className="icon-btn" onClick={() => setCartOpen(false)} aria-label="Close">
                <Icon name="close" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <Icon name="bag" size={42} />
                <p>{t.empty}</p>
                <button className="text-link" onClick={() => { setCartOpen(false); scrollTo("catalog"); }}>
                  {t.explore} <Icon name="arrow" size={14} />
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{money(item.price)}</p>
                        <div className="quantity">
                          <button onClick={() => changeQuantity(item.id, -1)}><Icon name="minus" size={13} /></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => changeQuantity(item.id, 1)}><Icon name="plus" size={13} /></button>
                        </div>
                      </div>
                      <button className="cart-item-remove" onClick={() => setCart((current) => current.filter((p) => p.id !== item.id))}>
                        <Icon name="trash" size={17} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-bottom">
                  <div className="total-row">
                    <span>{t.total}</span>
                    <strong>{money(cartTotal)}</strong>
                  </div>
                  <button
                    className="btn"
                    onClick={() => {
                      setCartOpen(false);
                      scrollTo("contacts");
                    }}
                  >
                    {t.checkout} <Icon name="arrow" size={15} />
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close">
              <Icon name="close" />
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <div className="modal-content">
              <div className="eyebrow">ALOHA COLLECTION</div>
              <h2>{selectedProduct.name}</h2>
              <div className="price">{money(selectedProduct.price)}</div>
              <p>{selectedProduct.description}</p>
              <button className="btn" onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}>
                {t.add} <Icon name="arrow" size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
