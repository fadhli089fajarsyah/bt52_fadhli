/**
oop
class
object
Inheritance (Pewarisan)
Polymorphism (untuk mengambil banyak bentuk objek)
encapsulation(membuat isi dalam class atau object menjadi privasi atau memprotek)
 */

class Card {
    #image = "";
    #content = "";
    #author = "";

    constructor(image, content, author) {
        this.#image = image;
        this.#content = content;
        this.#author = author;
    }

    set image(val) {
        this.#image = val;
    }
    set content(val) {
        this.#content = val;
    }
    set author(val) {
        this.#author = val;
    }

    get image() {
        return this.#image;
    }
    get content() {
        return this.#content;
    }
    get author() {
        return this.#author;
    }

    html() {
        throw new Error("Pilih author company / person");
    }
}

class Person extends Card {
    html() {
        return `
            <div class="warp__card_oop">
                <img src="${this.image}" class="img_oop" alt="">
                <p class="content_oop">${this.content}</p>
                <p class="name_oop">${this.author}</p>
            </div>
        `;
    }
}

class Company extends Card {
    html() {
        return `
            <div class="warp__card_oop">
                <img src="${this.image}" class="img_oop" alt="">
                <p class="content_oop">${this.content}</p>
                <p class="name_oop">${this.author} company</p>
            </div>
        `;
    }
}

const card1 = new Company("https://thumb.viva.co.id/media/frontend/thumbs3/2020/05/19/5ec38e767531e-bos-facebook-mark-zuckerberg_1265_711.jpg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum distinctio odio, architecto veniam voluptas aliquam similique magni consectetur odit minus iste sequi rerum iure temporibus cum porro dolorum labore maiores consequatur enim quibusdam, ratione quam at. Ratione, sunt. Ipsum. ", "mark");
const card2 = new Company("https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/02/Elon-Mask-4277837640.jpg", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum distinctio odio, architecto veniam voluptas aliquam similique magni consectetur odit minus iste sequi rerum iure temporibus cum porro dolorum labore maiores consequatur enim quibusdam, ratione quam at. Ratione, sunt. Ipsum. ", "elon");
const card3 = new Person("https://akcdn.detik.net.id/community/media/visual/2019/01/21/3e026a4d-789a-468d-81cf-a325a9fd47ff_43.jpeg?w=700&q=90", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum distinctio odio, architecto veniam voluptas aliquam similique magni consectetur odit minus iste sequi rerum iure temporibus cum porro dolorum labore maiores consequatur enim quibusdam, ratione quam at. Ratione, sunt. Ipsum. ", "milea");

const cards = [card1, card2,card3];
let cardHtml = "";

for (let i = 0; i < cards.length; i++) {
    cardHtml += cards[i].html();
}

document.getElementById("card").innerHTML = cardHtml;
