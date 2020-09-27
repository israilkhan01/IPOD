import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import 'firebase/firestore';
import './index.css';
import App from './App';
import { isEmptyObject } from 'jquery';

const firebaseConfig = {
  apiKey: "AIzaSyCrDRCK4FiTPTBiG7Zs1LZPl-swcWilUM4",
  authDomain: "reactivepod.firebaseapp.com",
  databaseURL: "https://reactivepod.firebaseio.com",
  projectId: "reactivepod",
  storageBucket: "reactivepod.appspot.com",
  messagingSenderId: "733010782972",
  appId: "1:733010782972:web:02bf3412ab681ffade8579"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

