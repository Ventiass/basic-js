const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
	let res = '';
	let current = str[0]; 
	let count = 0;
	
  str.split('').forEach((el, i) => {
		if (el !== current) {
			res = count === 1 ?  res+ current : res + count + current;
			count = 1;
			current = el;
		} else {
			count++;
		}
	})
	res = count === 1 ?  res+ current : res + count + current
	return res;

}

module.exports = {
  encodeLine
};
