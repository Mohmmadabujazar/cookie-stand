'use strict';
const parentElement = document.getElementById('cookiesSalmon');
let tablecookies = document.getElementById('tablecookies');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Salmon(name, minCust, maxCust, avCookieSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avCookieSale = avCookieSale;
    this.cookeiesPerHour = [];
    this.CustomerPerHour = [];
    this.totalAvg = 0;
    Salmon.allcity.push(this);
}
Salmon.allcity = [];
Salmon.prototype.getAvg = function () {
    for (let i = 0; i < hours.length; i++) {
        let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
        this.cookeiesPerHour.push(cookie1);
        this.totalAvg += cookie1;
        console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
    }
}
Salmon.prototype.render = function () {
   
    const tr3 = document.createElement('tr');
    tablecookies.appendChild(tr3);
    

    let td3 = document.createElement('td');
    tr3.appendChild(td3);
    td3.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let tcontent = document.createElement('td');
        tr3.appendChild(tcontent);
        tcontent.textContent = this.cookeiesPerHour[i];
    }
        let td4 = document.createElement('td');
        tr3.appendChild(td4);
        td4.textContent = this.totalAvg;

    
}
const articalElement = document.createElement('artical')
parentElement.appendChild(articalElement);

const h2Elemant = document.createElement('h2');
h2Elemant.textContent = this.name;
articalElement.appendChild(h2Elemant);

const tr1 = document.createElement('tr');
tablecookies.appendChild(tr1);


function heading() {
    let head = document.createElement('tr');
    tablecookies.appendChild(head);
    let thEle = document.createElement('th');
    head.appendChild(thEle);
    thEle.textContent = 'Location';

    for (let i = 0; i < hours.length; i++) {
        let thEle = document.createElement('th');
        head.appendChild(thEle);
        thEle.textContent = hours[i];
    }
    let th1Ele = document.createElement('th');
    head.appendChild(th1Ele);
    th1Ele.textContent = 'Total Daily Location';

}

function footr() {
    let trfoot = document.createElement('tr');
    tablecookies.appendChild(trfoot);
    let thEle = document.createElement('th');
    trfoot.appendChild(thEle);
    thEle.textContent = 'Total';
let totaloftotal=0;
    for (let i = 0; i < hours.length; i++) {
        let thEle = document.createElement('th');
        let hourlyTotal = 0 ;
        for(let j=0; j<Salmon.allcity.length;j++){
            hourlyTotal +=Salmon.allcity[j].cookeiesPerHour[i];
            totaloftotal +=Salmon.allcity[j].cookeiesPerHour[i];
        }
        thEle.textContent=hourlyTotal;
        trfoot.appendChild(thEle);
    }
    
    let th1Ele = document.createElement('th');
    trfoot.appendChild(th1Ele);
    th1Ele.textContent = totaloftotal;


}
// new Salmon('Seattle', 23, 65, 6.3);
// new Salmon('Tokyo', 3, 24, 1.2);
// new Salmon('Dubai', 11,38, 3.7);
// new Salmon('Paris', 20, 38, 2.3);
// // new Salmon('Lima', 2, 16, 4.6);
// function rendering (){
//     Salmon.allcity[i].rendering();
// }
// rendering();

let seattle = new Salmon('Seattle', 23, 65, 6.3);
let tokyo = new Salmon('Tokyo', 3, 24, 1.2);
let dubai = new Salmon('Dubai', 11, 38, 3.7);
let paris = new Salmon('Paris', 20, 38, 2.3);
let lima = new Salmon('Lima', 2, 16, 4.6);


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

heading();
seattle.getAvg();
seattle.render();
console.log(seattle);

tokyo.getAvg();
tokyo.render();
console.log(tokyo);

dubai.getAvg();
dubai.render();
console.log(dubai);

paris.getAvg();
paris.render();
console.log(paris);

lima.getAvg();
lima.render();
console.log(lima);



footr();


