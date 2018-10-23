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
    Rate2Page

    
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
    Rate2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
