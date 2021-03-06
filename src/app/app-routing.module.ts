import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/1/auth/auth.guard';
import { LoginComponent } from 'src/app/1/auth/login/login.component';
import { SignupComponent } from 'src/app/1/auth/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "me",
    loadChildren: () => import("./me/me.module").then((m) => m.MePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'browse',
    loadChildren: () => import('./browse/browse.module').then(m => m.BrowsePageModule),
    canActivate: [AuthGuard],  
  },
  {
    path: 'single-task/:taskId',
    loadChildren: () => import('./single-task/single-task.module').then(m => m.SingleTaskPageModule),
    canActivate: [AuthGuard],
    
  },
  {
    path: 'my-tasks',
    loadChildren: () => import('./my-tasks/my-tasks.module').then(m => m.MyTasksPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'finance',
    loadChildren: () => import('./finance/finance.module').then( m => m.FinancePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
