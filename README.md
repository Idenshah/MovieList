Overview
Movie-list is a simple web application that allows users to search for movie details from a collection. The app filters and displays movie information such as the title, year, and description directly on the user side without the need for page reloads or server-side requests. This improves the overall user experience and performance.

Project Structure
index.html: The main HTML file that contains the structure of the webpage.
style.css: This file includes the styles to make the page visually appealing.
movies.js: Contains a collection of movies stored in an array of objects, each with properties like title, year, and description.
script.js: JavaScript file that handles the functionality, including dynamic search features and event listeners.
Key Features
Client-side filtering: Users can search for movies by title or year, and the results are filtered in real-time.
No page reloads: The search functionality uses event listeners to avoid page reloads and server-side requests, making the application fast and efficient.
Interactive UI: Clicking on a movie title will reveal more details about the movie.
How to Use
Simply type the name of the movie or the release year into the search bar, and the app will display matching results from the predefined movie list.
