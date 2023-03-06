/* Script */

/* Creating coffee_card*/
function createCard(elem, elem_image, elem_caption, elem_price){
	let parent1 = document.getElementById('cards');	
	let new_card= document.createElement('div');
	new_card.classList.add('coffee_card');
	parent1.appendChild(new_card);
	
	/* Add image */
    let coffee_image = document.createElement('img');
    coffee_image.classList.add('coffee_image');
    coffee_image.src = elem_image;
    new_card.appendChild(coffee_image);
	
	/* Add caption */
	let coffee_caption = document.createElement('div');
	coffee_caption.classList.add('coffee_caption');
	coffee_caption.innerHTML = elem_caption;
	new_card.appendChild(coffee_caption);
	
	/* Add price */
	let coffee_price = document.createElement('div');
	coffee_price.classList.add('coffee_price');
	coffee_price.innerHTML =elem_price;
	new_card.appendChild(coffee_price);
	
	/* Add button order */
	let order_btn = document.createElement('button');
	order_btn.classList.add('order_btn');
	order_btn.innerHTML = 'Order';
	new_card.appendChild(order_btn);

}	


/* function load */
function load(){
	for(let card of products){
	 	createCard(card, card.image, card.caption, card.price)
}
}