class Manusia {
    constructor(obj = {}) {
        this.name = obj.name || "";
        this.age = obj.age || 1;
    }
    getNameAndAge() {
        return `${this.name} and ${this.age} years`;
    }
}

const budi = new Manusia({
    age: 18,
    name: "budi baikhati"
});

//console.log(budi);

class Pekerjaan extends Manusia {
    constructor(obj = {}) {
        super(obj);
        this.pekerjaan = obj.pekerjaan || '';
        this.bekerjaSejak = obj.bekerjaSejak || '';
    }
    render() {
        let kerja = "masih bisa kerja";

        if (this.age >= 50)
            kerja = "tidak boleh kerja keras";

        return `
        <h1>${this.name}</h1>
        <h2>${kerja}</h2>
        `;
    }
}

class Rumah extends Pekerjaan {
    showAlamat(){
        return `alamat tinggal di ${this.alamat}`
    }
}

// const PakDe = new Pekerjaan({
//     name: "Kumis Panjang",
//     age: 75,
//     pekerjaan: "Tukang Pijat"
// });

// const BuDe = new Pekerjaan({
//     name: "Jeng Juminten",
//     age:18,
//     pekerjaan: "Tukang Masak",
//     bekerjaSejak: "1999"
// })
debugger;
const rumahA01 = new Rumah({
    name :"Bill",
    alamat: "Batam Center"
})
rumahA01.showAlamat();
// console.log(PakDe);
// PakDe.render();
// BuDe.getNameAndAge();