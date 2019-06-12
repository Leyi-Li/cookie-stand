'use strict';

var time=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];
//firstLocation

var firstLocation = {
  name: '1st and Pike',
  minGuest: 23,
  maxGuest: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('firstPlace');
    var cookiesSold = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies);
      cookiesSold[i]=newCookie;
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesSold[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesSold[i]);
    }
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
firstLocation.addCookies();

//secondLocation
var secondLocation = {
  name: 'SeaTac Airport',
  minGuest: 3,
  maxGuest: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('secondPlace');
    var cookiesSold = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest)* this.avgCookies) ;
      cookiesSold[i]=newCookie;
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesSold[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesSold[i]);
    }
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);
  }
};
secondLocation.addCookies();

//thirdLocation
var thirdLocation = {
  name: 'Seattle Center',
  minGuest: 11,
  maxGuest: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('thirdPlace');
    var cookiesSold = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies);
      cookiesSold[i]=newCookie;
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesSold[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesSold[i]);
    }
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
thirdLocation.addCookies();

//fourthLocation
var fourthLocation = {
  name: 'Capitol Hill',
  minGuest: 20,
  maxGuest: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('fourthPlace');
    var cookiesSold = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies);
      cookiesSold[i]=newCookie;
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesSold[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesSold[i]);
    }
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
fourthLocation.addCookies();

//fifthLocation
var fifthLocation = {
  name: 'Alki',
  minGuest: 2,
  maxGuest: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('fifthPlace');
    var cookiesSold = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies);
      cookiesSold[i]=newCookie;
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesSold[i]} cookies`;
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesSold[i]);

    }
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
fifthLocation.addCookies();


