# cookie-stand

In the Monday branch:
1. I created an object for each location. I also made an array for each hours.
2. I added some properties and a method in the object.
3. I used the Math.random() to calculate how many cookies might be sold per hour and create an element plus putting the cookie number sold hourly into the element content. And then append the new element to its parent element.
4. After doing the JavaScript I put it for the sales.html.
5. I put basic stuff into my front page(index.html) and used some CSS to make it look better.

In the Tuesday branch:
1. Replace all the object literals with constructior function with instances inside.
2. call new to create each location's object.
3. Replace the list with a table.
   (header row will be hrs and daily location total  
    body rows will be different location's names and then hrly cookies num
    footer row will be the totals for each hr for each location)
4. each location should have a separate render()metod that creates and appends its row to the table
5. header and footer row get their own function
6. commit oftenly for what I did for the branch.   

In the Wednesday branch:
Create a form that takes in the parameters/properties'name and then update the table with the new instance in it.
1. create the form in the HTML
2. In JS, make a variable to store the access for DOM to get the form.
   Also use event listener to get input data and event handler to pass the data to the constructor function to create the new instance. Then append that to the table.
3. Validate the input data!
4. update the total numbers in the footer.
5. DRY the code by building functions for repeating codes.

In the Thursday branch:
style the facing page
1. use all the pictures in assets file.
2. Include some business infor like location(address), hours open, contact infor
3. references like About Us, Merchandiese(sales of t-shirt, mugs, stckers..), salmon event in washington
4. also use the similar style to the sales
