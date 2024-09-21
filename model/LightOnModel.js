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
    this.#lista[id] =! this.#lista[id]
    console.log(this.#lista[id])
    //megvaltoztatja a szomszedokat
        if (id-1>=0 && id-1<9) {
            this.#lista[id-1]=!this.#lista[id-1];
            }
  }
}
