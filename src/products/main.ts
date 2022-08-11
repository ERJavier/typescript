import { addProduct, calcStock, products } from "./product.service";

  addProduct({
    title: 'prod1',
    createdAt: new Date(1992,2,3),
    stock: 12
  });

    addProduct({
    title: 'prod1',
    createdAt: new Date(1992,2,3),
    stock: 5,
    size: 'L'
  });

  console.log(products);
  const total = calcStock()
  console.log(total);
