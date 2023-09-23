import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const menu = (array) => {
  clearDom();
  let domString = '';

  domString += '<h1 id="menu-title" class="mb-5">Menu</h1><div class="grid-wrap">';

  array.forEach((res) => {
    domString += `
    <div class="menu-cards" style="width: 20rem">
      <div class="card" id="menu-card">
        <div class="menu-card-body" style="text-align:center;">
          <h4 class="menu-card-title">${res.itemName}</h4>
          <hr style="width:30%;margin:0 auto;margin-top:10px;">
          <h6 class="card-body">${res.itemDescription}</h6>
          <h5 class="card-title">$${res.itemPrice}</h5>
          <div class="menu-btns" style="position:absolute;margin: 0 auto;left:0;right:0;bottom:13px;">
            <i class="btn btn-dark" style="color:white;width:40%;border: 2px solid darkred" id="menu-item-edit-btn--${res.firebaseKey}">Edit Item</i>
            <i class="btn btn-danger" style="width:40%;border: 2px solid black;"id="menu-item-delete-btn--${res.firebaseKey}">Delete Item</i>
          </div>
        </div>
      </div>
    </div>`;
  });

  domString += `
    </div>
    <div class="menu-details-btn mb-5 mt-5"><button type="button" class="btn btn-dark" id="menu-create-btn-je">Create New Item</button></div>
   `;

  renderToDom('#menu-container', domString);
};

export default menu;
