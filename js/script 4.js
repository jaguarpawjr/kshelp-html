/*document.getElementById('options').addEventListener('click',click(){




}
})*/
 /*document.getElementById('size').addEventListener('click', function() {
            var list = document.getElementById('list');
            list.style.display = 'block';
        });*/


       /* function click() {
            alert('Hello, World!');
        }*/

    //    function click() {
    //         var list = document.querySelector('.list');
    //         list.style.display = (list.style.display === 'none' || list.style.display === '') ? 'block' : 'none';
    //     }
        // document.write(36+4)

    //   document.getElementById("bath").innerHTML= (6+8);
    //   var x=89
    //   var y="hello"
    //   var z=x+ ""+y
    //   document.getElementById("bath").innerHTML= z;
    // var phones={brand:"apple",version:27,type:"14pr0",colour:"black"}
    // document.getElementById("bath").innerHTML=phones.brand+phones.colour
    // var Fname="Judah"
    // var Lname="Larbi"
    // var surname="Sarpong"
    // document.getElementById("bath").innerHTML= Fname+Lname+"<br>"+"or"+"<br>"+Lname+surname;

//  var cars=["wolfwagen","BENZ","Toyota","Heliux",'Honda',"Hyundai","Camry","Chevolet","Ferrari","Dodge"]
// delete cars[5];
// cars.splice(4,0, "vitz","yaris");//the zer0 prevent other element from deleting
// cars.sort();
//  document.getElementById("bath").innerHTML=cars.join("*")
// var Grade="B"
// if(Grade=="A"){
//     document.write("Excellent")
// }
// else if(Grade=="B"){
//     document.write("very good")
// }
// else if (Grade=="C")
// {
//     document.write("good")

// }
// else if(Grade=="D"){
//     document.write("credit")
// }
// else if(Grade=="E"){
//     document.write("pass")
// }


// var cars=["wolfwagen","BENZ","Toyota","Heliux",'Honda',"Hyundai","Camry","Chevolet","Ferrari","Dodge"];
// var results=""
// for (let x= -1; x < cars.length;x++){
//     results+=cars[x]+"<br>"
// }
// document.getElementById("bath").innerHTML=results;

// var cars = ["wolfwagen", "BENZ", "Toyota", "Heliux", 'Honda', "Hyundai", "Vitz", "Yaris", "Opel", "Camry", "Chevolet", "Ferrari", "Dodge"];
// var results = "";

// for (let x = 0; x < cars.length; x++) {
//     results += cars[x] + "<br>";

//     // Check if x is 4 and break the loop
//     if (x === 4) {
//         break;
//     }
// }

// document.getElementById("bath").innerHTML = results;


function toggle(){

    tabs=document.querySelector("#menus")
    if(window.innerWidth<=720){
     if (tabs.style.display=="none"||tabs.style.display==""){
         tabs.style.display="block"
         
     }
     else{tabs.style.display="none"}
    

    }
    else{
        tabs.style.display="inline"
    }
}
document.getElementById("options").addEventListener('dblclick',toggle)
 

