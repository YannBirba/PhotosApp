import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from 'src/shared/services/auth/auth.service';
import { CookieInterceptorService } from 'src/shared/services/cookieInterceptor/cookie-interceptor.service';

@NgModule({
  declarations: [AppComponent, MenuComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpClientModule,
    AuthService,
{
  provide: HTTP_INTERCEPTORS,
  useClass: CookieInterceptorService,
  multi: true,
},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

