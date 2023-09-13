import viewRevenue from '../pages/viewRevenue';

const domEvents = () => {
  document.querySelector('#landing-page').addEventListener('click', (e) => {
    if (e.target.id.includes('home-view-revenue-btn')) {
      viewRevenue();
    }
  });
};

export default domEvents;
