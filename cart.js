

// Inisialisasi ID HTML
let loginButtonHome = document.querySelector("#loginButtonHome");
let registerButtonHome = document.querySelector("#registerButtonHome");
let logoutGreetings = document.querySelector("#logoutGreetings");
let logoutButton = document.querySelector("#logoutButton");
let customModal = document.querySelector("#customModal");
let cartItem = document.querySelector("#cartItem")
let userEmptyCart = document.querySelector("#userEmptyCart")

// Inisialisasi Local Storage
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

function openCheckout() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    customModal.hide();
}


// DOM Login Greetings
if (local) {

    loginButtonHome.setAttribute("class" , "hide")
    registerButtonHome.setAttribute("class" , "hide")
    logoutGreetings.setAttribute("class" , "btn btn-dark unhide")
    logoutButton.setAttribute("class" , "btn border-danger text-danger unhide")
    customModal.setAttribute("class" , "btn btn-dark unhide")
    logoutGreetings.innerHTML = `Halo ${localObj.name}`
    displayTotal.setAttribute("class" , " table table-sm table-borderless ")
    userEmptyCart.setAttribute("class", "unhide")
}

const hideEmptyCart = () => {

    fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang`)

    .then (result => result.json())
    .then (data => {

        if (data.length > 0){
            userEmptyCart.setAttribute("class","hide")
        }


    } )

}

hideEmptyCart()


// DOM User Cart Display
const userDisplayCart = () => {


    let totalHarga = 0;

    document.querySelector("#tesTable").innerHTML = "";
   
    // Prevent Unregistered Accsess
    if (local == undefined){
        return;
    }

    document.querySelector("#cartEmpty").setAttribute("class" , "hide")
    document.querySelector("#strangerText").setAttribute("class" , "hide")
    let showcaseDisplay = document.querySelector("#showcaseDisplay")

    fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang`)

    .then (result => result.json())
    .then (data => {

        console.log(data);

        let displayTable = document.getElementById("tesTable")
        let displayTotalHarga = document.getElementById("displayTotalHarga")
        let displayTotal = document.getElementById("displayTotal")

        

        data.forEach(items => {
        
            let createDiv = document.createElement("TR")
 
            createDiv.setAttribute("id","barisTabel-" +items.id)
                   
            createDiv.innerHTML = `                    
                                <td class=" col-4"><h5 class="fw-light">${items.produk}</h5></td>
                                <td class="col-4 ps-5"><p>Harga : ${items.harga}</p></td>
                                <td class="col-4 text-center"><button class="btn btn-outline-dark btn-sm"  type="button" onclick = "deleteItem(${items.id})">delete</button></td>
                                `
            displayTable.appendChild(createDiv)

            totalHarga += items.harga

        });

        displayTotalHarga.innerHTML = "Total : " +totalHarga
        
    })


}

userDisplayCart()





// CRUD Delete

const deleteItem = (id) => {

 const option = {
     method : "DELETE"
 }

 console.log(option);
 
 fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang/${id}` , option)

 .then (result =>   {

    document.getElementById("barisTabel-" +id).remove()

 }  )

}


// Checkout Function

checkout = () => {
    let validateAddress = document.getElementById("address-text").value
    let newAddress = validateAddress.toLowerCase()
    let validateRegex = new RegExp ("jakarta")
    if (validateRegex.test(newAddress) == true) {
    document.getElementById("statusOrder").style.display = "block";
    document.getElementById("displayTotal").style.display = "none";

    fetch (`https://6023a8436bf3e6001766b514.mockapi.io/login-app/${localObj.id}/barang`)

    .then(result => result.json())
    .then(data => {
        data.forEach (items => {

            deleteItem(items.id)
        })
    })
    
} else {
    alert("Delivery order only to Jakarta area")
}
}






