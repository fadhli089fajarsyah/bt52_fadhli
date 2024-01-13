
// Array testimonials
const cardRating = [
    {
        author: "elon",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/02/Elon-Mask-4277837640.jpg",
        rating: 3
    },
    {
        author: "milea",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2019/01/vanesha-sampai-nangis-dalami-peran-milea-dilan-1991-bakal-bikin-baper_m_.jpg",
        rating: 2
    },
    {
        author: "john",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/db/a5/dd/dba5dd6a537e9a4e550c4155e3e77e07.jpg",
        rating: 4
    },
    {
        author: "waki",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/3e/bc/d8/3ebcd836028fdf8a67cd401ff0dc6608.jpg",
        rating: 2
    },
    {
        author: "yohsa",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/8d/77/ca/8d77ca4f459dd5743234be2602b9dea1.jpg",
        rating: 3
    },
    {
        author: "mega",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/d4/d4/5b/d4d45bab6a852ab3de2a4b89b52c8c57.jpg",
        rating: 2
    },
    {
        author: "wati",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/6b/99/f7/6b99f717b12de37b4b1e58bcd47c4194.jpg",
        rating: 4
    },
    {
        author: "keyoca",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://i.pinimg.com/564x/53/9a/a2/539aa2d2ccc73e872f732bd5716d3e92.jpg",
        rating: 1
    },
    {
        author: "mark",
        content: " architecto animi sequi consectetur doloremque neque in nisi blanditiis sed cum harum!",
        image: "https://thumb.viva.co.id/media/frontend/thumbs3/2020/05/19/5ec38e767531e-bos-facebook-mark-zuckerberg_1265_711.jpg  ",
        rating: 2
    }
];


// membuat funtion foreach buat meloping isi aray of obj 
function allCardRating(){

    let htmlContent = ''; //variabel baru buat menyimpan obj dari foreach

    cardRating.forEach((value)=>{
        htmlContent +=
        `<div class="warp__card_oop">
            <img src="${value.image}" class="img_oop" alt="">
            <p class="content_oop">${value.content}</p>
            <p class="name_oop">${value.author}</p>
            <p class="name_oop"><i class="fa-solid fa-star"></i>${value.rating}</p>
        </div>`
    })
    document.getElementById("warp_card_rating").innerHTML = htmlContent //memasukan dan menseleksi html buat hasil dari for ech
}

function filter_rating(rating) {
    const filtered_ratings = cardRating.filter((value) => value.rating === rating);
    const filtered_ratings_HTML = filtered_ratings.map((value) => {
        return `<div class="warp__card_oop">
                    <img src="${value.image}" class="img_oop" alt="">
                    <p class="content_oop">${value.content}</p>
                    <p class="name_oop">${value.author}</p>
                    <p class="name_oop"><i class="fa-solid fa-star"></i>${value.rating}</p>
                </div>`;
    });

    document.getElementById("warp_card_rating").innerHTML = filtered_ratings_HTML.join(" ");
}


allCardRating();//eksekusi funtion 