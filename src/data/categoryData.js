import classicBrownie from "../assets/classic-brownie.avif";
import fudgeBrownie from "../assets/fudge-brownie.avif";
import walnutBrownie from "../assets/walnut-brownie.avif";

import belgianBrownie from "../assets/belgian-brownie.avif";
import ferreroBrownie from "../assets/ferrero-brownie.jpg";
import redVelvetBrownie from "../assets/red-velvet-brownie.webp";

import biscoffBrownie from "../assets/biscoff-brownie.avif";
import kinderBrownie from "../assets/kinder-brownie.avif";

import oatsBrownie from "../assets/oats-brownie.avif";
import sugarFreeBrownie from "../assets/sugar-free-brownie.avif";

import luxuryChocolate from "../assets/luxury-chocolate.avif";
import goldBrownie from "../assets/gold-brownie.webp";

import classicBlondie from "../assets/classic-blondie.webp";
import whiteChocolateBlondie from "../assets/white-chocolate-blondie.avif";

import brownieCupcake from "../assets/brownie-cupcake.avif";
import fudgeCupcake from "../assets/fudge-cupcake.avif";

import miniClassicBox from "../assets/mini-classic-box.avif";
import miniFudgeBox from "../assets/mini-fudge-box.avif";

import chocolateCookieBrownie from "../assets/chocolate-cookie-brownie.avif";
import oreoCookieBrownie from "../assets/oreo-cookie-brownie.webp";


const categoryData = {

  basic: {
    title: "Basic Brownies",
    description:
      "Classic brownie flavors made for every chocolate lover.",

    products: [
      {
        id: 1,
        name: "Classic Brownie",
        price: "₹120",
        image: classicBrownie,
      },
      {
        id: 2,
        name: "Fudge Brownie",
        price: "₹140",
        image: fudgeBrownie,
      },
      {
        id: 3,
        name: "Walnut Brownie",
        price: "₹150",
        image: walnutBrownie,
      },
    ],
  },


  premium: {
    title: "Premium Brownies",
    description:
      "Rich and indulgent brownies crafted with premium ingredients.",

    products: [
      {
        id: 4,
        name: "Belgian Chocolate Brownie",
        price: "₹220",
        image: belgianBrownie,
      },
      {
        id: 5,
        name: "Ferrero Brownie",
        price: "₹250",
        image: ferreroBrownie,
      },
      {
        id: 6,
        name: "Red Velvet Brownie",
        price: "₹230",
        image: redVelvetBrownie,
      },
    ],
  },


  trending: {
    title: "Trending Brownies",
    description:
      "Discover the brownies everyone is loving right now.",

    products: [
      {
        id: 7,
        name: "Biscoff Brownie",
        price: "₹200",
        image: biscoffBrownie,
      },
      {
        id: 8,
        name: "Kinder Brownie",
        price: "₹220",
        image: kinderBrownie,
      },
    ],
  },


  healthy: {
    title: "Healthy Brownies",
    description:
      "A healthier way to enjoy your favorite chocolate treat.",

    products: [
      {
        id: 9,
        name: "Oats Brownie",
        price: "₹160",
        image: oatsBrownie,
      },
      {
        id: 10,
        name: "Sugar-Free Brownie",
        price: "₹180",
        image: sugarFreeBrownie,
      },
    ],
  },


  luxury: {
    title: "Luxury Brownies",
    description:
      "Elegant and premium brownies for special occasions.",

    products: [
      {
        id: 11,
        name: "Luxury Chocolate Brownie",
        price: "₹300",
        image: luxuryChocolate,
      },
      {
        id: 12,
        name: "Gold Brownie",
        price: "₹350",
        image: goldBrownie,
      },
    ],
  },


  "blondie-variety": {
    title: "Blondie Variety",
    description:
      "Golden blondies with delicious flavors.",

    products: [
      {
        id: 13,
        name: "Classic Blondie",
        price: "₹150",
        image: classicBlondie,
      },
      {
        id: 14,
        name: "White Chocolate Blondie",
        price: "₹180",
        image: whiteChocolateBlondie,
      },
    ],
  },


  "brownie-cupcakes": {
    title: "Brownie Cupcakes",
    description:
      "Brownie goodness in a delicious cupcake style.",

    products: [
      {
        id: 15,
        name: "Chocolate Brownie Cupcake",
        price: "₹100",
        image: brownieCupcake,
      },
      {
        id: 16,
        name: "Fudge Brownie Cupcake",
        price: "₹120",
        image: fudgeCupcake,
      },
    ],
  },


  "mini-box-brownies": {
    title: "Mini Box Brownies",
    description:
      "Small boxes packed with delicious brownie bites.",

    products: [
      {
        id: 17,
        name: "Mini Classic Box",
        price: "₹250",
        image: miniClassicBox,
      },
      {
        id: 18,
        name: "Mini Fudge Box",
        price: "₹280",
        image: miniFudgeBox,
      },
    ],
  },


  "cookie-brownies": {
    title: "Cookie Brownies",
    description:
      "The perfect combination of cookies and brownies.",

    products: [
      {
        id: 19,
        name: "Chocolate Cookie Brownie",
        price: "₹180",
        image: chocolateCookieBrownie,
      },
      {
        id: 20,
        name: "Oreo Cookie Brownie",
        price: "₹200",
        image: oreoCookieBrownie,
      },
    ],
  },

};

export default categoryData;