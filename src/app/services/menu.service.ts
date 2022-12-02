import { Restaurant } from './../model/restaurant.model';
import { Injectable, OnInit } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { restaurantWrapper } from '../model/restaurantWrapped.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
providedIn: 'root'
})

export class MenuService {
apiURL: string = 'http://localhost:8082/menus/api';
apiURLRest: string ='http://localhost:8082/menus/rest';


menu! : Menu;
restaurants: Restaurant[] = [];


constructor(private http : HttpClient) {
  /*this.restaurants = [ {idRest : 1, nomRest : "Popolare"},
  {idRest : 2, nomRest : "Village"}];*/
  /*this.menus = [
  { idMenu : 1, nomMenu : "Jus", prixMenu : 4.500,restaurant : {idRest : 1, nomRest : "Popolare"}},
  { idMenu : 2, nomMenu : "Café", prixMenu : 3.500,restaurant : {idRest : 2, nomRest : "Village"}},
  { idMenu : 3, nomMenu :"Poulet Mexicain", prixMenu : 16.900,restaurant : {idRest : 1, nomRest : "Popolare"}}
  ];*/
  }

listeRestaurants():Observable<restaurantWrapper>{
      return this.http.get<restaurantWrapper>(this.apiURLRest);
    }


listeMenu(): Observable<Menu[]>{
  return this.http.get<Menu[]>(this.apiURL);
  }

ajouterMenu( prod: Menu):Observable<Menu>{
  return this.http.post<Menu>(this.apiURL, prod, httpOptions);
  }

    supprimerMenu(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterMenu(id: number): Observable<Menu> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Menu>(url);
        }

        updateMenu(prod :Menu) : Observable<Menu>
        {
        return this.http.put<Menu>(this.apiURL, prod, httpOptions);
        }

        rechercherParRestaurant(idRest: number):Observable< Menu[]> {
          const url = `${this.apiURL}/prodscast/${idRest}`;
          return this.http.get<Menu[]>(url);
          }

          rechercherParNom(nom: string):Observable< Menu[]> {
            const url = `${this.apiURL}/prodsByName/${nom}`;
            return this.http.get<Menu[]>(url);
            }


}

