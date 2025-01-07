import { Routes } from '@angular/router';
import { UserComponent } from './components/Users/user/user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UnauthorisedComponent } from './components/unauthorised/unauthorised.component';
import { SpeciesComponent } from './components/Speciess/species/species.component';
import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
import { authGuardGuard } from './core/guard/auth/auth-guard.guard';
import { roleGuardGuard } from './core/guard/role/role-guard.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './shared/home/home.component';
import { CompetitionComponent } from './components/Competitions/competition/competition.component';
import { SpeciesPageComponent } from './shared/species-page/species-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
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
    },
    {
        path: "species_page",
        component: SpeciesPageComponent,
        canActivate: [authGuardGuard],
    }
];