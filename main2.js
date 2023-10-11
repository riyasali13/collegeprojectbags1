const firebaseConfig = {
    apiKey: "AIzaSyBadtpdPpcYu5OUQ3stC-Mdyyndg8-P08Q",
    authDomain: "orderform-1fd14.firebaseapp.com",
    databaseURL: "https://orderform-1fd14-default-rtdb.firebaseio.com",
    projectId: "orderform-1fd14",
    storageBucket: "orderform-1fd14.appspot.com",
    messagingSenderId: "359465529613",
    appId: "1:359465529613:web:670b80a0123f3586518044",
    measurementId: "G-F3G9B58RWW"
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
  var quantity = getInputVal('quantity');
  
  var address = getInputVal('address');
  
  
  // Save message
  saveMessage(quantity,  address);

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
function saveMessage(quantity,  address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    quantity:quantity,
    address:address,
    
    
  });
}