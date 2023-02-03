'use strict';
window.addEventListener('DOMContentLoaded', () => {

	// Модальное окно
	let modal = document.querySelector('.modal');
	let servicesButton = document.querySelectorAll('.services__button');
	let modalContent = document.querySelector('.modal__content');
	let sendButton = document.querySelector('.main__button-send');
	let modalContentForm = document.querySelector('.modal__content-form');

	servicesButton.forEach((item) => {
		item.addEventListener('click', () => {
			modal.style.display = 'flex';
			modalContent.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	});

	sendButton.addEventListener('click', () => {
		modal.style.display = 'flex';
		modalContentForm.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})

	let modalClose = document.querySelectorAll('.modal__close');
	modalClose.forEach((item) => {
		item.addEventListener('click', () => {
			modal.style.display = 'none';
			modalContent.style.display = 'none';
			modalContentForm.style.display = 'none';
			document.body.style.overflow = 'visible';
		});
	})

	window.addEventListener('keydown', (e) => {
		if (e.keyCode === 27) {
			modal.style.display = 'none';
			modalContent.style.display = 'none';
			modalContentForm.style.display = 'none';
			document.body.style.overflow = 'visible';
		}
	});

	window.addEventListener('click', (e) => {
		if (e.target === modal) {
			modal.style.display = 'none';
			modalContent.style.display = 'none';
			modalContentForm.style.display = 'none';
			document.body.style.overflow = 'visible';
		}
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
	const buttons = document.querySelectorAll('.accounting__button');
	const contents = document.querySelectorAll('.accounting__content');
	const buttonsStyle = {
		background: '#F55D3E',
		color: '#fff',
		border: 'none'
	};

	buttons.forEach((item, index) => {
		item.addEventListener('click', () => {
			buttons.forEach(item => {
				item.style.cssText = 'background: transparent; color: #252525; border: 1px solid #F55D3E';
			});
			buttons[index].style.cssText = `background: ${buttonsStyle.background}; color: ${buttonsStyle.color}; border: ${buttonsStyle.border}`;
			contents.forEach(item => {
				item.style.display = 'none';
			});
			contents[index].style.display = 'block';
		});
	});
	

});
