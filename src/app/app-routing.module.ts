import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '',  
    loadChildren: () => import('./modules/general/login/login.module')
        .then(mod => mod.LoginModule)
},
  { path: 'people', 
    loadChildren: () => import('./modules/general/about/about.module')
        .then(mod => mod.AboutModule)    
},
{ path: '**', component: NotFoundComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
