import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const menu = (array) => {
  clearDom();
  let domString = '';

  domString += '<h1 id="menu-title">Menu</h1><div class="grid-wrap">';

  array.forEach((res) => {
    domString += `
    <div class="menu-cards" style="width: 18rem">
      <div class="card" id="menu-card">
        <div class="menu-card-body" style="text-align:center;">
          <h5 class="menu-card-title">${res.itemName}</h5>
          <h5 class="card-title">PRICE: ${res.itemPrice}</h5>
          <i class="btn btn-warning" style="background-color:rgb(0, 0, 0);color:white;" id="menu-item-edit-btn--${res.firebaseKey}">Edit Item</i>
          <i class="btn btn-danger" id="menu-item-delete-btn--${res.firebaseKey}">Delete Item</i>
  
        </div>
      </div>
    </div>`;
  });

  domString += `
    </div>
    <div class="menu-details-btn"><button type="button" class="btn btn-dark" id="menu-create-btn-je">Create New Item</button></div>
   `;

  renderToDom('#menu-container', domString);
};

export default menu;
