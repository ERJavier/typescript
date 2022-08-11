(()=> {
  type Size = 'S' | 'M' | 'L' | 'XL';

  function createProductoToJson(
    title: String,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductoToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

// Arrow

  const createProductoToJson2 = (
    title: String,
    createdAt: Date,
    stock: number,
    size?: Size

  ) => {
    return{
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto2 = createProductoToJson2('P1', new Date(), 12 );
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);

})();
