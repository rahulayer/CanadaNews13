const firebaseConfig = {
  apiKey: "AIzaSyAjEDKX4pGXYYL8NnZwubpDysyYysT-qqg",
  authDomain: "loginform-cb0ba.firebaseapp.com",
  databaseURL: "https://loginform-cb0ba-default-rtdb.firebaseio.com",
  projectId: "loginform-cb0ba",
  storageBucket: "loginform-cb0ba.appspot.com",
  messagingSenderId: "809953998115",
  appId: "1:809953998115:web:618df2854813e2cc6dc896",
  measurementId: "G-FBKZ27V9Y9"
};
  firebase.initializeApp(firebaseConfig);

  var loginFormDB= firebase.database().ref("loginForm");
  document.getElementById("loginForm").addEventListener("submit", submitform);
  
  function submitform(e){
     e.preventDefault();
     var loginEmail=  getElementVal('loginEmail');
     var loginPassword=  getElementVal('loginPassword');
     var confrimloginPassword=  getElementVal('confrimloginPassword');
     saveMessages (loginEmail,loginPassword,confrimloginPassword)
    //  console.log(loginEmail, loginPassword,confrimloginPassword )
  }



  const saveMessages =  (loginEmail, loginPassword , confrimloginPassword) => {
    var newLoginForm = loginFormDB. push();
    newLoginForm.set ({
        loginEmail: loginEmail,
        loginPassword: loginPassword,
        confrimloginPassword: confrimloginPassword,

    });
  };
  const getElementVal = (id)  => {
    return document.getElementById(id).value;
  }