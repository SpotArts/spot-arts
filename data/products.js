export const products = [
  {
    slug: "petits-tatouages-10",
    name: "Petits tatouages — Pack 10 pièces",
    category: "Petits tatouages",
    price: 3000,
    oldPrice: null,
    image: "/produits/petits-tatouages.jpg",
    description: "Pack de 10 petits tatouages temporaires, faciles à appliquer."
  },
  {
    slug: "petits-tatouages-30",
    name: "Petits tatouages — Pack 30 pièces",
    category: "Petits tatouages",
    price: 6000,
    oldPrice: null,
    image: "/produits/petits-tatouages.jpg",
    description: "Pack de 30 petits tatouages temporaires, faciles à appliquer."
  },
  {
    slug: "petits-tatouages-60",
    name: "Petits tatouages — Pack 60 pièces",
    category: "Petits tatouages",
    price: 10000,
    oldPrice: null,
    image: "/produits/petits-tatouages.jpg",
    description: "Pack de 60 petits tatouages temporaires, faciles à appliquer."
  },
  {
    slug: "semi-permanent-20",
    name: "Tatouages semi-permanents — Pack 20 pièces",
    category: "Tatouages semi-permanents",
    price: 6000,
    oldPrice: null,
    image: "/produits/semi-permanent.jpg",
    description: "Pack de 20 tatouages semi-permanents, tenue longue durée."
  },
  {
    slug: "semi-permanent-30",
    name: "Tatouages semi-permanents — Pack 30 pièces",
    category: "Tatouages semi-permanents",
    price: 8000,
    oldPrice: null,
    image: "/produits/semi-permanent.jpg",
    description: "Pack de 30 tatouages semi-permanents, tenue longue durée."
  },
  {
    slug: "semi-permanent-50",
    name: "Tatouages semi-permanents — Pack 50 pièces",
    category: "Tatouages semi-permanents",
    price: 12000,
    oldPrice: null,
    image: "/produits/semi-permanent.jpg",
    description: "Pack de 50 tatouages semi-permanents, tenue longue durée."
  }
];

export function formatPrice(amount) {
  return amount.toLocaleString("fr-FR").replace(/,/g, " ") + " FCFA";
}
