//kap egy listat a construktorjaban(lista, szuloElem)
//peldanyositja a lampakat attol fuggoen hany eleme van a listanak(9db)
// 
import Lampa from "./Lampa.js"

export default class JatekTer {
    #lista =[]
    #taroloElem;
    constructor(lista, taroloELEM) {
        this.#lista=lista
        this.#taroloElem=taroloELEM
        this.#taroloElem.empty()
        this.kiir()

    }
    kiir(){
        this.#lista.forEach((elem, index) => {
            new Lampa(elem,index, this.#taroloElem)
    });
}
}