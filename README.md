# React Protected Login App with API Integration

This is a React application that allows users to log in and access a protected page.  
After a successful login, users are redirected to a landing page that includes:

- A **user trust counter** that increases with animation delay.
- A **list of dog breeds** fetched from the Dog CEO API (`https://dog.ceo/api/breeds/list/all`).

The app uses **local storage** to store the authentication state, so the user remains logged in after refreshing the page until they log out.


## Main Features
- Secure login system
- Protected route for the landing page
- API data fetching and display
- Responsive UI with Tailwind CSS
