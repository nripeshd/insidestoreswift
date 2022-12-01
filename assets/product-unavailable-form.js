class ProductUnavailableForm extends HTMLElement{constructor(){super();this.root=this.closest(`[data-product-id='${this.dataset.id}']`);this.unavailable_button=this.querySelector('button');if(this.style.display=='none'){this.parentNode.setAttribute('data-empty',!0)}
this.load()}
load(){this.displayListener()}
displayListener(){this.root.addEventListener('variantUpdated',event=>{const variant=event.detail;if(variant&&!variant.available){this.unavailable_button.removeAttribute('disabled');this.style.display='block';this.parentNode.setAttribute('data-empty',!1)}else{this.unavailable_button.setAttribute('disabled',!0);this.style.display='none';this.parentNode.setAttribute('data-empty',!0)}})}}
customElements.define('product-unavailable-root',ProductUnavailableForm)