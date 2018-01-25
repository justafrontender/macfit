const b = (base, mod = [], mix = []) => {
  let r = base;

  if (mod !== false && mod !== undefined) {
    if (!(mod instanceof Array)) mod = [mod];
    r += mod.reduce((row, item) => `${row} ${base}--${item}`, '');
  }

  if (mix !== false && mix !== undefined) {
    if (!(mix instanceof Array)) mix = [mix];
    r += mix.reduce((row, item) => `${row} ${item}`, '');
  }

  return r;
};

export default b;
