console.log('util is running...');

export const square = (x) => x * x;

//exports -- single default export and as many named exports as you like

export const add = (a, b) => a + b;

//export default (a, b) => a - b;

export default (age) => age < 65;
//export { square, add, subtract as default }; //named exports. Not an object definition
