'use strict';
window.addEventListener('DOMContentLoaded', () => {
	let modal = document.querySelector('.modal');
	let servicesButton = document.querySelectorAll('.services__button');
	let sendButton = document.querySelector('.main__button-send');

	servicesButton.forEach((item) => {
		item.addEventListener('click', () => {
			modal.style.display = 'flex';
		});
	});

	sendButton.addEventListener('click', () => {
		modal.style.display = 'flex';
	})

	let modalClose = document.querySelector('.modal .modal__close');
	modalClose.addEventListener('click', () => {
		modal.style.display = 'none';
	});

	// Табы

	const btn1 = document.querySelector('.price__btn');
	const btn2 = document.querySelector('.price__btn-2');
	const content1 = document.querySelector('.price__content');
	const content2 = document.querySelector('.price__content-2');

	btn1.addEventListener('click', () => {
		content1.style.display="block";
		content2.style.display="none";
		btn2.style.cssText = 'background: transparent; color: #F55D3E; border: 1px solid #F55D3E';
		btn1.style.cssText = 'background: #F55D3E; color: #fff; border: none';
	});

	btn2.addEventListener('click', () => {
		content1.style.display="none";
		content2.style.display="block";
		btn1.style.cssText = 'background: transparent; color: #F55D3E; border: 1px solid #F55D3E';
		btn2.style.cssText = 'background: #F55D3E; color: #fff; border: none';
	});

	// Tабы 2
	const button = document.querySelector('.accounting__button');
	const button_2 = document.querySelector('.accounting__button-2');
	const button_3 = document.querySelector('.accounting__button-3');
	const button_4 = document.querySelector('.accounting__button-4');
	const button_5 = document.querySelector('.accounting__button-5');
	const button_6 = document.querySelector('.accounting__button-6');

	const content = document.querySelector('.accounting__content');
	const content_2 = document.querySelector('.accounting__content-2');
	const content_3 = document.querySelector('.accounting__content-3');
	const content_4 = document.querySelector('.accounting__content-4');
	const content_5 = document.querySelector('.accounting__content-5');
	const content_6 = document.querySelector('.accounting__content-6');

	button.addEventListener('click', () => {
		content.style.display="block";
		content_2.style.display="none";
		content_3.style.display="none";
		content_4.style.display="none";
		content_5.style.display="none";
		content_6.style.display="none";
		button.style.cssText = 'background: #F55D3E; color: #fff; border: none';
		button_2.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_3.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_4.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_5.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_6.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
	});

	button_2.addEventListener('click', () => {
		content.style.display="none";
		content_2.style.display="block";
		content_3.style.display="none";
		content_4.style.display="none";
		content_5.style.display="none";
		content_6.style.display="none";
		button.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_2.style.cssText = 'background: #F55D3E; color: #fff; border: none';
		button_3.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_4.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_5.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_6.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
	});

	button_3.addEventListener('click', () => {
		content.style.display="none";
		content_2.style.display="none";
		content_3.style.display="block";
		content_4.style.display="none";
		content_5.style.display="none";
		content_6.style.display="none";
		button.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_2.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_3.style.cssText = 'background: #F55D3E; color: #fff; border: none';
		button_4.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_5.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_6.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
	});

	button_4.addEventListener('click', () => {
		content.style.display="none";
		content_2.style.display="none";
		content_3.style.display="none";
		content_4.style.display="block";
		content_5.style.display="none";
		content_6.style.display="none";
		button.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_2.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_3.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_4.style.cssText = 'background: #F55D3E; color: #fff; border: none';
		button_5.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_6.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
	});

	button_5.addEventListener('click', () => {
		content.style.display="none";
		content_2.style.display="none";
		content_3.style.display="none";
		content_4.style.display="none";
		content_5.style.display="block";
		content_6.style.display="none";
		button.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_2.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_3.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_4.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_5.style.cssText = 'background: #F55D3E; color: #fff; border: none';
		button_6.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
	});

	button_6.addEventListener('click', () => {
		content.style.display="none";
		content_2.style.display="none";
		content_3.style.display="none";
		content_4.style.display="none";
		content_5.style.display="none";
		content_6.style.display="block";
		button.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_2.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_3.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_4.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_5.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
		button_6.style.cssText = 'background: #F55D3E; color: #fff; border: none';
	});
	

});
