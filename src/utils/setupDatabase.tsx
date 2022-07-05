// Import the functions we need from the SDKs
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	limit,
	onSnapshot,
	setDoc,
	updateDoc,
	doc,
	serverTimestamp,
} from 'firebase/firestore';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';

const signIn = async () => {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(getAuth(), provider);
};

const signOutUser = async () => {
	signOut(getAuth());
};

const initFirebaseAuth = () => {
	onAuthStateChanged(getAuth(), authStateObserver);
};

const getUserName = () => {
	return getAuth().currentUser?.displayName;
};

const getProfilePicUrl = () => {
	return getAuth().currentUser?.photoURL;
};

const addSizeToGoogleProfilePic = (url: any) => {
	if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
		return `${url}?sz=150`;
	}
	return url;
};

const isUserSignedIn = () => {
	return !!getAuth().currentUser;
};

const authStateObserver = (user: any) => {
	const picEls = Array.from(
		document.querySelectorAll('.user-pic'),
	) as HTMLElement[];
	const nameEls = Array.from(document.querySelectorAll('.user-name'));
	const signInEls = Array.from(document.querySelectorAll('.sign-in'));
	const signOutEls = Array.from(document.querySelectorAll('.sign-out'));

	if (user) {
		const profilePicUrl = getProfilePicUrl();

		picEls.forEach(el => {
			el.style.backgroundImage = `url(${addSizeToGoogleProfilePic(
				profilePicUrl,
			)})`;
			el.removeAttribute('hidden');
		});

		signOutEls.forEach(el => {
			el.removeAttribute('hidden');
		});

		signInEls.forEach(el => {
			el.setAttribute('hidden', 'true');
		});
	} else {
		nameEls.forEach(el => {
			el.setAttribute('hidden', 'true');
		});
		picEls.forEach(el => {
			el.setAttribute('hidden', 'true');
		});
		signOutEls.forEach(el => {
			el.setAttribute('hidden', 'true');
		});
		signInEls.forEach(el => {
			el.removeAttribute('hidden');
		});
	}
};

// Web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyARIOjJhFouHKja-Aj7SkSphdZUlOVI2XQ',
	authDomain: 'react-twitter-clone-b954b.firebaseapp.com',
	projectId: 'react-twitter-clone-b954b',
	storageBucket: 'react-twitter-clone-b954b.appspot.com',
	messagingSenderId: '320229846649',
	appId: '1:320229846649:web:c53d536b7886bdebf7aea8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
