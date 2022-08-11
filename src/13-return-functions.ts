(()=>{
  const calcTotal = (prices:number[]):number =>{
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const printTotal = (prices:number[]):void => {
    const rta = calcTotal(prices);
    console.log(`Total is ${rta}`);
    // return rta;
  }

  const rta = calcTotal([1,2,3,4,5,6,7]);
  console.log(rta);
})()
