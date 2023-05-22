import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {  MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadModule  } from 'ng2-file-upload';
import {ToastrModule} from 'ngx-toastr';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from "angular-datatables";
import {ImmatriculationComponent} from "./pages/immatriculation/immatriculation.component";
import {RadarComponent} from "./pages/radar/radar.component";
import {InfractionComponent} from "./pages/infraction/infraction.component";
import {NavbarComponent} from "./pages/component/navbar/navbar.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InfractionComponent,
    RadarComponent,
    ImmatriculationComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NoopAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      easeTime: 500
    }),
    BrowserModule,
    MatProgressSpinnerModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    HttpClientModule, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
