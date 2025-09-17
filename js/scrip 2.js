
document.addEventListener('DOMContentLoaded',()=>{
document.addEventListener('click',(event)=>{
   if (event.target && event.target.classList.contains('select-btn'))
{
   const buttons=document.querySelectorAll('.select-btn')
   
buttons.forEach(button=> {
    
        button.addEventListener('click',()=>{
            const proName=button.getAttribute('data-name')
            const proImage=button.getAttribute('data-image')
            const proPrice=button.getAttribute('data-price')
    
            const jsonData={
                Name:proName,
                image:proImage,
                price:proPrice,
                quantity:1
    
            }

            let selectedItems=JSON.parse(localStorage.getItem('selectedItems')) ;
            if (!Array.isArray(selectedItems)) {
                selectedItems = []; // Initialize as an empty array if it's not already one
            }
            selectedItems.push(jsonData);
            localStorage.setItem('selectedItems',JSON.stringify(selectedItems))
            alert(`${proName}`);
            console.log(event.target);}
    
)})}})})
        