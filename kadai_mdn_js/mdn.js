const today = new Date();
const year = today.getFullYear();

const xmas = new Date();
const month = xmas.getMonth();
const todayMonth = month + 1;

const xmas01 = new Date();
const day = xmas01.getDate();

console.log(year + '年' + todayMonth+ '月' + day + '日');