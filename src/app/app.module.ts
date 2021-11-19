import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';//bu componenet home componenti burayla bağlar.
import { AboutComponent } from './components/about/about.component';//bu componenet about componenti burayla bağlar.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';//bu module toolbar için gereken ayarları yapar.
import {MatIconModule} from '@angular/material/icon';//bu module iconlar için gereken ayarları yapar.
import {MatButtonModule} from '@angular/material/button';//bu module buttonlar için gereken ayarları yapar.

import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/main/main.component';
import { PropertyComponent } from './components/property/property.component';
import { AgentyComponent } from './components/agenty/agenty.component';
import { ContactComponent } from './components/contact/contact.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { FakeusersComponent } from './components/fakeusers/fakeusers.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ResimGenelComponent } from './components/resim-genel/resim-genel.component';
import { AgentyCardsComponent } from './components/agenty-cards/agenty-cards.component';
import { AboutCardsComponent } from './components/about-cards/about-cards.component';
import { ManagementDashboardComponent } from './components/management-dashboard/management-dashboard.component';
import { ManagementCardsComponent } from './components/management-cards/management-cards.component';
import { ManagementTablesComponent } from './components/management-tables/management-tables.component';
import { ManagementAdminsettingsComponent } from './components/management-adminsettings/management-adminsettings.component';
import { MainUpdateComponent } from './components/main-update/main-update.component';
import { HomeManagementComponent } from './components/home-management/home-management.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeRegisterComponent } from './components/home-register/home-register.component';
import { ManagementComponent } from './components/management/management.component';
import { ManagementProfilComponent } from './components/management-profil/management-profil.component';
import { ManagementProfilSettingsComponent } from './components/management-profil-settings/management-profil-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    MainComponent,
    PropertyComponent,
    AgentyComponent,
    ContactComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    FakeusersComponent,
    ContactFormComponent,
    ResimGenelComponent,
    AgentyCardsComponent,
    AboutCardsComponent,
    ManagementDashboardComponent,
    ManagementCardsComponent,
    ManagementTablesComponent,
    ManagementAdminsettingsComponent,
    MainUpdateComponent,
    HomeManagementComponent,
    HomeUserComponent,
    HomeRegisterComponent,
    ManagementComponent,
    ManagementProfilComponent,
    ManagementProfilSettingsComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
 
   
    //MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
