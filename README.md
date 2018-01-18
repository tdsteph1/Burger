# burger

### Overview
In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

      
        
![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img1.png)
Home Screen where the user can choose to devour a burger of choice or add a new burger of choice.

![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img2.png)
The SQL database with current columns **BurgerName** & **Devour** notice that all 3 burgers devour state is set to 0 which implies that we have not devoured any burgers yet.

![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img3.png)
User clicks on 2 devour buttons indicating that the user has eaten Big Mac and Quarter Pounder.

![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img4.png)
Database updates **Devour** columns for Big Mac & Quarter Pounder showing that the user has eaten those 2 burgers by setting the state of each column to 1.

![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img5.png)
User adds a new burger named **The Big One**

![Image of product Table](https://github.com/tdsteph1/Burger/blob/master/public/assets/img/Img6.png)
Database updates displaying a new burger that was added by the user by using POST function and then the callback function returns the new burger object that is strored in an array of burger objects.
