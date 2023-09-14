import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id="home-page-logo-btn" src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Bootstrap" width="47" height="48"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" id="view-orders-nav-btn">View Orders</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-orders-nav-btn">Create an Order</a>
            </li>
          </ul>
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search Orders" aria-label="Search" id="search-bar-nav-item">
          <button class="btn btn-danger" id="logout-nav-btn" type="button">Logout</button>
      </form>
    </div>
  </div>
</nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
