(()=>{
  type UserID = string | number | boolean;

  let userId: UserID;

  function greeting(userId: UserID){
  if (typeof userId === 'string'){

  console.log(`string ${userId.toLowerCase()}`);
}
}

  // Literal Types

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting2(userId: UserID, size: Sizes){
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting2(111, 'XL');
  greeting2('new', 'M');
})()
