import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBSyYgtWmw-wUPKeTq1FgCQVru-Osmj4CE",
//   authDomain: "blog-app-2bf4d.firebaseapp.com",
//   projectId: "blog-app-2bf4d",
//   storageBucket: "blog-app-2bf4d.appspot.com",
//   messagingSenderId: "235434223477",
//   appId: "1:235434223477:web:669f1856dc8164af33d53c",
//   measurementId: "G-04YQ7Z66H5",
// };
// const Provider = new GoogleAuthProvider();

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
