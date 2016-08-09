$( document ).ready(function() {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in.");
    } else {
      console.log("No user is signed in.");
    }
  });

  $( "#register-form" ).submit(function( event ) {
    var email = $("#register-form-email").val();
    var password = $("#register-form-password").val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

      if ( error ) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert( errorCode + errorMessage );
      }
    });
    event.preventDefault();
  });

});
