# E Commerce App

This project is built using React Native and is designed to provide a seamless shopping experience for users. The app includes features such as browsing products, viewing product details, managing a shopping cart, and more.

## Features

**Home Screen**
- Widgets Display: The home screen showcases various widgets. Each widget is conditionally rendered based on its isShow property.

**Categories**
- Fetch and Display Categories: The Categories screen fetches category data from a remote server and displays them in a list. While loading, a spinner is shown.
- Category Selection: Users can select a category to view related products.

**Favorites**
- Favorite Items Management: The Favorites screen allows users to view their favorite products. If there are no favorites, an empty state component is displayed.

**Cart**
- Shopping Cart Management: The Cart screen displays products added to the cart. Users can view a summary of their cart at the bottom of the screen.

**Product Detail**
- Product Information: The Product Detail screen shows detailed information about a product, including images, title, category, price, and rating.
- Add to Favorites: Users can add a product to their favorites list, which requires login.
- Add to Cart: Users can add the product to their cart.
- Login Check: The app checks if the user is logged in before adding products to favorites.

**Product List**
- Product Listing: The Product List screen displays products in a grid format. Users can filter products by category.

**Profile**
- User Information: The Profile screen shows user information and profile menu options if the user is logged in.
- Login Prompt: If the user is not logged in, a prompt to log in is displayed.

## Used Technologies
* React Native
* React Navigations (Bottom Tabs & Native Stack)
* Axios
* Context API
* Iconsax
