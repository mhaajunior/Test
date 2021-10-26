const displayName = (firstName, lastName) => {
  if (typeof firstName == 'string' && typeof lastName == 'string') {
    if (firstName == 'Shippop') {
      console.log('Best Online Shipping Platform');
    } else {
      console.log(`Hello Shippop, My name is ${firstName} ${lastName}`);
    }
  }
};
