import { Restaurant } from './../model/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Menu } from '../model/menu.model';


@Component({
selector: 'app-update-menu',
templateUrl: './update-menu.component.html',
styles: [ ]
})

export class UpdateMenuComponent implements OnInit {

  currentMenu = new Menu();
  restaurants! : Restaurant[];
  updatedRestId! : number;


      constructor(private activatedRoute: ActivatedRoute,private router :Router,private menuService: MenuService)
        { }

        ngOnInit(): void {
          this.menuService.listeRestaurants().
          subscribe(rests => {this.restaurants = rests._embedded.restaurants;
          console.log(rests);
          });
          this.menuService.consulterMenu(this.activatedRoute.snapshot.params['id']).
          subscribe( prod =>{ this.currentMenu = prod;
          this.updatedRestId =
          this.currentMenu.restaurant.idRest;
          } ) ;

          }


        UpdateMenu() {
          this.currentMenu.restaurant = this.restaurants.find(rest => rest.idRest == this.updatedRestId)!;
          this.menuService.updateMenu(this.currentMenu).subscribe(prod => {
          this.router.navigate(['menus']); }
          );
}
}
