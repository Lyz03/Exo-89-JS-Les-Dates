const timestamp = document.getElementById('timestamp');
const  localeDate = document.getElementById('localDate');
const localeTime = document.getElementById('localTime');

timestamp.innerText = Date.now().toString();
localeDate.innerText = new Date().toLocaleDateString();
localeTime.innerText = new Date().toLocaleTimeString();

let today = new Date();
let todayPlus2 = new Date();

todayPlus2 = todayPlus2.setDate(today.getDate() + 2)
todayPlus2 = todayPlus2.setDate(today.getDate() + 6)