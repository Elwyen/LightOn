//1 Lampa megjelenitese
// constructor(ertek, index, szuloElem)
// 1 div
// ha rakattintok, kivaltodik a kapcsolas esemeny
// ekkor vissza kell tudnia adni egy sorszamot, indexet

export default class Lampa {
  #lampa = {};
  #ertek = true;
  #index = 0;
  #szuloElem = null;
  constructor(ertek, index, szuloElem) {
    this.#ertek = ertek;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.lampaLetrehoz();
    this.lampaElem = $(".lampa:last");


    if (this.#ertek){
        this.lampaElem.addClass("lekapcsolt")
    } else {

        this.lampaElem.addClass("felkapcsolt")
    }


    this.esemenyKezelo();

  }


    esemenyKezelo() {
        this.lampaElem.on("click", () => {
            console.log(this)
          //létrehozunk egy saját eseményt
          const e = new CustomEvent("kapcsol", { detail: this.#index });
          console.log(e)
          window.dispatchEvent(e);
        });
      }






  lampaLetrehoz() {
    this.szuloElem.append(`
                      <div class="lampa lekapcsolt"> 
                      </div>`);
  }
}
