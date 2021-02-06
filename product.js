let makanan =[
    {
        nama: "Ayam Taliwang",
        desc: "Lombok style grilled chicken using native chicken with dry chili sauce",
        gambarMakanan: "image/ayam taliwang.jpg"
    },
    {
        nama: "Gurame Terbang",
        desc: "An exquisite food from gourami fish made by making its fin like wings that ready to fly",
        gambarMakanan: "image/gurame terbang.jpg"
    },
    {
        nama: "Sate Klathak",
        desc: "Unlike other satay that use bamboo skewers, this satay use iron skewers as heat conductor",
        gambarMakanan: "image/sate klathak.jpg"
    },
    {
        nama: "Capcay",
        desc: "Cuisine from chinese and indonesian culture. Made from mostly vegetables",
        gambarMakanan: "image/capcay.jpg"
    },
    {
        nama: "Mie Aceh",
        desc: "Authentic noodle made from western most part of indonesia. Its super spicy",
        gambarMakanan: "image/mie aceh.jpg"
    },
    {
        nama: "Nasi Goreng Mawut",
        desc: "A mix from fried rice and fried noodle taking advantages of their respectively unique taste",
        gambarMakanan: "image/nasi goreng mawut.jpg"
    },
    {
        nama: "Pempek",
        desc: "Made from finely ground fish meat with starch flour. A Palembang original taste",
        gambarMakanan: "image/pempek.jpg"
    },
    {
        nama: "Asinan Bogor",
        desc: "Cuisine made from preserving fruits in salty solution overnight. Rain city special",
        gambarMakanan: "image/asinan.jpg"
    },
    {
        nama: "Soto Betawi",
        desc: "Traditional indonesian soup mainly composed of broth,meat and vegetables",
        gambarMakanan: "image/soto betawi.jpg"
    },
]

let makananid = document.querySelector("#namaMakanan");

let display = ()=>{
    makanan.forEach(item =>{

        let cardo = document.createElement("div");
        cardo.innerHTML = `
        <div class="col">
              <div class="card shadow-sm">
                <img style="width: 400px; height: 300px;" src="${item.gambarMakanan}" class="img-thumbnail" alt="">
    
                <div class="card-body">
                  <h5 class="card-title">${item.nama}</h5>
                  <p class="card-text">${item.desc}</p>
                  <div class="d-flex justify-content-between align-items-center"> 
                    <small class="text-muted">© Nu-santara</small>
                  </div>
                </div>
              </div>
            </div>
        `;
        makananid.appendChild(cardo);

    });
}

display();