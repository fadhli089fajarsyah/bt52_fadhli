const angka =[1,2,3,4,5,6,7,8,9]

for (let i = 0; i < angka.length; i++) {
    if( i % 2  === 0) {
        console.log(i + "genap");
    }if( i % 2 === 1) {
        console.log(i + "ganjil");
    }
}