(()=>{

  let prices = [1,2,3,4,5,6,7, 'hola', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});

  prices.push(12);
  // prices = [1,2,2]

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(234);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,6,7,8,8,9];
  numbers.map(item => item * 2);
  

})();
