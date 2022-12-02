import { MenuService } from './../services/menu.service';
import { Restaurant } from './../model/restaurant.model';
import { Menu } from './../model/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-restaurant',
  templateUrl: './recherche-par-restaurant.component.html',
  styles: [
  ]
})
export class RechercheParRestaurantComponent implements OnInit{
  menus! : Menu[];
  IdRestaurant! : number;
  restaurants! : Restaurant[];

constructor(private menuService : MenuService) { }

ngOnInit(): void {
  this.menuService.listeRestaurants().
  subscribe(rests => {this.restaurants = rests._embedded.restaurants;
  console.log(rests);
  });
  }

    onChange() {
      this.menuService.rechercherParRestaurant(this.IdRestaurant).subscribe(prods =>{this.menus=prods});
      }


}
