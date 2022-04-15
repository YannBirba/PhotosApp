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
import { AuthGuard } from 'src/shared/guards/auth-guard.guard';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { eventsReducer } from 'src/shared/state/event/events.reducer';
import { environment } from 'src/environments/environment';
import { EventEffects } from 'src/shared/state/event/events.effects';
import { EffectsModule } from '@ngrx/effects';
import { ToastInterceptorService } from 'src/shared/services/toastInterceptor/toast-interceptor.service';
import { EventService } from 'src/shared/services/event/event.service';
import { GroupService } from 'src/shared/services/group/group.service';
import { ImageService } from 'src/shared/services/image/image.service';
import { UserService } from 'src/shared/services/user/user.service';
import { AuthEffects } from 'src/shared/state/auth/auth.effects';
import { authReducer } from 'src/shared/state/auth/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ events: eventsReducer, currentUser: authReducer }),
    EffectsModule.forRoot([EventEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [
    AuthService,
    EventService,
    GroupService,
    ImageService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookieInterceptorService,
      multi: true,
    },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToastInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
