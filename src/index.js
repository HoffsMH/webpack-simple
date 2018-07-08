import _ from 'lodash';

_.times(10, () => {
  const objectOne = {
    ok: 'what',
    monkey: 'banana',
  };

  const objectTwo = {
    pizza: 'what',
    ok: 'nah',
    ...objectOne,
  };

  console.log('suuup');
  console.log(objectTwo.ok);
  console.log(objectTwo.taco);
});
