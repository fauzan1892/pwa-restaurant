import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantsItemTemplate, createLoadingTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    const html = `
        ${document.querySelector('main').innerHTML = createLoadingTemplate.show()}
        <div class="explore">
          <div class="container" style="padding-top:6pc;">
            <h2 class="text-center" id="explore">Favorite Restaurant</h2>
            <br>
            <div class="clearfix"></div>
            <div id="restaurants" class="row"></div>
          </div>
        </div>
        `;
    return html;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
      });
    } else {
      document.querySelector('#restaurants').innerHTML = `<div class="empty-favorite-tag">
        <p>Favorite restaurant still empty</p>
    </div>`;
    }
    createLoadingTemplate.remove();
  },
};

export default Like;
