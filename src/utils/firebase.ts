import firebase from 'firebase/app'
import config from './config'

let instance: firebase.app.App

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = firebase.initializeApp(config.firebase)
    return instance
  }

  return null
}