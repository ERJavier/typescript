(()=>{
  const login = (data: {email:string, password:number}) => {
    console.log(data.email, data.password);
  }
  // login('javi@javi.co', '234434');
  login({
    email: 'javi@javi.co',
    password: 234434
  });

  type Size = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  }) =>{
    products.push(data);
  }

  addProduct({
    title: 'prod1',
    createdAt: new Date(1992,2,3),
    stock: 12
  });
  console.log(products);
})();
