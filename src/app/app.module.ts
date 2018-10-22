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
import { FechaPage } from '../pages/fecha/fecha';
import { CancionesPage } from '../pages/canciones/canciones';
import { RatePage } from '../pages/rate/rate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagenPage,
    BandaPage,
    AlbumPage,
    RatePage,
    CancionesPage

    
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
    CancionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
