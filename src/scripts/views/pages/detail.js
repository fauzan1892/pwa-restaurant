import UrlParser from '../../routes/url-parser';
import TheRestaurantCatalogueDbSource from '../../data/thecataloguedb-source';
import { createRestaurantsDetailTemplate, createLoadingTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    const html = `
          ${document.querySelector('main').innerHTML = createLoadingTemplate.show()}
          <div class="details">
            <div class="container">
              <div id="restaurant"></div>
              <div id="likeButtonContainer"></div>
            </div>
          </div>
        `;
    return html;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantCatalogueDbSource.detailRestaurantCatalogues(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantsDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
    createLoadingTemplate.remove();
  },
};

export default Detail;
