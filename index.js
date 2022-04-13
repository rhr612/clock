const hour = document.getElementById('hr');
const mnt = document.getElementById('mn');
const scnd = document.getElementById('sc');

setInterval(() => {
let date = new Date();
let hr =date.getHours()*30;
let mn =date.getMinutes()*6;
let sc =date.getSeconds()*6;

hour.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
mnt.style.transform = `rotateZ(${mn}deg)`;
scnd.style.transform = `rotateZ(${sc}deg)`;
    
});

const hourA = document.getElementById('hrA');
const mntA = document.getElementById('mnA');
const scndA = document.getElementById('scA');

setInterval(() => {
let date = new Date();
let hrA =date.getHours()*30;
let mnA =date.getMinutes()*6;
let scA =date.getSeconds()*6;

hourA.style.transform = `rotateZ(${(hrA) + (mnA/12)}deg)`;
mntA.style.transform = `rotateZ(${mnA}deg)`;
scndA.style.transform = `rotatez(${scA}deg)`;
    
});


