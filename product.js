let makanan =[
    {
        nama: "Ayam Taliwang",
        desc: "Lombok style grilled chicken using native chicken with dry chili sauce",
        gambarMakanan: "images/ayam taliwang.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Ayam_Taliwang"
    },
    {
        nama: "Gurame Terbang",
        desc: "An exquisite food from gourami fish made by making its fin like wings that ready to fly",
        gambarMakanan: "images/gurame terbang.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Ikan_goreng"
    },
    {
        nama: "Sate Klathak",
        desc: "Unlike other satay that use bamboo skewers, this satay use iron skewers as heat conductor",
        gambarMakanan: "images/sate klathak.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Sate_klatak"
    },
    {
        nama: "Capcay",
        desc: "Cuisine from chinese and indonesian culture. Made from mostly vegetables",
        gambarMakanan: "images/capcay.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Cap_cai"
    },
    {
        nama: "Mie Aceh",
        desc: "Authentic noodle made from western most part of indonesia. Its super spicy",
        gambarMakanan: "images/mie aceh.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Mie_aceh"
    },
    {
        nama: "Nasi Goreng Mawut",
        desc: "A mix from fried rice and fried noodle taking advantages of their respectively unique taste",
        gambarMakanan: "images/nasi goreng mawut.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Nasi_goreng"
    },
    {
        nama: "Pempek",
        desc: "Made from finely ground fish meat with starch flour. A Palembang original taste",
        gambarMakanan: "images/pempek.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Pempek"
    },
    {
        nama: "Asinan Bogor",
        desc: "Cuisine made from preserving fruits in salty solution overnight. Rain city special",
        gambarMakanan: "images/asinan.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Asinan"
    },
    {
        nama: "Soto Betawi",
        desc: "Traditional indonesian soup mainly composed of broth,meat and vegetables",
        gambarMakanan: "images/soto betawi.jpg",
        linkWiki:"https://en.wikipedia.org/wiki/Soto_(food)"
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
                  <a href="${item.linkWiki}" class="btn btn-dark" target= "_blank">Learn more</a>
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