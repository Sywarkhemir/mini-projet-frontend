import { Menu } from './../model/menu.model';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit{
nomMenu! : string;
menus! : Menu[];
constructor(private menuService : MenuService) { }
  ngOnInit(): void {

  }


  rechercherProds(){
    this.menuService.rechercherParNom(this.nomMenu).
    subscribe(prods => {
    this.menus = prods;
    console.log(prods)});

    }

}
