import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materail/materail.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './AUth/login/login.component';
import { RegisterComponent } from './AUth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { OrderComponent } from './components/order/order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReturnBookComponent } from './components/return-book/return-book.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { ManageCategoryComponent } from './components/manage-category/manage-category.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    LibraryComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    OrdersComponent,
    ReturnBookComponent,
    UserListComponent,
    ManageBooksComponent,
    ManageCategoryComponent,
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost: 7187'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
