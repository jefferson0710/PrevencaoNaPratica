import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DrogasComponent } from './pages/drogas/drogas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmailService } from './serve';

@NgModule({
  declarations: [
    AppComponent,
    SobrenosComponent,
    ContatoComponent,
    HomeComponent,
    DrogasComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing',
      tapToDismiss: true,
      extendedTimeOut: 1000,
      toastClass: 'custom-toast',
    }),
    BrowserAnimationsModule
  ],
  providers: [EmailService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
