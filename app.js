import {
    auth,
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "./firebase.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user);
    } else {
        console.log("usernot exist");
    }
});
let signup = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");


    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            console.log("error", res.user);
        })
        .catch((error) => {
            console.log("error", error.code);
        });
}

let signupBtn = document.getElementById("signupBtn")
signupBtn.addEventListener("click", signup)

let logout = () => {

    signOut(auth).then(() => {
        console.log("Sign out");
    }).catch((error) => {
        // An error happened.
    });
}
let logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", logout)