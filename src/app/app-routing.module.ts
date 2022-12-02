import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { RechercheParRestaurantComponent } from './recherche-par-restaurant/recherche-par-restaurant.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "menus", component : MenusComponent},
  {path: "add-menu", component : AddMenuComponent},
  { path: "", redirectTo: "menus", pathMatch: "full" },
  {path: "updateMenu/:id", component: UpdateMenuComponent},
  {path: "rechercheParRestaurant", component : RechercheParRestaurantComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
