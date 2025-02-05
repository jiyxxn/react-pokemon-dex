const toggleBtnType = (e, text, type) => {
  e.target.innerText = text;
  e.target.setAttribute('data-toggle', type);
};

export default toggleBtnType;
