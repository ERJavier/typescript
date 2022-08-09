(()=>{
  let productPrice = 300;
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = () => {}
  // productTitle = 123

  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "yes";
  console.log('productDescription', productDescription);

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
  `;
  console.log('summary', summary);

})();
