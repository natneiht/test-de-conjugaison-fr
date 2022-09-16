// export const apiUrl = "http://127.0.0.1:3000/verbe/";

export const toutPronoms = ["je", "tu", "il", "nous", "vous", "ils"];
export const pronomsList = {
  Indicatif: {
    Présent: toutPronoms,
    "Passé composé": toutPronoms,
    Imparfait: toutPronoms,
    "Plus-que-parfait": toutPronoms,
    "Passé simple": toutPronoms,
    "Passé antérieur": toutPronoms,
    "Futur simple": toutPronoms,
    "Futur antérieur": toutPronoms,
  },
  Subjonctif: {
    Présent: toutPronoms,
    Passé: toutPronoms,
    Imparfait: toutPronoms,
    "Plus-que-parfait": toutPronoms,
  },
  Conditionnel: {
    Présent: toutPronoms,
    "Passé 1ère forme": toutPronoms,
    "Passé 2ème forme": toutPronoms,
  },
  Impératif: {
    Présent: ["tu", "nous", "vous"],
    Passé: ["tu", "nous", "vous"],
  },
  //   Participe: {
  //     Présent: ["tou"],
  //     Passé: ["feminin", "masculin"],
  //   },
};

export const verbWithEtre = [
  "aller",
  "arriver",
  "deveir",
  "entrer",
  "mourir",
  "naître",
  "partir",
  "rester",
  "refourner",
  "revenir",
  "tomber",
  "venir",
  "descendre",
  "monter",
  "passer",
  "rentrer",
  "sortir",
];

export const composeTemps = {
  Indicatif: [
    "Passé composé",
    "Plus-que-parfait",
    "Passé antérieur",
    "Futur antérieur",
  ],
  Subjonctif: ["Passé", "Plus-que-parfait"],
  Conditionnel: ["Passé 1ère forme", "Passé 2ème forme"],
};
export const auxConjugaison = {
  être: {
    Conditionnel: {
      "Passé 1ère forme": ["été", "été", "été", "été", "été", "été"],
      "Passé 2ème forme": ["été", "été", "été", "été", "été", "été"],
      Présent: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
    },
    Impératif: {
      Passé: ["été", "été", "été"],
      Présent: ["sois", "soyons", "soyez"],
    },
    Indicatif: {
      "Futur antérieur": ["été", "été", "été", "été", "été", "été"],
      "Futur simple": ["serai", "seras", "sera", "serons", "serez", "seront"],
      Imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
      "Passé antérieur": ["été", "été", "été", "été", "été", "été"],
      "Passé composé": ["été", "été", "été", "été", "été", "été"],
      "Passé simple": ["fus", "fus", "fut", "fûmes", "fûtes", "furent"],
      "Plus-que-parfait": ["été", "été", "été", "été", "été", "été"],
      Présent: ["suis", "es", "est", "sommes", "êtes", "sont"],
    },
    Infinitif: {
      Passé: ["été"],
      Présent: ["être"],
    },
    Participe: {
      Passé: ["été", "été"],
      Présent: ["étant"],
    },
    Subjonctif: {
      Imparfait: ["fusse", "fusses", "fût", "fussions", "fussiez", "fussent"],
      Passé: ["été", "été", "été", "été", "été", "été"],
      "Plus-que-parfait": ["été", "été", "été", "été", "été", "été"],
      Présent: ["sois", "sois", "soit", "soyons", "soyez", "soient"],
    },
  },
  avoir: {
    Conditionnel: {
      "Passé 1ère forme": ["eu", "eu", "eu", "eu", "eu", "eu"],
      "Passé 2ème forme": ["eu", "eu", "eu", "eu", "eu", "eu"],
      Présent: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
    },
    Impératif: {
      Passé: ["eu", "eu", "eu"],
      Présent: ["aie", "ayons", "ayez"],
    },
    Indicatif: {
      "Futur antérieur": ["eu", "eu", "eu", "eu", "eu", "eu"],
      "Futur simple": ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
      Imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
      "Passé antérieur": ["eu", "eu", "eu", "eu", "eu", "eu"],
      "Passé composé": ["eu", "eu", "eu", "eu", "eu", "eu"],
      "Passé simple": ["eus", "eus", "eut", "eûmes", "eûtes", "eurent"],
      "Plus-que-parfait": ["eu", "eu", "eu", "eu", "eu", "eu"],
      Présent: ["ai", "as", "a", "avons", "avez", "ont"],
    },
    Infinitif: {
      Passé: ["eu"],
      Présent: ["avoir"],
    },
    Participe: {
      Passé: ["eue", "eu"],
      Présent: ["ayant"],
    },
    Subjonctif: {
      Imparfait: ["eusse", "eusses", "eût", "eussions", "eussiez", "eussent"],
      Passé: ["eu", "eu", "eu", "eu", "eu", "eu"],
      "Plus-que-parfait": ["eu", "eu", "eu", "eu", "eu", "eu"],
      Présent: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
    },
  },
};

export const tempsOfAuxiliary = {
  Indicatif: {
    "Passé composé": { mode: "Indicatif", temps: "Présent" },
    "Plus-que-parfait": { mode: "Indicatif", temps: "Imparfait" },
    "Passé antérieur": { mode: "Indicatif", temps: "Passé simple" },
    "Futur antérieur": { mode: "Indicatif", temps: "Futur simple" },
  },
  Subjonctif: {
    Passé: { mode: "Subjonctif", temps: "Présent" },
    "Plus-que-parfait": { mode: "Subjonctif", temps: "Imparfait" },
  },
  Conditionnel: {
    "Passé 1ère forme": { mode: "Conditionnel", temps: "Présent" },
    "Passé 2ème forme": { mode: "Subjonctif", temps: "Imparfait" },
  },
};

// Template
export const tempsSelectedTemplate = {
  Indicatif: {
    Présent: true,
    "Passé composé": true,
    Imparfait: true,
    "Plus-que-parfait": true,
    "Passé simple": false,
    "Passé antérieur": false,
    "Futur simple": true,
    "Futur antérieur": false,
  },
  Subjonctif: {
    Présent: true,
    Passé: false,
    Imparfait: false,
    "Plus-que-parfait": false,
  },
  Conditionnel: {
    Présent: true,
    "Passé 1ère forme": false,
    "Passé 2ème forme": false,
  },
  Impératif: {
    Présent: true,
    Passé: false,
  },
};
