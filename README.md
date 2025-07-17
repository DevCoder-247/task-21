## FeontEnd link 
- https://lucky-mochi-d927cf.netlify.app/

This project focuses on building a React-based online shoe store with a functional shopping cart system powered by the useState hook. The main goal was to manage cart interactions on the client side in a clean, responsive, and intuitive manner. The following design decisions were made to structure and enhance the application:

Component-Based Structure
The application is broken down into key components:

A ShoeList to display available shoes

A Cart to show selected items

Reusable ShoeCard and CartItem components for clarity and modularity
This separation helps keep UI logic manageable and maintainable.

State Management with useState
Cart state is maintained using React’s useState hook within a parent component. This allows real-time updates to the UI whenever an item is added or removed. Each interaction updates the cart's array of items and triggers a re-render.

Add to Cart Functionality
When users click “Add to Cart,” the item is either added fresh or, if it already exists, its quantity is incremented. This logic ensures no duplicates while accurately tracking quantity.

Remove from Cart and Quantity Handling
Users can remove an item or decrease its quantity. If the quantity reaches zero, the item is removed from the cart entirely. This keeps the cart clean and avoids unnecessary state clutter.

Live Cart Total Calculation
The total cost of the cart is dynamically calculated based on current cart items and their quantities. This ensures that the displayed total always reflects the real-time cart state.

Responsive Layout and Visual Clarity
The UI is organized with the shoe collection displayed on the left and the cart on the right. This clear two-column layout offers a seamless browsing and cart-management experience.
