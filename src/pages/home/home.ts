import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenPage } from '../imagen/imagen';
import { BandaPage } from '../banda/banda';
import { AlbumPage } from '../album/album';
import { FechaPage } from '../fecha/fecha';
import { RatePage } from '../rate/rate';
import { CancionesPage } from '../canciones/canciones';
import { TracksPage } from '../tracks/tracks';
import { Rate2Page } from '../rate2/rate2';
import { Album2Page } from '../album2/album2';
import { Banda2Page } from '../banda2/banda2';
import { Imagen2Page } from '../imagen2/imagen2';

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
 
 

}
