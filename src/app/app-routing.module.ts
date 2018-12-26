import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LayoutComponent } from './core/layout/layout.component';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: 'error', component: ErrorComponent },
  { path: "login", loadChildren: './login/login.module#LoginModule' },
  {
    path: "app", component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    ]
  },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
