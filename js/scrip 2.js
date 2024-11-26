
document.addEventListener('DOMContentLoaded',()=>{

   const buttons=document.querySelectorAll('.select-btn')
   
buttons.forEach(button=> {
    
        button.addEventListener('click',()=>{
            const proName=button.getAttribute('data-name')
            const proImage=button.getAttribute('data-image')
            const proPrice=button.getAttribute('data-price')
    
            const jsonData={
                Name:[proName],
                image:[proImage],
                price:[proPrice],
    
            }
            let selectedItems=JSON.parse(localStorage.getItem('selectedItems')) || []
            selectedItems.push(jsonData);
            localStorage.setItem('selectedItems',JSON.stringify(jsonData))
            alert(`${proName}`);
    
        })})})