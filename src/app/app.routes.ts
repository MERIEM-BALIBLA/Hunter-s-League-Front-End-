import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CompetitionComponent } from './components/Competitions/competition/competition.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "users",
        component: UserComponent
    },
    {
        path: "competitions",
        component: CompetitionComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: SignupComponent
    }
];
