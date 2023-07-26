# FurniFlex
FurniFlex is a furniture store website that allows users to browse and purchase furniture. The website is built using the MERN stack and uses Redux for state management. The website is deployed on Heroku and can be accessed [here](https://furniflex.herokuapp.com/).
## Pages
### Home Page  
The home page displays a carousel of featured products and a list of categories. The user can click on a category to view all products in that category.
### Product Page
The product page displays a list of products. The user can click on a product to view more details about the product.
### Product Details Page
The product details page displays more details about the product. The user can add the product to their cart or leave a review for the product.
### Cart Page
The cart page displays all the products in the user's cart. The user can remove products from their cart or proceed to checkout.
### Login Page
The login page allows the user to login to their account. The user can also register for an account.
### Profile Page
The profile page displays the user's information. The user can update their information or view their order history.
### Shipping Page
The shipping page allows the user to enter their shipping address. The user can also select their payment method.
### Place Order Page
The place order page displays the user's order summary. The user can place their order.
### Order Page
The order page displays the user's order details. The user can pay for their order or cancel their order.
### User List Page
The user list page displays a list of all users. The user can delete a user.
### User Edit Page
The user edit page allows the user to edit a user's information.
### Product List Page
The product list page displays a list of all products. The user can delete a product.
### Product Edit Page
The product edit page allows the user to edit a product's information.
### Order List Page
The order list page displays a list of all orders. The user can delete an order.
## Installation
1. Clone the repository
```bash
git clone
```
2. Install dependencies
```bash
npm install
```
3. Create a .env file in the root directory and add the following
```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
    
JWT_SECRET = your jwt secret
PAYPAL_CLIENT_ID = your paypal client id
```

4. Run the backend
```bash
npm run server
```
5. Run the frontend
```bash
npm run client
```
6. Run both the backend and frontend
```bash
npm run dev
```
## License
[MIT](https://choosealicense.com/licenses/mit/) 




