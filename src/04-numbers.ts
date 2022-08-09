(()=> {
  let productPrice = 100;
  productPrice = 23;

  console.log('productPrice', productPrice);

  let customerAge: number = 22;
  customerAge = customerAge + 1;
    //customerAge = customerAge + '1' // 221
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discont = parseInt('123')
  console.log('discont', discont);
  if (discont <= 200){
    console.log('apply')
  }else {
    console.log('not apply')
  }


  let hex = 0xfff;
  console.log('hex', hex)
  let bin = 0b1010;
  console.log('bin', bin);
})();
