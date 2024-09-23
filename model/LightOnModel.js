// Mi jellemzi a program allapotat?
// lista[True,False,True,False,False,True,False,True,True]
// True - fel van kapcsolva a lampa
// AktIndex - az az index amelyik lampara epp rakattintottam

//getLista() - viszaadja a listat, az aktualis allapottal

//szomszedokKapcsolasa(id) - megvaltoztatja a listaban az id elem erteket, es azok szomszedjait is.

export default class LightOnModel {
  #lista = [true, true, true, true, true, true, true, true, true];
  #aktIndex;
  constructor() {
    this.#aktIndex = 0;
  }

  getLista() {
    return this.#lista;
  }

  szomszedokKapcsolasa(id) {
    //megvaltoztatja a listaban az aktualis elemet
    // this.#lista[this.#aktIndex]=!this.#lista[this.#aktIndex];
    //this.#lista[id] = !this.#lista[id];
    const szomszedok = this.getSzomszedok(id);
    this.#lista[id] = !this.#lista[id];
    console.log(this.#lista[id]);
    //megvaltoztatja a szomszedokat
    szomszedok.forEach(szomszed => {
      this.#lista[szomszed] = !this.#lista[szomszed]
    })
  }


// szomszedok felallasa
// 1 2 3
// 4 5 6
// 7 8 9


// 0 1 2
// 3 4 5
// 6 7 8


  getSzomszedok(id){
    const szomszedokMap = {
      0: [1,3],
      1: [0,2,4],
      2: [1,5],
      3: [0,4,6],
      4: [1,3,5,7],
      5: [2, 4, 8],
      6: [3, 7],
      7: [4, 6, 8],
      8: [5, 7],
    }
    return  szomszedokMap[id] || [];

  }


}
