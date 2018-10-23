import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenPage } from '../imagen/imagen';
import { BandaPage } from '../banda/banda';
import { AlbumPage } from '../album/album';
import { RatePage } from '../rate/rate';
import { Rate2Page } from '../rate2/rate2';
import { Album2Page } from '../album2/album2';
import { Banda2Page } from '../banda2/banda2';
import { Imagen2Page } from '../imagen2/imagen2';
import { Imagen3Page } from '../imagen3/imagen3';
import { Banda3Page } from '../banda3/banda3';
import { Album3Page } from '../album3/album3';
import { Rate3Page } from '../rate3/rate3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen1 = ImagenPage;
nombre1 = BandaPage;
album1 = AlbumPage;
estrellas1 = RatePage;
imagen2 = Imagen2Page;
nombre2 = Banda2Page;
album2 = Album2Page;
estrellas2 = Rate2Page;
imagen3 = Imagen3Page;
nombre3 = Banda3Page;
album3 = Album3Page;
estrellas3 = Rate3Page;

constructor(public navCtrl: NavController) {

  }
  Img1(){
    this.navCtrl.push(this.imagen1); 
  }
  Ban1(){
    this.navCtrl.push(this.nombre1); 
  }
  Album1(){
      this.navCtrl.push(this.album1); 
  }
  Rate1(){
    this.navCtrl.push(this.estrellas1); 
  }
  Img2(){
    this.navCtrl.push(this.imagen2); 
  }
  Ban2(){
    this.navCtrl.push(this.nombre2); 
  }
  Album2(){
      this.navCtrl.push(this.album2); 
  }
  Rate2(){
    this.navCtrl.push(this.estrellas2); 
  }
  Img3(){
    this.navCtrl.push(this.imagen3); 
  }
  Ban3(){
    this.navCtrl.push(this.nombre3); 
  }
  Album3(){
      this.navCtrl.push(this.album3); 
  }
  Rate3(){
    this.navCtrl.push(this.estrellas3); 
  }
 
 

}
