const ages = [12, 13, 14, 15, 16];
const ages2 = [17, 20, 21];
const ages3 = [31, 32, 40];
const allages = [...ages, ...ages2, ...ages3];
console.log(allages);
const business = 567;
const minister = 568;
const shochib = 569;
const nums = [34, 54, 67, 234];
const maximum = Math.max(...nums);
const maximum = Math.max(business, minister, shochib);
console.log(maximum);
