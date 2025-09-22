let data = fetch("data.json");

data.then((response)=>{
 return response.json();
})
.then((data)=>{
   
    console.log(data);


    const productId = localStorage.getItem("productId");
    const product = data.find(p=> p.id == productId);

    document.querySelector(".htag").textContent = product.name;
})