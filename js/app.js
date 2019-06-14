'use strict';

//basic infor
var time =['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

//function to create Location objects
// eslint-disable-next-line no-redeclare
function Location (name, minGuest, maxGuest, avgCookies){

  this.name = name;
  this.minGuest = minGuest;
  this.maxGuest = maxGuest;
  this.avgCookies = avgCookies;
  this.cookiesNumArr = [];
  this.totalCookiesAdd = 0;
  Location.listOfLocation.push(this);
  this.cookiesNum(time);
  this.totalCookies();
  this.render();


}
Location.listOfLocation=[];

//for each location , how many cookies are sold hourly
Location.prototype.cookiesNum = function(timeList){
  for (var i = 0; i < timeList.length; i++){
    var newCookie = Math.floor((Math.random()*(this.maxGuest-this.minGuest) + this.minGuest) * this.avgCookies);
    this.cookiesNumArr.push(newCookie);

  }

};
//for each location, how many cookies are sold per day.
Location.prototype.totalCookies = function(){
  for(var i = 0; i < this.cookiesNumArr.length; i++){
    this.totalCookiesAdd += this.cookiesNumArr[i];
  }
};

//function to create elements into the table
Location.prototype.render = function(){

  var tableBody = document.getElementById('cookiesTable');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  for(var i = 0; i < this.cookiesNumArr.length; i++){
    cell = document.createElement('td');
    cell.textContent = this.cookiesNumArr[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = this.totalCookiesAdd;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);

};

//function to create elements into the table header
function addHeader(){
  var tableHeader = document.getElementById('tHeader');
  var tableHead = document.createElement('tr');
  var cell = document.createElement('th');
  cell.textContent = '';
  tableHead.appendChild(cell);
  for (var i = 0; i < time.length; i++){
    cell = document.createElement('th');
    cell.textContent = time[i];
    tableHead.appendChild(cell);
  }
  cell = document.createElement('th');
  cell.textContent = 'Total';
  tableHead.appendChild(cell);
  tableHeader.appendChild(tableHead);
}
var totalCookiesH = 0;
var totalCookiesHArr=[];
//for all the locations, how many cookies are sold hourly.
function totalCookiesHrly(){
  totalCookiesHArr = [];

  for(var y=0; y < time.length; y++){
    totalCookiesH = 0;
    for(var x=0; x < Location.listOfLocation.length; x++){
      totalCookiesH += Location.listOfLocation[x].cookiesNumArr[y];
    }
    totalCookiesHArr.push(totalCookiesH);
  }
}

//function to add footers into the table
function addFooter(){
  var tableFooter = document.getElementById('tFooter');
  var tableFoot =document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = 'total';
  tableFoot.appendChild(cell);
  for(var i=0; i < time.length; i++ ){
    cell= document.createElement('td');
    cell.textContent = totalCookiesHArr[i];
    tableFoot.appendChild(cell);
  }
  var total=0;
  for(var x=0; x<Location.listOfLocation.length;x++){

    total += Location.listOfLocation[x].totalCookiesAdd;
    console.log(Location.listOfLocation[x].totalCookiesAdd,total);
  }
  cell= document.createElement('td');
  cell.textContent = total;
  tableFoot.appendChild(cell);
  tableFooter.appendChild(tableFoot);
}

new Location('1st and Pike', 23, 65, 6.3);
new Location('SeaTac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);



addHeader();
totalCookiesHrly();
addFooter();


//About the form
var locationName = document.getElementById('locationName');
var minGuest = document.getElementById('minGuest');
var maxGuest = document.getElementById('maxGuest');
var avgCookies = document.getElementById('avgCookies');
var form = document.getElementById('cookieForm');

//collect the input data
form.addEventListener('submit', function(event){
  event.preventDefault();
  var locationNameInput;
  var minGuestInput;
  var maxGuestInput;
  var avgCookiesInput;

  locationNameInput = event.target.locationName.value;
  minGuestInput = event.target.minGuest.value;
  maxGuestInput = event.target.maxGuest.value;
  avgCookiesInput = event.target.avgCookies.value;

  new Location(locationNameInput, minGuestInput, maxGuestInput, avgCookiesInput);



  totalCookiesHrly();
  var tFooter = document.getElementById('tFooter');
  tFooter.deleteRow(0);
  addFooter();
});




