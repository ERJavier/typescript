(()=>{
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Product ={
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }

  const products: Product[] = [];

  const addProduct = (data: Product) =>{
    products.push(data);
  }

  addProduct({
    title: 'prod1',
    createdAt: new Date(1992,2,3),
    stock: 12
  });

  console.log(products);
  products.push({
    title: 'prod3',
    createdAt: new Date,
    stock: 30,
    size: 'L'
  })
})();
