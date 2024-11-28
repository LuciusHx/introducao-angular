import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


//path é o que vai ficar na URL, dps eu coloco o nome do component que fica na pasta pages
const routes: Routes = [
  {path: '', component: HomeComponent}
//{ path: 'about', component: AboutComponent }, // Página "Sobre"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
