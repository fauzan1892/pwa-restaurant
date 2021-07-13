import TheRestaurantCatalogueDbSource from '../../data/thecataloguedb-source';
import { createRestaurantsItemTemplate } from '../templates/template-creator';

const Catalogues = {
  async render() {
    return `
          <!-- hero banner-->
            <div class="hero-banner">
              <div class="hero-cover">
                <div class="container">
                  <div class="hero-text">
                    <h1>
                      Ciptakan Momen Kuliner Kamu
                    </h1>
                    <br>
                    <p>
                      Jelajahi dan temukan tempat makan lezat di sekitar Anda, 
                      dari jajanan kaki lima hingga hidangan gourmet masa kini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <!-- hero banner -->
          <div class="explore">
            <div class="container">
              <h2 class="text-center" id="explore">Explore Restaurant</h2>
              <br>
              <div class="clearfix"></div>
              <div id="restaurants" class="row"></div>
            </div>
          </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantCatalogueDbSource.nowRestaurantCatalogues();
    // console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default Catalogues;
