/**
 * @arg {string} base - bem block or block__element
 * @arg {Array} mod - array of bem modifiers
 * @arg {Array} mix - mixed classes
 */
const b = (base, mod = [], mix = []) => {
  let r = base;

  if (mod !== false && mod !== undefined) {
    if (!(mod instanceof Array)) mod = [mod];
    r += mod.reduce((row, item) => (item ? `${row} ${base}--${item}` : row), '');
  }

  if (mix !== false && mix !== undefined) {
    if (!(mix instanceof Array)) mix = [mix];
    r += mix.reduce((row, item) => `${row} ${item}`, '');
  }

  return r;
};

export default b;
