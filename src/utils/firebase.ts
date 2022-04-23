import { FirebaseApp, initializeApp } from "firebase/app"
import config from './config'

export let app: FirebaseApp

(function getFirebase() {
  if (typeof window !== "undefined") {
    app = initializeApp(config.firebase)
  }
})()
