import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagenPage } from '../pages/imagen/imagen';
import { BandaPage } from '../pages/banda/banda';
import { AlbumPage } from '../pages/album/album';
import { RatePage } from '../pages/rate/rate';
import { Imagen2Page } from '../pages/imagen2/imagen2';
import { Banda2Page } from '../pages/banda2/banda2';
import { Album2Page } from '../pages/album2/album2';
import { Rate2Page } from '../pages/rate2/rate2';
import { Imagen3Page } from '../pages/imagen3/imagen3';
import { Banda3Page } from '../pages/banda3/banda3';
import { Album3Page } from '../pages/album3/album3';
import { Rate3Page } from '../pages/rate3/rate3';
import { Imagen4Page } from '../pages/imagen4/imagen4';
import { Banda4Page } from '../pages/banda4/banda4';
import { Album4Page } from '../pages/album4/album4';
import { Rate4Page } from '../pages/rate4/rate4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenPage,
    BandaPage,
    AlbumPage,
    RatePage,
    Imagen2Page,
    Banda2Page,
    Album2Page,
    Rate2Page,
    Imagen3Page,
    Banda3Page,
    Album3Page,
    Rate3Page,
    Imagen4Page,
    Banda4Page,
    Album4Page,
    Rate4Page

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagenPage,
    BandaPage,
    AlbumPage,
    RatePage,
    Imagen2Page,
    Banda2Page,
    Album2Page,
    Rate2Page,
    Imagen3Page,
    Banda3Page,
    Album3Page,
    Rate3Page,
    Imagen4Page,
    Banda4Page,
    Album4Page,
    Rate4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
