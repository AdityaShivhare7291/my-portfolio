// // import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";
// // const firebaseConfig = {
// //   apiKey: "AIzaSyAKBORqvwwoVPavQjWYRBsIiKsPpnAzMDI",
// //   authDomain: "portfolio-3d62f.firebaseapp.com",
// //   projectId: "portfolio-3d62f",
// //   storageBucket: "portfolio-3d62f.appspot.com",
// //   messagingSenderId: "174398431968",
// //   appId: "1:174398431968:web:ba76399a67746f87776685",
// //   measurementId: "G-J9L99MMQC0"
// // };

// // const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBvauZu1Eyomf7BOD_-qR_72AggCa0YBzw",
//   authDomain: "portfolio-8f957.firebaseapp.com",
//   projectId: "portfolio-8f957",
//   storageBucket: "portfolio-8f957.appspot.com",
//   messagingSenderId: "676494431773",
//   appId: "1:676494431773:web:b47f28fa79feacc669d8f4",
//   measurementId: "G-PSHGYP0Y2W"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// // const analytics = getAnalytics(app);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvauZu1Eyomf7BOD_-qR_72AggCa0YBzw",
  authDomain: "portfolio-8f957.firebaseapp.com",
  projectId: "portfolio-8f957",
  storageBucket: "portfolio-8f957.appspot.com",
  messagingSenderId: "676494431773",
  appId: "1:676494431773:web:b47f28fa79feacc669d8f4",
  measurementId: "G-PSHGYP0Y2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);