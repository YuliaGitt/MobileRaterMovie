import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptHttpClientModule } from '@nativescript/angular' 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { MovieFormComponent } from './movieForm/movieForm.component'
import { NativeScriptFormsModule } from '@nativescript/angular';


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule,
            NativeScriptHttpClientModule,HttpClientModule,
            NativeScriptFormsModule],
  declarations: [AppComponent, ItemsComponent, 
                ItemDetailComponent,MovieFormComponent,],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
