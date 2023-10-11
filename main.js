// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAb9FC80gVMCAjoimiCBCgo-LEIlO55TFU",
  authDomain: "contactform-755e2.firebaseapp.com",
  databaseURL: "https://contactform-755e2-default-rtdb.firebaseio.com",
  projectId: "contactform-755e2",
  storageBucket: "contactform-755e2.appspot.com",
  messagingSenderId: "61555059231",
  appId: "1:61555059231:web:1d4a7918efa00f8f60832a",
  measurementId: "G-3RVBC7JEHH"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  
  var email = getInputVal('email');
  var passward = getInputVal('passward');
  
  // Save message
  saveMessage(name,  email, passward);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,  email, passward){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    passward:passward,
    
  });
}