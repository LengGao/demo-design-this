class Title extends HTMLElement{
  constructor () {
    super();
    this.style.fontSize = '18px'
    var title = document.createElement('h3')
    title.innerHTML = this.getAttribute('ti')
    this.insertAdjacentElement('beforebegin',title)
  }
}

customElements.define('my-title',Title)