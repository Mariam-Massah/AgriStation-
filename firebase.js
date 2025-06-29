// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCObztKLA4Z9gNhOZ44jC277jvQbG0_yxE",
  authDomain: "agristation-58ce6.firebaseapp.com",
  databaseURL: "https://agristation-58ce6-default-rtdb.firebaseio.com",
  projectId: "agristation-58ce6",
  storageBucket: "agristation-58ce6.firebasestorage.app",
  messagingSenderId: "847568766852",
  appId: "1:847568766852:web:ce1d894d6d754b09ee3fd1",
  measurementId: "G-RMTZ8PFFYR"
};

// ////////////////////////////////login page////////////////////////////////

// Initialize
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login(event) {
  event.preventDefault(); // تمنع الصفحة من الـ refresh

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("✅ Logged in!");
      // ممكن تنقلي المستخدم لصفحة تانية:
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("❌ " + error.message);
    });
}
