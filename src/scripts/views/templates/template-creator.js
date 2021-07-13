import CONFIG from '../../globals/config';

const createRestaurantsItemTemplate = (restaurant) => `
    <div class="col-3">
      <div class="post-item">
        <div class="card">
            <img class="lazyload img-rounded" data-src="${`${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`}" id="img-blog" alt="${restaurant.name}">
            <div class="card-body">
                <p class="text-success"><b>City : ${restaurant.city}</b></p>
                <br>
                  <h3 class="post-title"><a href="${`/#/detail/${restaurant.id}`}" class="card-title">${restaurant.name}</a></h3>
                <br>
                <br>
                <p><small>${restaurant.description.slice(0, 200)}...</small></p>
            </div>
            <div class="card-footer text-danger">
                <b>Ratings : ${restaurant.rating} ⭐️</b>
            </div>
        </div>
        </div>
    </div>
`;

const createRestaurantsDetailTemplate = (restaurant) => `
    <h2 id="explore" class="detail-title">${restaurant.name}</h2>
    <br>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-6" id="destaurant-deskripsi">
        <img class="lazyload img-fluid" data-src="${`${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`}" 
            alt="${restaurant.name}">
        <div class="clearfix"></div>
        <br>
        <h3>Description</h3>
        <p>${restaurant.description}</p>
        <br>
      </div>
      <div class="col-6" id="restaurant-info">
        <h3>Information</h3>
        <h3>Ratings</h3>
        <p>${restaurant.rating} ⭐️</p>
        <h3>City</h3>
        <p>${restaurant.city}</p>
        <h3>Address</h3>
        <p>${restaurant.address}</p>
        <h3>Categories</h3>
        <p>
          <ul style="margin-left:2pc;">
            ${restaurant.categories.map((category) => `<li class="menu-item">${category.name}</li>`).join(' ')}
          </ul>            
        </p>
        <h3>Menus</h3>
        <div class="row">
          <div class="col-6">
            <h4>Foods</h4>
            <p>
              <ul style="margin-left:2pc;">
                ${restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
              </ul>
            </p>
          </div>
          <div class="col-6">
            <h4>Drinks</h4>
            <p>
              <ul style="margin-left:2pc;">
                ${restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    <br>
    <hr>
    <div id="customerReviews">
      <h3>Customer Reviews</h3>
      ${restaurant.customerReviews.map((review) => `
        <div class="card">
          <div class="card-body">
            <h3> ${review.name} </h3>
            <p class="p-reviews">${review.review} </p>
            <small class="text-success"> ${review.date} </small>
          </div>
        </div>
      `).join(' ')}
    </div>
  `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
