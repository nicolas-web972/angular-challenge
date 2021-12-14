import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: UserProfileComponent },
] ;

export { ROUTES };
