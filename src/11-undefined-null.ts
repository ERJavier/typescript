(()=>{
  // let myNumber: number;
  // let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;
  myNull = null;

  let myNumber: number | null = null; //
  myNumber = 244;

  let myString: string | undefined = undefined;
  myString = 'yes';

  function hi(name: string | null){
    let hello = 'Hola ';
    if (name){
      hello += name;
    }else {
      hello += 'nobody';
    }
    console.log(hello);
  }

    function hi2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }


  hi('javi');
  hi(null);

  hi2('javi');
  hi2(null);
})()
