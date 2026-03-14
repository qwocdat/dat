const firebaseConfig = {
apiKey:"AIzaSyCWmWDcd5clMX287C8o3D2RSWbqWiwxeV8",
authDomain:"kiemtien-849fa.firebaseapp.com",
projectId:"kiemtien-849fa",
storageBucket:"kiemtien-849fa.appspot.com",
messagingSenderId:"517559162898",
appId:"1:517559162898:web:9d08f0c0450c7ed76ba0cb"
};

firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db=firebase.firestore();
