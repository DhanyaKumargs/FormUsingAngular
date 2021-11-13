import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{ SignupComponent } from './signup/signup.component';
import{MainApplicationComponent} from './main-application/main-application.component'
import { ResetPasswardComponent } from './reset-passward/reset-passward.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  {path:'main-application',component:MainApplicationComponent},
  {path:'reset-passward',component:ResetPasswardComponent},
  {path:'',component:HomePageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
