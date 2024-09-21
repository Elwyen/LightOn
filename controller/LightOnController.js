// peldanyositja a modellt, es a view: JatekTer osztalyt
//feliratkozik a kapcsol sajat esemenyunkre - itt fogja meghivogatni a modell tagfuggvenyeit
import LightOnModel from "../model/LightOnModel.js";
import JatekTer from "../view/Jatekter.js";
import Lampa from "../view/Lampa.js";

export default class LightOnController {
  constructor() {
    this.loModel = new LightOnModel();
    this.szuloElem = $(".tartalom");
    let lista = this.loModel.getLista();
    new JatekTer(lista, this.szuloElem);

    this.kapcsolEsemeny();


  }

  kapcsolEsemeny(){
    $(window).on("kapcsol", (event) => {
        //console.log(event.detail); // Print the selected card's data
        //console.log(kivalasztottItem); // Print the selected item
        this.loModel.szomszedokKapcsolasa(event.detail);
        let lista = this.loModel.getLista();
        new JatekTer(lista, this.szuloElem);
      });
  }
}
