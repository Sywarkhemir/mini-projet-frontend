import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit{
  menus? : Menu[];

    constructor(private menuService : MenuService ) {
      //this.menus=[];
      }
  ngOnInit(): void {
      this.chargerMenus();

      }


  chargerMenus(){
    this.menuService.listeMenu().subscribe(prods => {
    console.log(prods);
    this.menus = prods;
    });
    }


supprimerMenu(p: Menu)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.menuService.supprimerMenu(p.idMenu!).subscribe(() => {
console.log("Menu supprimé");
this.chargerMenus();
});
} }






