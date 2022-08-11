(()=>{
  let UserName:number | string ;
  UserName = 2122;
  UserName ='nuevol';


  function greeting(myText: string | number){
    if (typeof myText === 'string'){
    myText
    console.log(`string ${myText.toLowerCase()}`);
  } else {
    console.log(`number ${myText.toFixed(1)}`);
  }
  }

  greeting('newgo');
  greeting(23232);


})();
