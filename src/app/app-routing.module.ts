import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from 'src/shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'user', redirectTo: 'user', pathMatch: 'full' },
  { path: 'login', redirectTo: 'user', pathMatch: 'full' },
  { path: 'register', redirectTo: 'user', pathMatch: 'full' },
  { path: 'forgot-password', redirectTo: 'user', pathMatch: 'full' },
  // { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
