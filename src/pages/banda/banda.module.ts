import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandaPage } from './banda';

@NgModule({
  declarations: [
    BandaPage,
  ],
  imports: [
    IonicPageModule.forChild(BandaPage),
  ],
})
export class BandaPageModule {}
