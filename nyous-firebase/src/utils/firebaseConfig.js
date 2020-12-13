import firebase from 'firebase'

//essas informações você retira em configuraçoes do projeto/geral/seus aplicativos/CDN
var firebaseConfig = {
    apiKey: "AIzaSyBKhOQC0-GvFeED0bnPsKWxoNs9Stb9bcE",
    authDomain: "nyous-f4b38.firebaseapp.com",
    projectId: "nyous-f4b38",
    storageBucket: "nyous-f4b38.appspot.com",
    messagingSenderId: "1048751862798",
    appId: "1:1048751862798:web:c4acfb6a55c990d065b85f"
  };

  //inicializar banco de dados

  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig