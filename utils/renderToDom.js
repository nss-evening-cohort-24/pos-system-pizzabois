const renderToDom = (divId, html) => {
  const targetDiv = document.querySelector(divId);
  targetDiv.innerHTML = html;
};

export default renderToDom;
