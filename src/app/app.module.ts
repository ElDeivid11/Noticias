import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { HttpClientModule } from '@angular/common/http';  
import { ProductsPageModule } from './products/products.module';
import { ProductsPage } from './products/products.page';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [AppComponent],  // Aquí solo se declara AppComponent, no LoginPage
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,  // Asegúrate de que el AppRoutingModule esté importado
    BrowserModule,
    HttpClientModule, // Asegúrate de que HttpClientModule esté importado aquí
    ProductsPageModule,
    ProductsPage,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Agrega CUSTOM_ELEMENTS_SCHEMA si estás usando Web Components
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
