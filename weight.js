const str = 'Jhyxtyr';
const calculateWeight = (str = '') => {
   str = str.toLowerCase();
   const legend = 'abcdefghijklmnopqrstuvwxyz';
   let weight = 0;
   const { length: l } = str;
   for(let i = 0; i < l; i++){
      const el = str[i];
      const curr = legend.indexOf(el);
      weight += (curr + 1);
   };
   return weight;
};
console.log(`Jhyxtyr Weight in lbs is ${calculateWeight(str)} `);