# Testing
## Code validation
The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
- [W3C Markup Validation Homepage | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2F)
- [W3C Markup Validation Products | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Fproducts%2F)
- [W3C Markup Validation Product details | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Fproducts%2F1%2F)
- [W3C Markup Validation Bag | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Fbag%2F)

- [W3C Markup Validation Checkout | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Fcheckout%2F)

- [W3C Markup Validation Login | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Faccounts%2Flogin%2F)
- [W3C Markup Validation Register | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Faccounts%2Fsignup%2F)
- [W3C Markup Validation Logout | Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2Faccounts%2Flogout%2F)

- [W3C CSS Validator | Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fproject5-coffee-and-nature.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=fr)


Javascipt code was tested using [jshint](https://jshint.com/) and no error was found with /*jshint esversion: 6 */

Python the code was passed in [PEP8 online checker](http://pep8online.com) 

## Testing User Stories
- As a Site admin/superuser, I want to delete existing coffees, so that I can be up to date with the available products.
  - A super user logged in can delete product in the product page and in the product detail page

- As a Site admin/superuser, I want to edit existing coffees, so that I can update the website.
  - A super user logged in can edit product in the product page and in the product detail page

- As a Site admin/superuser, I want to add new products to the website, so that continuously make new coffees available.
  - A super user logged in can add product by clicking "Add a Product in the dropdown "My Account"

- As a Registered user, I want to Easily recover my password in case I forget it, so that Recover access to my account.
  - New password can be reset by clicking Forgot Password in login page.

- As a Coffee Shopper, I want to Receive email confirmation of my order, so that confirm that my order was successful.
  - email with the order summary is sent after the order is completed.

- As a Registered user, I want to Make secure payments, so that ensure that my payments are securely handled.
  - Stipe is used to handle secure payment. 

- As a Registered user, I want to review my purchase at the checkout, so that decide whether to add or edit the order before confirming.
  - In the checkout page, the order summary is displayed.

- As a Registered user, I want to leave a review, so that inform future users about the coffee.
  - App to be added in futur development.

- As a Registered user, I want to store my order history, so that access my previous orders.
  - Order history can be found in my profile page.

- As a Registered user, I want to update my details, so that I can update my address and other details in case they change.
  - In my Profile, details can be updated.

- As a Registered user, I want to store my details for later use, so that I avoid having to fill in my details each time.
  - In my Profile, details are stored.

- As a Registered user, I want to log in and log out of my profile account, so that so that my personal information will be safe.
   - In the nav bar, user can login and out easelly.

- As a Unregistered user, I want to easily register an account, so that use the site easier in the future.
   - In the nav bar, user can register easelly.

- As a Unregistered user, I want to Access contact details, so that get in touch with the coffee shop.
   - Information of the store are in the footer in the Home page. In order that user access it easelly from any page, a link has been added in the navbar.

- As a Unregistered user, I want to filter coffee types, so that find specific types of coffees.
  - filters have been added.

- As a Unregistered user, I want to easily navigate the site, so that I can find what I am looking for quickly.
  - Links have been added at strategic locations so that the user can navigate the site instinctively.

- As a Shopper, I want to Search for a product by name or description, so that I find the products I am interrested in.
  - a search section is present in the top of the website.

- As a Coffee Shopper, I want to Easelly select the quantity of product, so that I buy the amount I want.
  - User can select how many kg of a coffee they want to order.

- As a Coffee Shopper, I want to Know how the beans have been roasted, so that I can buy the roasted bean I like.
  - Roasted information is present both in the packaging and in the product details page.

- As a Coffee Shopper, I want to Know the strongness of the coffee, so that I can buy the strongness I want.
  - Strongness information is present in the product details page.

- As a Coffee Shopper, I want to Know the specie of the coffee, so that I can buy my favourite specie.
  - The coffee variety is shown both in the packaging and varieties can be filtered.

- As a Shopper, I want to easely view the detail of my bag, so that I am aware of the total price and products chosen.
  - The bag page shows the content of the bag

- As a Shopper, I want to view a list of products, so that I can select some to buy them.
  - In the product page, the products are displayed.

- As a Shopper, I want to view individual product details, so that I know the price, the details, the rating.
   - The detail page contains the details of the product.

## Manual testing

### Test on browsers
The website was tested on computers using the browsers:
- [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome)
  - CHECK
- [Firefox](https://en.wikipedia.org/wiki/Firefox) 
  - CHECK
- [Microsoft edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
  - CHECK
- [Safary](https://en.wikipedia.org/wiki/Safari_(software))
  - CHECK

### Test on devices
[Chrome DevTools](https://developer.chrome.com/docs/devtools/) was used to see how the site looks like on various phones and tablets.
  - CHECK
  
[mozilla DevTools](https://developer.mozilla.org/en-US/docs/Tools) was used to see how the site looks like on various phones and tablets.
  - CHECK

 - Note / Bug:

Regarding the display for a device with a width of 390px (iPhone12 pro), the firefox and Chrome devtools showed a different layout. The layout was done using Chrome devtool but it would be important to test the site on a real iPhone12 pro. The issue found is a small design issue in the login and exit page where the title is partially hidden. This does not affect the functionality of the website but the user experience.

### Testing the website manually
#### Top navbar
- Clicking COFFEE & NATURE in the top navbar directs the user to the home page.
  - CHECK

- Entering a word into the search box brings the user to the shop page with relevant products displayed.
  - CHECK

- Clicking the bag icon brings to the shopping bag page.
  - CHECK

- User not loged in "Account" is displayed and user logged in "My account" is displayed.
  - CHECK

- User not loged in: dropdown menu brings the user to the "Register" and "login" pages.  User logged in: dropdown menu brings the user to the "My Profile" and "logout" pages.
  - CHECK

- Super user is loged in:  dropdown menu brings the user to the "Add a Product", "My Profile" and "logout" pages.
  - CHECK

- Confirm that the bag icon in the navbar updates its price when a product is added to the bag.
  - CHECK

#### Bottom navbar
- Confirm that all the navigation links bring the user to the relevant pages with the relevant products displayed in products.
  - CHECK

- Reducing the screen size to mobile and tablet screen sizes to have Burger icon appearing.
  - CHECK

#### Home page
- Confirm that the "SHOP NOW" button brings the user to the product page.
  - CHECK

- Confirm that 4 random products are displayed and when clicked link to the detail page of the product.
  - CHECK

- Confirm that clicking on the countries flag, it redirects to the product page with the relevant products displayed.
  - CHECK

- Confirm that clicking the link to the Fairtrade international link open the correct page in a new window (in various screen size).
  - CHECK

#### Footer
- Confirm that clicking the link to the Privacy Policy link open the correct page in a new window.
  - CHECK

- Confirm that clicking the link to the Facebook page link open the correct page in a new window.
  - CHECK

#### Product page
- Confirm that all products are displayed.
  - CHECK

- Confirm that clicking on a product brings to the product details page for the product.
  - CHECK

#### Product details page
- Confirm the Name, Characteristics are the good one.
  - CHECK
 
- Confirm the Quantity can be changed.
  - CHECK

- Confirm the superuser have links to edit and delete the product
  - CHECK

- Confirm the correct page redirection when "KEEP SHOPPING" and "ADD TO BAG" are clicked
  - CHECK

#### Bag
- Confirm all products are in the bag.
  - CHECK

- Confirm the quantity can be adjusted.
  - CHECK

- Confirm the amount is correct
  - CHECK

- Confirm the delivery cost is correct with orders under and over 50 euros
  - CHECK

- Confirm the correct page redirection when "KEEP SHOPPING" and "SECURE CHECKOUT" are clicked
  - CHECK

#### Checkout page
- Confirm the order detail is correct
  - CHECK

- Confirm the payment is working using the Card Number: 4242 4242 4242 4242
  - CHECK

- confirm the user received and confirmation email
  - CHECK

- Confirm register user can save delivery information in the profile
  - CHECK

- Close the webpage in the middle of the payment and confirm that the order is complete, email with order received and order found in the Order History
  - CHECK

#### Checkout success page
- Confirm that the order is are correct.
  - CHECK
- Confirm the link button brings to the relevant page.
  - CHECK

#### Profile page
- Confirm the user can save information
  - CHECK

- Confirm user can update information
  - CHECK

- Confirm previous orders can be seen
  - CHECK

#### Toasts
- Confirm that user receives relevant feedback
  - CHECK

#### Responsivness
- Confirm the ecommerce works on all devices with [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
  - CHECK

- Confirm the ecommerce works on all devices with [am I responsive?](http://ami.responsivedesign.is/)
  - CHECK

#### Registration
- Confirm email is received for registration.
  - CHECK

- Confirm link to register from the email.
  - CHECK

#### ADD / DELETE/ EDIT Products
- Confirm than only super user can add, edit delete products. Entering the url https://project5-coffee-and-nature.herokuapp.com/products/add/ and https://project5-coffee-and-nature.herokuapp.com/products/edit/2/ when user and super user is logged in or no logged in.
    - CHECK  

- Confirm than if no picture is loaded when a product is created, the default picture will show off.
    - CHECK  

- Confirm deleting product
    - CHECK 

#### 404 page and debug is False
- Confirm that the link https://project5-coffee-and-nature.herokuapp.com/uuu brings to the 404 page
    - CHECK 

- Confirm the link button brings to the relevant page.
  - CHECK

#### Account pages
- Check that the layout matches the rest of the website.
  - CHECK

- Register - login - log out - reset password by clicking Forgot Password
  - CHECK

## Testing on real devices
- Galaxy A8
  - CHECK
- Samsung A21
  - CHECK
- iPhone X & iPad
  - CHECK - Note / bug: 

  The images on the homepage have in the css file "background-attachment: fixed;".

  However, it seems that iOS does not support "background-attachment: fixed;" well and the images did not display well in iphones and ipads. Therefore, "background-attachment: scroll;" was used for iOS devices.

- MacBook Pro
    - CHECK

-  HP Pavilion
    - CHECK