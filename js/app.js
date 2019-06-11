'use strict';

//firstLocation
var time=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];



var firstLocation = {
  name: '1st and Pike',
  minGuest: 23,
  maxGuest: 65,
  avgCookies: 6.3,
  cookiesNum:[],
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('firstPlace');
    console.log(cookiesElement);
    var cookiesNum2 = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor(Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies;
      cookiesNum2[i]=newCookie;
      console.log(cookiesNum2);
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesNum2[i]} cookies`;
      console.log(newItem);
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesNum2[i]);
      
    }
    this.cookiesNum = cookiesNum2;
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
firstLocation.addCookies();
console.log(firstLocation.cookiesNum);

//secondLocation

var time2=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];



var secondLocation = {
  name: 'SeaTac Airport',
  minGuest: 3,
  maxGuest: 24,
  avgCookies: 1.2,
  cookiesNum:[],
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('secondPlace');
    console.log(cookiesElement);
    var cookiesNum2 = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor(Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies;
      cookiesNum2[i]=newCookie;
      console.log(cookiesNum2);
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesNum2[i]} cookies`;
      console.log(newItem);
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesNum2[i]);
      
    }
    this.cookiesNum = cookiesNum2;
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
secondLocation.addCookies();
console.log(secondLocation.cookiesNum);


//thirdLocation

var time3=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];



var thirdLocation = {
  name: 'Seattle Center',
  minGuest: 11,
  maxGuest: 38,
  avgCookies: 3.7,
  cookiesNum:[],
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('thirdPlace');
    console.log(cookiesElement);
    var cookiesNum2 = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor(Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies;
      cookiesNum2[i]=newCookie;
      console.log(cookiesNum2);
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesNum2[i]} cookies`;
      console.log(newItem);
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesNum2[i]);
      
    }
    this.cookiesNum = cookiesNum2;
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
thirdLocation.addCookies();
console.log(thirdLocation.cookiesNum);



//fourthLocation

var time4=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];



var fourthLocation = {
  name: 'Capitol Hill',
  minGuest: 20,
  maxGuest: 38,
  avgCookies: 2.3,
  cookiesNum:[],
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('fourthPlace');
    console.log(cookiesElement);
    var cookiesNum2 = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor(Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies;
      cookiesNum2[i]=newCookie;
      console.log(cookiesNum2);
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesNum2[i]} cookies`;
      console.log(newItem);
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesNum2[i]);
      
    }
    this.cookiesNum = cookiesNum2;
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
fourthLocation.addCookies();
console.log(fourthLocation.cookiesNum);

//fifthLocation

var time5=['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];



var fifthLocation = {
  name: 'Alki',
  minGuest: 2,
  maxGuest: 16,
  avgCookies: 4.6,
  cookiesNum:[],
  totalCookies: 0,
  addCookies: function (){
    var cookiesElement = document.getElementById('fifthPlace');
    console.log(cookiesElement);
    var cookiesNum2 = [];
    for(var i = 0; i<time.length;i++){
      var newCookie = Math.floor(Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies;
      cookiesNum2[i]=newCookie;
      console.log(cookiesNum2);
      var newItem = document.createElement('li');
      newItem.textContent = `${time[i]}: ${cookiesNum2[i]} cookies`;
      console.log(newItem);
      cookiesElement.appendChild(newItem);
      this.totalCookies += Math.floor(cookiesNum2[i]);
      
    }
    this.cookiesNum = cookiesNum2;
    var newItem2 = document.createElement('li');
    newItem2.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesElement.appendChild(newItem2);

  }

};
fifthLocation.addCookies();
console.log(fifthLocation.cookiesNum);

