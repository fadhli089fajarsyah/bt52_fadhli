function getDataApi() {
    //romise mewakili nilai yang mungkin belum tersedia saat ini, tetapi akan tersedia di masa depan, atau mungkin tidak tersedia sama sekali.
    return new Promise((resolve, reject) => {   // resolve ditepati atau berasil kalo reject ingkari
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.npoint.io/01d2222930913b924270", true);
        xhr.onload = () => {// onload itu ketika data sudah di dapatkan kayaknya 
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText); // parse buat konversi json ke arr obj  
                resolve(data);
            } else {
                reject(xhr.status);
            }
        }
        console.log(xhr.status);
        xhr.send();  
    })
}



//panggil funtion mengambil apinya
getDataApi()
    .then(data => {
        cardRating = data; //harus ambil dulu datanya buat pengilangan di forechnya
        console.log(data);
        allCardRating(); // exsekusinya
    })
    .catch(error => {
        console.log("eror brow datanay ", error);
    });


function allCardRating() {
    
    let htmlContent = ''; //variabel baru buat menyimpan obj dari foreach

    cardRating.forEach((value) => {
        htmlContent +=
            `<div class="warp__card_oop">
                <img src="${value.image}" class="img_oop" alt="">
                <p class="content_oop">${value.content}</p>
                <p class="name_oop">${value.author}</p>
                <p class="name_oop"><i class="fa-solid fa-star"></i>${value.rating}</p>
            </div>`
    })

    document.getElementById("warp_card_rating").innerHTML = htmlContent //memasukan dan menseleksi html buat hasil dari foreach
    
}
function filter_rating(rating) {
    const filtered_ratings = cardRating.filter((value) => value.rating === rating);

    let htmlContent = ''; //variabel baru buat menyimpan obj dari foreach

    if(filtered_ratings == ""){
        htmlContent +=
        `tidak ada`
    }
    
    filtered_ratings.forEach((value) => {
        htmlContent +=
            `<div class="warp__card_oop">
                <img src="${value.image}" class="img_oop" alt="">
                <p class="content_oop">${value.content}</p>
                <p class="name_oop">${value.author}</p>
                <p class="name_oop"><i class="fa-solid fa-star"></i>${value.rating}</p>
            </div>`
    })

    document.getElementById("warp_card_rating").innerHTML = htmlContent
    
}

