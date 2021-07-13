import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantCatalogueDbSource {
  static async nowRestaurantCatalogues() {
    const response = await fetch(API_ENDPOINT.CATALOGUES);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurantCatalogues(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default TheRestaurantCatalogueDbSource;
