# suncorTestJS
Technical test for Suncor, (DEVELOPMENT IN PROGRESS), There are still many assertions that need to be added.

Now in JavaScript! While not all assertions are included, this is the general assertion flow that will be included.
Similarily, while there is no function for Question 2 (Suncor), the build would basically be the same as standardUserTest(), with differences being navigation to the Suncor site, and assertions from the bottom of this README.

Tests are based on these issues:
- standard_user = No errors, and the flow goes well until checkout is finished.
- locked_out_user = The user can't enter the site
- problem_user = The user has some problems logging in
- performance_glitch_user = The user experiences performance issues that make the page slow.

Question 1:
standard_user  -  Navigate to page.

Assert user info text box "username" and "password" are visible.

Assert "login button" is visible.
                  
Enter user info and click "Login".

Assert that the shopping cart, left hamburger menu, and product grid are all present on the page.

Add 2 items to cart. Assert the "shopping_cart_badge" has properly updated to say 2.

Click shopping cart.

Assert there are 2 items in the checkout menu.

Assert there is a "Remove" button present on any list item.

Assert there is a "Checkout" button and "continue shopping" button visible.

Click "checkout".

Assert all 3 user info text fields are present on the page.

Assert "Cancel" button and "continue" button are visible.

Click "Continue"

Assert error prompt for info has shown.

Enter "firstname", "lastname", and "a2b 2b2" in the text fields.

Click "Continue".

Assert 2 items are visible in checkout.

Assert "Payment Information", "Shipping Info", "Price Total", and "Total" are all visible.

Assert math is correct, i.e 9.99 + 29.99 = 39.98. Assert that value is equal to "Price Total" value.

Assert Price Total + Tax is equal to Total. (39.98 +3.20 = 43.18)

Assert "Cancel" and "Finish Buttons" are visible.

Click Finish.

Assert "Checkout: Complete!" title is visible.

Assert "pony_express" logo is visible. 

Assert "complete_header" and "complete_text" are visible.

Assert "Back Home" button is visible.

Click "Back Home".

Click hamburger menu. Click "Logout"

Assert user info text box "username" and "password" are visible.

Assert "Login" button is visible.

Close page.

<br />
                  
locked_out_user  - Navigate to page.

Assert user info text box "username" and "password" are visible.

Assert "login button" is visible.

Enter user info and click "Login".

Assert that the login error prompt has shown with "Sorry, this user has been locked out.".

Close page.

<br />
<br />
                  
problem_user  -  Navigate to page.

Assert user info text box "username" and "password" are visible.

Assert "login button" is visible.

Enter user info and click "Login".

Assert that the shopping cart, left hamburger menu w/ 4 options, and product grid are all present on the page.

Assert default images are showing for all grid items, in this case, the pug "/static/media/sl-404.168b1cce.jpg"

<br />

performance_glitch_user - Since Selenium is not ideal for performance testing, the best we can do is assert the site didn't timeout. That can be done by checking if any element is visible after some time (here, 3 seconds).
                  
Navigate to page.

Assert user info text box "username" and "password" are visible.

Assert "login button" is visible.

Enter user info and click "Login".

Driver waits for 3 seconds.
                  
Assert that the shopping cart, left hamburger menu w/ 4 options, and product grid are all present on the page.

<br />
<br />

Question 2:
For the Suncor website's first landing page:
<br />
Navigate to https://www.suncor.com/en-ca/
Assert Suncor "logo" is displayed.

Assert "header__grid" is displayed.

Assert header_grid contains "What we do", "Who we are", "Climate", "Sustainability", "News and stories", "Careers", and "Investors" String values.

Assert "language-switcher__button" button is displayed.

Click language switcher button. Assert both "English" and "French" String values are displayed.

Assert "search-button__icon" button is displayed.

Assert "masthead__content" is displayed.

Assert "Read the Story" button is displayed.

Assert "stock-summary__info" grid is displayed.

Assert "Stock Information" button is displayed.

Assert "visual-card-explorer__container" class is displayed.

Assert "View All Stories" button is displayed.

Assert "Explore Our Purpose and Strategy" button is displayed.

Assert "overlap-photo-callout" is displayed.

Assert "Read Darvi’s full story" button is displayed.

Assert the "Did you know?" (card-explorer-carousel) cards is displayed.

Assert "View All Facts" button is displayed.

Assert "footer__grid" is displayed.

Assert String values "Careers", "Investors", "Doing Business with Suncor" are in the footer list.

Assert "social-footer" is displayed.

Assert "footer__utility-navigation" is displayed.

Assert "copyright" is displayed.

