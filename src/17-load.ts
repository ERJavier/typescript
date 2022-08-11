import _ from 'lodash';

const data = [
  {
    usename: 'javi',
    role: 'admin'
  },
  {
    username: 'val',
    role: 'seller'
  },
  {
    username: 'santi',
    role: 'customer'
  },
  {
    username: 'maro',
    role: 'seller'
  }
];

const rta = _.groupBy(data, (item)=> item.role);
console.log(rta);


