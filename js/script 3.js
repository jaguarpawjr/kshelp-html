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



let htmlFiles = [
    'category-lubricants.html',
    'category-bulb.html',
    'category-belts.html',
]
// this is the list of the html files i want to be importing products from
  
async function showProducts(params) { //the async function By using async and await, you can handle operations that take time (like fetching data from an API) without blocking the execution of the rest of your code.

    const container=document.getElementById('displayProducts') 

    for(let file of htmlFiles){ //for each html file in the htmlFiles
        
    try{
    const response = await fetch(file);
    const data = await response.text();
// this is a call and save syntax wen you fetch the file then you save it content in data 
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    //this is an error handler for failing to call the file 

    const Product_receiver=document.createElement('div')
    Product_receiver.innerHTML=data
//this is a where i handed the content of the html file to the div tag seems more logic this way and will help prevent errors
    findCard=Product_receiver.querySelectorAll('.product-card')//querySelectorAll makes sure to select all the produc-cards in the html file
    findCard.forEach(card => {
        container.appendChild(card.cloneNode(true));//the cloneNode is used to make a duplicate so for each card add a copy to the container 
    });
    

}


catch(err){
    console.error(`Error loading file at index ${htmlFiles.indexOf(file)} (${file}):`, err);

}
}
}//this is an error handler so Error loading indicating the html file and the eror associated with it 

document.addEventListener('DOMContentLoaded', ()=> {
       showProducts(); 
   });//this is to make sure the Dom structure loads before the javascript code so tha we don't call empty tags


