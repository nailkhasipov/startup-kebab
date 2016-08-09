$( document ).ready(function() {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in.");
    } else {
      console.log("No user is signed in.");
    }
  });

  $("#start-button").click(function(){
    $('.ui.modal').modal('show');
  });

  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

});
