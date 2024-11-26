// let first_name='judah'
// let last_name='kwade3'
// nam =first_name+last_name
// console.log(nam)

// function nam(first_name,last_name){
// this.first_name=first_name
// this.last_name=last_name
// let fullname=`${first_name}${last_name}`
// return fullname;
// }
// identity=nam('kojo','sarpong')
// console.log(identity)

 //class Person{
//      constructor(first_name,last_name)
//     {
//         this.first_name=first_name
//         this.last_name=last_name
//     }
//       name() 
//      {
//        let fullname=`${this.first_name}${this.last_name}`
//        return fullname;
        
//     }
// }
// let myPerson=new Person('Judah','Larbi')
// let myName=myPerson.name()
// console.log(myName)
// CONSTRUCTOR FUNCTIONS

// function Person(mname,age){
//     this.mname=mname
//     this.age=age
//     this.dateofbirth=function(){
//         console.log('15december2004')
//     }
// }
// ME=new Person('judah',20)
// // console.log(ME)
// kojo=Object.keys(ME)
// console.log(kojo)

// class Myinfo{
//     constructor(email){
//     let password="judahlarbi74"
//     let accountNumber="4034853508"
//     this.username="judah"
//     this.email=email}

//     logins(){
// function faceboook(){
    
//     console.log(this.email)
// }
// function whatsapp(){
    
//     console.log(this.username)
// }
//         faceboook()
//         whatsapp()
//     }
// }
// const myinfo=new Myinfo("judahlarbi74@gmail.com")
// console.log(myinfo.username)
// myinfo.logins()


//  class Myinfo {
//      constructor(email) {
//          let password = "judahlarbi74";
//          let accountNumber = "4034853508";
//          this.username = 'Judah  Larbi Sarpong';
//          this.email = email;
//         this.AccountNumber=accountNumber;
//      Object.defineProperty(this,password)
//          return password;
        
        
//      }
//          Bank=()=>{
//              console.log(this.AccountNumber)
//          }
    

//      logins() {
//          const facebook=()=> {
//              console.log(this.email);
//          }

//          const whatsapp=()=> {
//              console.log(this.username);
//          }

//          facebook();  // Call the facebook function
//         whatsapp();  // Call the whatsapp function
//     }
//  }
// // // const GTbank=()=>{
// // //     `$('send the money through this account number')$(accountNumber)`
// // // }

//  const myinfo = new Myinfo("judahlarbi74@gmail.com");
//  myinfo.Bank()

//  myinfo.logins();  // Call the logins method
// console.log("hello world")




// class GhanaCommercialBank {
//     constructor(accNumber, password, username) {
//         this.Greetings = "Ghana Commercial Bank at your service";
//         this.accNumber = accNumber;
//         this.password = password;
//         this.username = username;
//     }

//     getAccInfo() {
//         this.username = document.getElementById('username').value;
//         this.password = document.getElementById('password').value;
//         this.accNumber = document.getElementById('accNumber').value;
//     }
    
//     validateLogin(event) {
//         // Prevent the form from submitting automatically
//         event.preventDefault();

//         console.log(this.Greetings, this.username);

//         // Assuming these are the correct details for validation
//         let name = "judahlarbi74@gmail.com";
//         let pass = "polygelpolygel";
//         let accnumber = "fine";

//         // Get user input before validation
//         this.getAccInfo();

//         if (this.username === name && this.password === pass && this.accNumber === accnumber) {
//             console.log('Welcome Back User');
//         } else if (this.username === "" || this.password === "" || this.accNumber === "") {
//             alert('Please fill all blank spaces');
//         } 
        
//        else {
//         alert('WRONG !!!')
//        }
//     }
// }

// // Create a new bank instance
// const bank = new GhanaCommercialBank();

// // Attach event listener to the form submission
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     bank.validateLogin(event);
// });




// async function loadCategories() {
//     try {
//         const response = await fetch('category-server.json');//this syntax fetches the data from the json file
//         const categories = await response.json();// and stores it is categories 
//         const categoryList = document.getElementById('category-list');//categoryList is the category-list in the main shop page
        
//         categoryList.innerHTML = '';//this clears the category-list in shop 

//         // Create a clickable link for each category
//         categories.forEach(category => {
//             const categoryItem = document.createElement('div');//it puts each category in div tags
//             categoryItem.className = 'category-item';//Gives it a new class name
//             categoryItem.innerHTML = `<a href="${category.link}">${category.name}</a>`;//
//             categoryList.appendChild(categoryItem);//add categoryItem(div)as a child to categorryList
            
//         });
//     } catch (error) {
//         console.error("Error loading categories:", error);
//     }
// }

// // Load categories on page load
// document.addEventListener('DOMContentLoaded', loadCategories);
// JavaScript for slideshow
let slideIndex = 0;
showSlides(); // Start slideshow

function showSlides() {
    const slides = document.getElementsByClassName("slide fade");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Loop back to the first slide

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Next/Previous controls
function changeSlide(n) {
    slideIndex += n - 1; // Adjust index based on button clicked
    showSlides(); // Show the updated slide
}
