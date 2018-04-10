import _ from 'lodash';

_.times(10, () => {
  const objectOne =  {
    ok: 'what',
    taco: 'asada'
  };

  const objectTwo =  {
    pizza: 'what',
    ok: 'nah',
    ...objectOne
  };

  console.log('suuup');
  console.log(objectTwo.ok);
  console.log(objectTwo.taco);
});
