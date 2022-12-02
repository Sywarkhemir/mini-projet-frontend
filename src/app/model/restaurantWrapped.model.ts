
import { Restaurant } from './restaurant.model';

export class restaurantWrapper{
_embedded!: { restaurants: Restaurant[]};
}
