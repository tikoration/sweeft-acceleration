# Photo Gallery App

This project is a React application for displaying photos fetched from the Unsplash API. It allows users to browse popular photos, search for specific photos, view detailed information about each photo, and keep track of their search history.

## Deployment

This project is deployed using Netlify. You can access the deployed application using the following link:

[Photo Gallery App](<https://sweeft-project-photo-gallery.netlify.app/>)

## Features

- **Main Page:** Displays a gallery of popular photos or photos based on user search queries.
- **Search:** Users can search for photos by entering keywords in the search box.
- **Detailed View:** Clicking on a photo opens a modal displaying detailed information about the photo, including likes, views, and downloads.
- **History Page:** Users can view their search history and revisit past searches.
- **Infinite Scrolling:** The app supports infinite scrolling to load more photos as the user scrolls down the page.
- **Local Storage:** Search history is stored locally, allowing users to revisit their past searches even after refreshing the page.
- **Data Caching:** Utilizes React Query for efficient caching of photo data, reducing network requests and improving performance.

## Folder Structure

- **public:** Contains public assets such as HTML files, manifest, and robots.txt.
- **src:** Contains the source code of the application.
  - **assets:** Includes images used in the application.
    - **arrow-left.png**
    - **clock.png**
    - **unsplash.png**
  - **components:** Contains React components used throughout the application.
    - **Card.tsx:** 
    - **Header.tsx:** 
    - **Modal.tsx:**
    - **SearchBox.tsx:** 
    - **componentStyles.tsx:** File containing styled-components used for styling components.
  - **hooks:** Custom hooks for reusable functionalities.
    - **useInfiniteScroll.ts:** 
    - **useLocalStorage.ts:**
  - **interfaces:** TypeScript interfaces defining data structures used in the application.
    - **Interfaces.ts:** 
  - **pages:** React components representing different pages of the application.
    - **ErrorPage.tsx:** 
    - **HistoryPage.tsx:** 
    - **MainPage.tsx:** 
  - **routes:** Defines the routing configuration for the application.
    - **routes.tsx:** 
  - **Access_key.ts:** File containing the Unsplash API access key (not included in repository).
  - **App.css:** 
  - **App.test.tsx:** 
  - **App.tsx:** Main component for the application.
  - **index.css:** 
  - **index.tsx:** 
  - **react-app-env.d.ts:** 
  - **reportWebVitals.ts:** 
  - **setupTests.ts:** 
- **.gitignore:** 
- **netlify.toml:** Configuration file for deploying the app to Netlify.
- **package-lock.json:** 
- **package.json:** Contains metadata and dependencies of the project.
- **README.md:** The file you're currently reading, containing project information and instructions.
- **tsconfig.json:** 


## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **React Router:** Library for handling routing in a React application.
- **React Query:** Library for data fetching and caching in React applications.
- **Styled Components:** Library for styling React components with CSS.
- **TypeScript:** Typed superset of JavaScript for improved code quality and developer experience.
- **Netlify:** Cloud platform used for deployment and hosting of the application.
