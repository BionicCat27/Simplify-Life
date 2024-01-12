import pkg from 'lodash';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const { memoize } = pkg;

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyD8UFVmCrGkosxreqnQbr4wfe9uDPi4L9w",
    authDomain: "my-simple-priorities.firebaseapp.com",
    databaseURL: "https://my-simple-priorities-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-simple-priorities",
    storageBucket: "my-simple-priorities.appspot.com",
    messagingSenderId: "783456794609",
    appId: "1:783456794609:web:1ccfbec5791775a46ab650",
    measurementId: "G-MXL65K2JZC"
};

// Initialize Firebase
export const initFirebase = memoize(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    return { app, analytics, auth };
});