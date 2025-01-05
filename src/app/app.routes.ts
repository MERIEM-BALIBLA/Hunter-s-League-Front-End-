import { Routes } from '@angular/router';
import { UserComponent } from './components/Users/user/user.component';
import { HomeComponent } from './components/Page/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { authGuardGuard } from './guard/auth/auth-guard.guard';
import { roleGuardGuard } from './guard/role/role-guard.guard';
import { UnauthorisedComponent } from './components/unauthorised/unauthorised.component';
import { CompetitionComponent } from './components/Competitions/competition/competition.component';
import { SpeciesComponent } from './components/Speciess/species/species.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/Page/profile/profile.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        // pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "users",
        component: UserComponent,
        canActivate: [authGuardGuard, roleGuardGuard],
        data: { roles: ['ADMIN'] } 
    },
    {
        path: "competitions",
        component: CompetitionComponent,
        canActivate: [authGuardGuard, roleGuardGuard],
        data: { roles: ['ADMIN'] } 

    },
    
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: SignupComponent
    },

    // species
    {
        path: "species",
        component: SpeciesComponent,
        canActivate: [authGuardGuard, roleGuardGuard],
        data: { roles: ['ADMIN'] } 
    },


    {
        path: "unauthorised",
        component: UnauthorisedComponent
    },
    {
        path: "dash",
        component: DashboardComponent,
        canActivate: [authGuardGuard, roleGuardGuard],
        data: { roles: ['ADMIN'] } 
    },
    {
        path: "settings",
        component: ProfileComponent,
        canActivate: [authGuardGuard],
        // data: {role: ['MEMBER']}
    }
];