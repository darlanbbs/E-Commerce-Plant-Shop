interface IProduct {
  id: number;
  tipo: string;
  nome: string;
  preco: number;
  imagem: string;

  id_type: number;
}

const productList: IProduct[] = [
  {
    id: 1,
    tipo: "Low",
    nome: "Cacti",
    preco: 3.99,
    imagem: "./products/low/cacto.png",

    id_type: 1,
  },
  {
    id: 2,
    tipo: "Low",
    nome: "Begonias",
    preco: 1.99,
    imagem: "./products/low/Begônio.png",

    id_type: 1,
  },
  {
    id: 3,
    tipo: "Low",
    nome: "Mini Ivies",
    preco: 2.49,
    imagem: "./products/low/Hera.png",

    id_type: 1,
  },
  {
    id: 4,
    tipo: "Low",
    nome: "Succulents",
    preco: 1.79,
    imagem: "./products/low/suculentas.png",

    id_type: 1,
  },
  {
    id: 5,
    tipo: "Low",
    nome: "Violets",
    preco: 4.99,
    imagem: "./products/low/violeta.png",

    id_type: 1,
  },
  {
    id: 6,
    tipo: "Medium",
    nome: "Fern",
    preco: 6.99,
    imagem: "./products/medium/fern.png",

    id_type: 2,
  },
  {
    id: 7,
    tipo: "Medium",
    nome: "Fruit Tree",
    preco: 8.49,
    imagem: "./products/medium/fruit_trees.png",

    id_type: 2,
  },
  {
    id: 8,
    tipo: "Medium",
    nome: "Monstera",
    preco: 7.99,
    imagem: "./products/medium/monstera.png",

    id_type: 2,
  },
  {
    id: 9,
    tipo: "Medium",
    nome: "Bird of Paradise",
    preco: 5.99,
    imagem: "./products/medium/birdParadise.png",

    id_type: 2,
  },
  {
    id: 10,
    tipo: "Medium",
    nome: "Dracena",
    preco: 9.99,
    imagem: "./products/medium/dracena.png",

    id_type: 2,
  },
  {
    id: 11,
    tipo: "Medium",
    nome: "Philodendron",
    preco: 12.49,
    imagem: "./products/medium/Philodendron.png",

    id_type: 2,
  },
  {
    id: 12,
    tipo: "High",
    nome: "Palm Tree ",
    preco: 3.29,
    imagem: "./products/high/palmtrees.png",

    id_type: 3,
  },
  {
    id: 13,
    tipo: "High",
    nome: "Christmas Tree",
    preco: 15.5,
    imagem: "./products/high/Christmastrees.png",

    id_type: 3,
  },
  {
    id: 14,
    tipo: "High",
    nome: "Cypress Tree",
    preco: 5.99,
    imagem: "./products/high/CypressTrees.png",

    id_type: 3,
  },
  {
    id: 15,
    tipo: "High",
    nome: "Fiddle Leaf Fig Trees",
    preco: 10.99,
    imagem: "./products/high/FiddleLeafFigTrees.png",

    id_type: 3,
  },
  {
    id: 16,
    tipo: "High",
    nome: "Bambu",
    preco: 2.5,
    imagem: "./products/high/bambu.png",

    id_type: 3,
  },
  {
    id: 17,
    tipo: "High",
    nome: "Ficus",
    preco: 8.79,
    imagem: "./products/high/ficus.png",

    id_type: 3,
  },
  {
    id: 18,
    tipo: "High",
    nome: "Banana Tree",
    preco: 9.52,
    imagem: "./products/high/bananaTree.png",

    id_type: 3,
  },
  {
    id: 19,
    tipo: "High",
    nome: "Rubber Tree",
    preco: 10.32,
    imagem: "./products/high/rubberTree.png",

    id_type: 3,
  },
];

export default productList;
