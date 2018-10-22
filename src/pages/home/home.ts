import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagenPage } from '../imagen/imagen';
import { BandaPage } from '../banda/banda';
import { AlbumPage } from '../album/album';
import { FechaPage } from '../fecha/fecha';
import { RatePage } from '../rate/rate';
import { CancionesPage } from '../canciones/canciones';
import { TracksPage } from '../tracks/tracks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imagen1 = ImagenPage;
nombre1 = BandaPage;
album1 = AlbumPage;
estrellas1 = RatePage;
canciones1 = CancionesPage;

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
  Can1(){
    this.navCtrl.push(this.canciones1); 
  }
 

}
