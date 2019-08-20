import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyBlUiKftBI761YUvLqLC50nV58DKbNrUqo",
    authDomain: "storeapp-ea8ee.firebaseapp.com",
    databaseURL: "https://storeapp-ea8ee.firebaseio.com",
    projectId: "storeapp-ea8ee",
    storageBucket: "",
    messagingSenderId: "544593327474",
    appId: "1:544593327474:web:a6076302e2ea82db"
};


class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}


	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
}

export default new Firebase()