// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;








// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDUSIQqBY50qFSUSEXZPS6l5va7yamP_yM",
//   authDomain: "easy-shop-c248b.firebaseapp.com",
//   projectId: "easy-shop-c248b",
//   storageBucket: "easy-shop-c248b.appspot.com",
//   messagingSenderId: "866742679077",
//   appId: "1:866742679077:web:d27addbe23e7265f45b1cc"

apiKey: process.env.NEXT_PUBLIC_apiKey,
authDomain: process.env.NEXT_PUBLIC_authDomain,
projectId: process.env.NEXT_PUBLIC_projectId,
storageBucket: process.env.NEXT_PUBLIC_storageBucket,
messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
appId: process.env.NEXT_PUBLIC_appId,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



