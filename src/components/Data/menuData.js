const menuData = {
  food: [
    {
      category: "OTSUMAMI & SMALL PLATES",
      items: [
        {
          name: "Misoshiru",
          description: "Classic white miso soup, tofu, spring onion",
          price: 4.99,
        },
        {
          name: "Moyashizuke",
          description: "Amasu pickled beansprouts",
          price: 3.99,
        },
        {
          name: "Kyurizuke",
          description: "Soy pickled cucumber, ginger, chilli, sesame",
          price: 5.99,
        },
        {
          name: "Horenso No Gomaae",
          description: "Wilted spinach salad, nutty sesame dressing",
          price: 4.99,
        },
        {
          name: "Agedashi Tofu",
          description: "Fried tofu, tempura sauce, spring onion",
          price: 4.99,
        },
        {
          name: "Nasu Dengaku",
          description: "Miso glazed aubergine, sesame, chilli, spring onion",
          price: 7.99,
        },
        {
          name: "Nikujaga",
          description: "Slow cooked pork belly stew, potatoes, carrots",
          price: 6.99,
        },
        {
          name: "Tsukune",
          description: "Tare coated chicken skewers, rich egg yolk",
          price: 7.99,
        },
        {
          name: "Tebasaki",
          description: "Savoury sweet glazed chicken wings, sesame",
          price: 7.99,
        },
        {
          name: "Negima Yakitor",
          description: "Chargrilled chicken & spring onion skewers, with tare",
          price: 6.99,
        },
      ],
    },

    {
      category: "Large Plates",
      items: [
        {
          name: "Chicken Katsu",
          description: "Panko chicken thigh, tonkatsu sauce, hispi cabbage",
          price: 14.99,
        },
        {
          name: "Tonkatsu Pork",
          description: "Panko pork loin, tonkatsu sauce, hispi cabbage",
          price: 13.99,
        },
        {
          name: "Niku Udon",
          description: "Sliced beef, udon noodles, rich savoury broth",
          price: 16.99,
        },
        {
          name: "Teppan Beef",
          description:
            "Sizzling beef striploin, mushrooms, beansprouts, yakiniku sauce",
          price: 15.99,
        },
        {
          name: "Unaju",
          description: "Glazed eel kabayaki , rice, sesame, unagi sauce",
          price: 22.99,
        },
      ],
    },

    {
      category: "Donburi - Rice Bowls",
      items: [
        {
          name: "Gyu-Don",
          description: "slow braised beef and chilli oi",
          price: 14.99,
        },
        {
          name: "Ten-Don",
          description: "1 prawn tempura and 3 vegetables",
          price: 13.99,
        },
        {
          name: "Neba-Neba-Don",
          description: "natto, pickled seaweed, pickledokra and onsen tamago",
          price: 16.99,
        },
        {
          name: "Curry-Don",
          description: "curry with soft boiled egg tempura",
          price: 15.99,
        },
        {
          name: "Kara-Age Don",
          description:
            "chicken kara-age, onsen tamago, negi-sauce and beetroot pickle",
          price: 22.99,
        },
      ],
    },
    {
      category: "Maki Rolls",
      items: [
        {
          name: "Avocado Roll",
          description: "lorem ipsum dolor sit amet.",
          price: 8.99,
        },
        {
          name: "Spicy Tuna Roll",
          description: "lorem ipsum dolor sit amet, consectetur.",
          price: 12.99,
        },
        {
          name: "Salmon Avocado Roll",
          description: "lorem ipsum dolor sit amet, consectetur.",
          price: 12.99,
        },
        {
          name: "Shrimp Tempura Roll",
          description: "lorem ipsum dolor sit amet, consectetur.",
          price: 11.99,
        },
      ],
    },
  ],

  desserts: [
    {
      category: "Ice Cream",
      items: [
        {
          name: "Matcha ice cream",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 3.99,
        },
        {
          name: "Mochi ice cream (1pc)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 6.99,
        },

        {
          name: "HOUSEMADE ICE CREAM & SORBET",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 5.99,
        },
      ],
    },
    {
      category: "Cakes",
      items: [
        {
          name: "MATCHA CHEESCAKE",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 7.99,
        },
        {
          name: "LIMONERO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 6.99,
        },
        {
          name: "SATA ANDAGI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 5.99,
        },
        {
          name: "CHOCOLATE BANANA CAKE",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 6.99,
        },
        {
          name: "ASSORTED MOCHI",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 7.99,
        },
      ],
    },
  ],
  beverages: [
    {
      category: "Sake (125ml)",
      items: [
        {
          name: "Hakkaisan Junmai Daiginjo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 10.99,
        },
        {
          name: "Dassai 23",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 9.99,
        },
        {
          name: "Fukukomachi Junmai",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 10.99,
        },
        {
          name: "Shirakabegura Kimoto Junmai",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 11.99,
        },
      ],
    },
    {
      category: "Fruit Infused Sake (100ml)",
      items: [
        {
          name: "Daiginjo Umeshu, Kodakara",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 11.99,
        },
        {
          name: "Yuzushu, Tsuji Honten",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 12.99,
        },

        {
          name: "Shirakabegura Kimoto Junmai",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 13.99,
        },
      ],
    },
    {
      category: "Shochu (50ml)",
      items: [
        {
          name: "Miyazato Harusame Kari (Awamori)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 11.99,
        },
        {
          name: "Ikkomon (Imo)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 9.99,
        },

        {
          name: "Shirashinken (Mugi)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 8.99,
        },
        {
          name: "Takara shiso shochu wakamurasaki no kimi",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          price: 8.99,
        },
      ],
    },
  ],
};

export default menuData;
