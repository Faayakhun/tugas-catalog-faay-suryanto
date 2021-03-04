
const url = "https://6023a8436bf3e6001766b514.mockapi.io/product";

let loginButtonHome = document.querySelector("#loginButtonHome");
let registerButtonHome = document.querySelector("#registerButtonHome");
let logoutGreetings = document.querySelector("#logoutGreetings");
let logoutButton = document.querySelector("#logoutButton");
let cartItem = document.querySelector("#cartItem")



// inisialisasi Local Storage
let local = localStorage.getItem("user")
let localObj = JSON.parse(local)



// On-click function
loginForm = () => {
    window.location.href = "login.html"
};

registerForm = () => {
    window.location.href = "register.html"
};

logout = () => {
    localStorage.clear()
    alert ("Anda berhasil Logout")
    window.location.href = "index.html"
};

checkout = () => {
    window.location.href = "cart.html"
}



if (local) {

    loginButtonHome.setAttribute("class" , "hide")
    registerButtonHome.setAttribute("class" , "hide")
    logoutGreetings.setAttribute("class" , "btn btn-dark unhide")
    cartItem.setAttribute ("class", "btn btn-danger px-2  unhide")
    logoutButton.setAttribute("class" , "btn border-danger text-danger unhide")

    logoutGreetings.innerHTML = `Halo ${localObj.name}`

    showCart = () => {

        fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang`)
    
        .then (result => result.json())
        .then (data => {
            cartItem.innerHTML = "🛒" +data.length
        })
    
    }
    
    showCart()



}




const getData = async () => {
    
    let response = await fetch(url);
    let result = await response.json()
    display(result);
}



let display = (result)=>{
    let display = document.querySelector("#display");
    display.innerHTML = "";
    result.forEach(item =>{

        let createDiv = document.createElement("div");
        createDiv.innerHTML = `
                            <div class="col">
                                   <div class="card shadow-sm border-dark">
                                    
                                    <img style="width: 100%; height: 300px;" src="${item.gambar}" class="card-img-top" alt="">
                                
                                    <div class="card-body">
                                      <h5 class="card-title fs-3 fw-normal">${item.namaProduk}</h5>
                                      <p class="card-text">${item.keterangan}</p>
                                      <a href="${item.desc}" class="btn btn-dark" target= "_blank">Learn more</a>
                                      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "purchased(${item.id},'${item.namaProduk}',${item.harga} )" class="btn btn-dark"  >Purchase</button>
                                      <div class="d-flex justify-content-between align-items-center"> 
                                        <small class="text-muted">© NU-SANTARA</small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            `;

        display.appendChild(createDiv);

    });
}

getData();


function counter (harga) {

    let quantityUpButton = document.querySelector("#quantityUpButton")
    let quantityDownButton = document.querySelector("#quantityDownButton")
    let quantityinput = document.querySelector("#quantityinput")
    let quantity = parseInt(quantityInput.value)
    let displayHarga = harga

    quantity = 1
    quantityInput.value = 1
    

        quantityDownButton.addEventListener ("click" , function (){        

            if(quantityInput.value > 1) {
                quantity --
                quantityInput.value = quantity
               itemPrice.innerHTML = (displayHarga -= harga)
               console.log(quantity)

            }

        })

        quantityUpButton.addEventListener ("click" , function (){   
            quantity ++
            quantityInput.value = quantity
            itemPrice.innerHTML = (displayHarga += harga)
            console.log(quantity)

        })

        itemPrice.innerHTML = `${harga}`
    
}

purchased =  (id, barang ,harga) => {

    if (local == undefined){
        alert ("Please Login or Register to purchase this item")
        return;
    }

    // inisianilisasi Form Order
    let itemTitle = document.querySelector("#itemTitle")
    let notesInput = document.querySelector("#notesInput")
    let itemPrice = document.querySelector("#itemPrice")
    let totalHargaBarang;




    let dataBarangObj = {
        produk : barang,
        harga : harga,
    }

    let dataBarangJSON = JSON.stringify(dataBarangObj)

    console.log("ini button purchased")

    // console.log(id)
    // console.log(barang);
    // console.log(harga);
    // console.log(dataBarangJSON);

    

    counter(harga);


    itemTitle.innerHTML = `${barang}`
    

}


addToCart = () => {

     let totalHargaBarang = itemPrice.innerHTML

    barangJSON = JSON.stringify( barangObj = {
        produk: itemTitle.innerHTML,
        harga: totalHargaBarang,
        jumlah: quantityInput.value,
        notes: notesInput.value
    } )

    console.log(barangJSON)
    


     const option = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body : barangJSON
    }


    fetch ( `https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang` , option)

    .then (result => result.json())
    .then (data =>   showCart())
    .catch (err => console.log("Error, unable to fetch (check your connection)"))
    


}





