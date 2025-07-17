## FeontEnd link 
- https://lucky-mochi-d927cf.netlify.app/

1. **Component-Based Architecture**
   The app follows React's best practice of breaking down UI into reusable components. A separate `Card` component is created (`Card.jsx`) which receives `title`, `description`, and `image` as props. This improves reusability and code modularity, making it easy to manage and scale the UI.

2. **Data-Driven Rendering**
   The main `App.jsx` file stores an array of objects, each representing a card. Instead of hardcoding each card, the `map()` function is used to loop through the array and render cards dynamically. This avoids duplication, supports scalability, and keeps the UI in sync with the data.

3. **CSS Separation and Styling**
   Styling is cleanly split into two separate CSS files:

* `Card.css` – for styling individual cards
* `App.css` – for global or layout-related styles
  This improves separation of concerns, allowing each component to manage its own styling independently. Easier to debug and modify styles in the future.

4. **Media and Accessibility**
   Images are pulled from Pexels using external URLs. The `alt` attribute in the `<img>` tag is dynamically set using the card’s title. This enhances accessibility and ensures the app is more inclusive for screen readers and search engines.

5. **Semantic HTML and Content Structure**
   The app uses proper semantic tags:

* `<h2>` for the main title
* `<h3>` for card titles
* `<p>` for card descriptions
  This ensures better readability, SEO, and accessibility.

6. **Visual Consistency and Layout**
   Each card is wrapped in a `.card` and `.card-border` class for layout and visual styling. Though CSS isn't shown here, the class structure implies use of a grid or flexbox layout for aligning cards properly within `.card-container`. This ensures the design looks clean, structured, and likely responsive.

