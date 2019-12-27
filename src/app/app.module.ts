import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AngularDraggableModule } from 'angular2-draggable';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookModule } from 'ngx-facebook';
import { Plot1Component } from './plot1/plot1.component';
import { Plot2Component } from './plot2/plot2.component';
import { Plot3Component } from './plot3/plot3.component';
import { Plot4Component } from './plot4/plot4.component';
import { DataService } from './data.service';
import { FilterService  } from './formulars/filter.service';
import { Iir2ndOrderConjCmplxService } from './formulars/iir-2nd-order-conj-cmplx.service';
import { PolyService  } from './formulars/poly.service';
import { ShelvingCutService  } from './formulars/shelving-cut.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Plot1Component,
    Plot2Component,
    Plot3Component,
    Plot4Component,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FacebookModule.forRoot(),
    HttpClientModule,
    ChartsModule,
    MatSliderModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AngularDraggableModule

  ],
  providers: [DataService,
    FilterService,
    Iir2ndOrderConjCmplxService,
    PolyService,
    ShelvingCutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
