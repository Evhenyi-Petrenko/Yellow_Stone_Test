window.addEventListener('load', function seeMoreInfo() {
	'use strict';
	const container = document.querySelector('.main__project__box');

	container.addEventListener('click', function (e) {
		const target = e.target;

		if (target !== e.currentTarget) {
			const items = document.querySelectorAll('.main__project__button');

			Array.from(items).forEach(item => {
				item.classList.remove('main__project__button-active');
			});

			target.classList.add('main__project__button-active');

			Array.from(document.getElementsByClassName('main_project_img')).forEach(item => {
				if (target.dataset.filter !== 'all'  && !item.classList.contains(target.dataset.filter)){
					item.classList.add('d-none');
				}else{
					item.classList.remove('d-none');
				}
			});
		}

	});

});


