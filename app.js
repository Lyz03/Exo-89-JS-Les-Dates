const timestamp = document.getElementById('timestamp');
const  localeDate = document.getElementById('localDate');
const localeTime = document.getElementById('localTime');

timestamp.innerText = Date.now().toString();
localeDate.innerText = new Date().toLocaleDateString();
localeTime.innerText = new Date().toLocaleTimeString();

let today = new Date();
let todayPlus2 = new Date();
todayPlus2.setDate(today.getDate() + 2)
todayPlus2.setHours(today.getHours() + 6);

if (today < todayPlus2) {

    const difference = todayPlus2.getTime() - today.getTime();
    const seconds = Math.round(difference / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);

    const newDiv =  document.createElement('div');
    newDiv.innerText = 'Entre le jour un et le jour deux il y a environ :'+ '\n' +seconds+ 's, soit :' +' \n'
    +minutes+ 'min, soit :' + '\n' +hours+ 'h, soit :' + '\n' +days+ 'j.';
    document.body.appendChild(newDiv);
}