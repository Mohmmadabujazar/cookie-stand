'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    name: 'seattle',
    minCust: 23,
    maxCust: 65,
    avCookieSale: 6.3,

    cookeiesPerHour: [],
    CustomerPerHour: [],
    totalAvg: 0,
    getAvg: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
            this.cookeiesPerHour.push(cookie1);
            this.totalAvg += cookie1;
            console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
        }
    },
    render: function () {
        const parentElement = document.getElementById('cookiesSalmon');
        const articalElement = document.createElement('artical')
        parentElement.appendChild(articalElement);

        const h2Elemant = document.createElement('h2');
        h2Elemant.textContent = this.name;
        articalElement.appendChild(h2Elemant);

        let ulElement = document.createElement('ul');
        articalElement.appendChild(ulElement)

        for (let i = 0; i < this.cookeiesPerHour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookeiesPerHour[i]}`;
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent= `Total : ${this.totalAvg}`;
    }
}

let tokyo = {
    name: 'tokyo',
    minCust: 3,
    maxCust: 24,
    avCookieSale: 1.2,

    cookeiesPerHour: [],
    CustomerPerHour: [],
    totalAvg: 0,
    getAvg: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
            this.cookeiesPerHour.push(cookie1);
            this.totalAvg += cookie1;
            console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
        }
    },
    render: function () {
        const parentElement = document.getElementById('cookiesSalmon');
        const articalElement = document.createElement('artical')
        parentElement.appendChild(articalElement);

        const h2Elemant = document.createElement('h2');
        h2Elemant.textContent = this.name;
        articalElement.appendChild(h2Elemant);

        let ulElement = document.createElement('ul');
        articalElement.appendChild(ulElement)

        for (let i = 0; i < this.cookeiesPerHour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookeiesPerHour[i]}`;
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent= `Total : ${this.totalAvg}`;
    }
}

let dubai = {
    name: 'dubai',
    minCust: 11,
    maxCust: 38,
    avCookieSale: 3.7,

    cookeiesPerHour: [],
    CustomerPerHour: [],
    totalAvg: 0,
    getAvg: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
            this.cookeiesPerHour.push(cookie1);
            this.totalAvg += cookie1;
            console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
        }
    },
    render: function () {
        const parentElement = document.getElementById('cookiesSalmon');
        const articalElement = document.createElement('artical')
        parentElement.appendChild(articalElement);

        const h2Elemant = document.createElement('h2');
        h2Elemant.textContent = this.name;
        articalElement.appendChild(h2Elemant);

        let ulElement = document.createElement('ul');
        articalElement.appendChild(ulElement)

        for (let i = 0; i < this.cookeiesPerHour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookeiesPerHour[i]}`;
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent= `Total : ${this.totalAvg}`;
    }
}


let paris = {
    name: 'paris',
    minCust: 20,
    maxCust: 38,
    avCookieSale: 2.3,


    cookeiesPerHour: [],
    CustomerPerHour: [],
    totalAvg: 0,
    getAvg: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
            this.cookeiesPerHour.push(cookie1);
            this.totalAvg += cookie1;
            console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
        }
    },
    render: function () {
        const parentElement = document.getElementById('cookiesSalmon');
        const articalElement = document.createElement('artical')
        parentElement.appendChild(articalElement);

        const h2Elemant = document.createElement('h2');
        h2Elemant.textContent = this.name;
        articalElement.appendChild(h2Elemant);

        let ulElement = document.createElement('ul');
        articalElement.appendChild(ulElement)

        for (let i = 0; i < this.cookeiesPerHour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookeiesPerHour[i]}`;
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent= `Total : ${this.totalAvg}`;
    }
}



let lima = {
    name: 'lima',
    minCust: 2,
    maxCust: 16,
    avCookieSale: 4.6,

    cookeiesPerHour: [],
    CustomerPerHour: [],
    totalAvg: 0,
    getAvg: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookie1 = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avCookieSale);
            this.cookeiesPerHour.push(cookie1);
            this.totalAvg += cookie1;
            console.log(`${hours[i]} : ${this.cookeiesPerHour[i]}`);
        }
    },
    render: function () {
        const parentElement = document.getElementById('cookiesSalmon');
        const articalElement = document.createElement('artical')
        parentElement.appendChild(articalElement);

        const h2Elemant = document.createElement('h2');
        h2Elemant.textContent = this.name;
        articalElement.appendChild(h2Elemant);

        let ulElement = document.createElement('ul');
        articalElement.appendChild(ulElement)

        for (let i = 0; i < this.cookeiesPerHour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]} : ${this.cookeiesPerHour[i]}`;
        }
        let liTotal = document.createElement('li');
        ulElement.appendChild(liTotal);
        liTotal.textContent= `Total : ${this.totalAvg}`;
    }
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


seattle.getAvg();
seattle.render();

tokyo.getAvg();
tokyo.render();

dubai.getAvg();
dubai.render();

paris.getAvg();
paris.render();

lima.getAvg();
lima.render();