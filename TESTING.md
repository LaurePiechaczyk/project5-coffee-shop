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

- As a Site admin/superuser, I want to edit existing coffees, so that I can update the website.

- As a Site admin/superuser, I want to add new products to the website, so that continuously make new coffees available.

- As a Registered user, I want to Easily recover my password in case I forget it, so that Recover access to my account.

- As a Coffee Shopper, I want to Receive email confirmation of my order, so that confirm that my order was successful.

- As a Registered user, I want to Make secure payments, so that ensure that my payments are securely handled.

- As a Registered user, I want to review my purchase at the checkout, so that decide whether to add or edit the order before confirming.

- As a Registered user, I want to leave a review, so that inform future users about the coffee.

- As a Registered user, I want to store my order history, so that access my previous orders.

- As a Registered user, I want to update my details, so that I can update my address and other details in case they change.

- As a Registered user, I want to store my details for later use, so that I avoid having to fill in my details each time.

- As a Registered user, I want to log in and log out of my profile account, so that so that my personal information will be safe.

- As a Unregistered user, I want to easily register an account, so that use the site easier in the future.

- As a Unregistered user, I want to Access contact details, so that get in touch with the coffee shop.

- As a Unregistered user, I want to filter coffee types, so that find specific types of coffees.

- As a Unregistered user, I want to easily navigate the site, so that I can find what I am looking for quickly.

- As a Shopper, I want to Search for a product by name or description, so that I find the products I am interrested in.

- As a Coffee Shopper, I want to Easelly select the quantity of product, so that I buy the amount I want.

- As a Coffee Shopper, I want to Know how the beans have been roasted, so that I can buy the roasted bean I like.

- As a Coffee Shopper, I want to Know the strongness of the coffee, so that I can buy the strongness I want.

- As a Coffee Shopper, I want to Know the specie of the coffee, so that I can buy my favourite specie.

- As a Shopper, I want to easely view the detail of my bag, so that I am aware of the total price and products chosen.

- As a Shopper, I want to view a list of products, so that I can select some to buy them.

- As a Shopper, I want to view individual product details, so that I know the price, the details, the rating.

## Manual testing

### Test on browsers
The website was tested on computers using the browsers:
- [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome)
- [Firefox](https://en.wikipedia.org/wiki/Firefox) 
- [internet explorer](https://en.wikipedia.org/wiki/Internet_Explorer)
- [Microsoft edge](https://en.wikipedia.org/wiki/Microsoft_Edge)
- [Safary](https://en.wikipedia.org/wiki/Safari_(software))

### Test on devices
[Chrome DevTools](https://developer.chrome.com/docs/devtools/) was used to see how the site looks like on various phones and tablets. Additionally, after deployment the website was tested on various phones including iphones and Samsung phones.


### Testing the website manually
#### Top navbar
- Clicking COFFEE & NATURE in the top navbar directs the user to the home page.

- Entering a word into the search box brings the user to the shop page with relevant products deiplayed.

- Clicking the bag icon brings to the shopping bag page.

- User not loged in "Account" is displayed and user logged in "My account" is displayed.

- User not loged in: dropdown menu brings the user to the "Register" and "login" pages.  User logged in: dropdown menu brings the user to the "My Profile" and "logout" pages.

- Super user is loged in:  dropdown menu brings the user to the "Add a Product", "My Profile" and "logout" pages.

#### Bottom navbar
- Confirm that all the navigation links bring the user to the relevant pages with the relevant products displayed in products.

- Reducing the screen size to mobile and tablet screen sizes to have Burger icon appearing.

#### Home page

- Confirm that the "SHOP NOW" button brings the user to the product page.

- Confirm that 4 random products are displayed and when clicked link to the detail page of the product.

- Confirm that clicking on the countries flag, it redirects to the product page with the relevant products displayed.

#### Product page
- Confirm that all products are displayed

- Confirm that clicking on a product brings to the product details page for the product.

#### Product details page
- Confirm the Name, Characteristics are the good one.
 
- Confirm the Quantity can be changed.

- Confirm the superuser have links to edit and delete the product

- Confirm the correct page redirection when "KEEP SHOPPING" and "ADD TO BAG" are clicked

#### Bag
- Confirm all products are in the bag.

- Confirm the quantity can be adjusted.

- Confirm the amount is correct

- Confirm the delivery cost is correct with orders under and over 50 euros

- Confirm the correct page redirection when "KEEP SHOPPING" and "SECURE CHECKOUT" are clicked


#### Checkout page
- Confirm the order detail is correct

- confirm the user received and confirmation email

- Confirm register user can save delivery information in the profile

- Confirm test payment can be done with the test card number

#### Profile page
- Confirm the user can save information
- Confirm user can update information
- Confirm previous orders can be seen

#### Toasts
- Confirm that user receives relevant feedback

#### Responsivness
- Confirm the ecommerce works on all devices


#### Registration
- Confirm email is received for registration.
- Confirm link to register from the email.

#### ADD / DELETE/ EDIT Products
- Confirm than only super user can add, edit delete products
    - Entering the url when normal user or no user login
- Confirm than if no picture is loaded, the default picture will show off.


## Automated testing
