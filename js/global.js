$(function () {
    initializeFirebase();

    // http://materializecss.com/modals.html#initialization
    $('.modal').modal();
});

function initializeFirebase() {
    var config = {
        apiKey: "AIzaSyAe2OEB-GRnw_SgkgL05Lhaa_hAWa7LD8w",
        authDomain: "openschool-2017.firebaseapp.com",
        databaseURL: "https://openschool-2017.firebaseio.com",
        storageBucket: "openschool-2017.appspot.com",
        messagingSenderId: "200126588369"
    };

    firebase.initializeApp(config);
}
