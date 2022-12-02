import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { MenuService } from '../services/menu.service';
import { Restaurant } from '../model/restaurant.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit{



newMenu = new Menu();
restaurants! : Restaurant[];
newIdRest! : number;
newRestaurant! : Restaurant;
constructor(private menuService: MenuService,private router :Router) { }

  addMenu(){
    this.newMenu.restaurant = this.restaurants.find(rest => rest.idRest == this.newIdRest)!;
    this.menuService.ajouterMenu(this.newMenu).subscribe((prod) => {
    console.log(prod);
    this.router.navigate(['menus']);
    });
    }




ngOnInit(): void {
  this.menuService.listeRestaurants().
  subscribe(rests => {this.restaurants = rests._embedded.restaurants;
  console.log(rests);
  });
  }


}

