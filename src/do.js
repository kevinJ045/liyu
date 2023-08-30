import { Frame, Section, $ } from "./libs/gui.js";
import Swiper from "./libs/swiper.js";
import { pickRandom, randFrom } from "./libs/rand.js";
import axios from "axios";

const logic = {};

const win = window, doc = document, 
	  $win = $(win), $doc = $(doc);

logic.init = () => {

	$win.on('scroll', (e) => {
		var { scrollTop, scrollHeight, clientHeight } = $('html')[0];


	});

	const swiper1 = new Swiper('.swiper.swiper-featured-in', {
	  speed: 400,
	  slidesPerView: 5,
	  breakpoints: {
	    360: {
	      slidesPerView: 1,
	      spaceBetween: 100,
	    },
	    400: {
	      slidesPerView: 2,
	      spaceBetween: 100,
	    },
	    500: {
	      slidesPerView: 3,
	      spaceBetween: 100,
	    },
	    600: {
	      slidesPerView: 4,
	      spaceBetween: 100,
	    },
	    900: {
	      slidesPerView: 4,
	      spaceBetween: 10,
	    },
	    1200: {
	      slidesPerView: 5,
	      spaceBetween: 100,
	    },
	  }
	});

	const swiperTeam = new Swiper('.swiper.swiper-team', {
	  speed: 400,
	  slidesPerView: 4,
	  spaceBetween: 100,
	  breakpoints: {
	    360: {
	      slidesPerView: 1,
	      spaceBetween: 100,
	    },
	    400: {
	      slidesPerView: 1,
	      spaceBetween: 100,
	    },
	    500: {
	      slidesPerView: 1,
	      spaceBetween: 100,
	    },
	    600: {
	      slidesPerView: 4,
	      spaceBetween: 100,
	    },
	    900: {
	      slidesPerView: 4,
	      spaceBetween: 10,
	    },
	    1200: {
	      slidesPerView: 4,
	      spaceBetween: 100,
	    },
	  }
	});

	const swiperWork = new Swiper('.swiper.swiper-work', {
	  speed: 400,
	  slidesPerView: 4,
	  spaceBetween: 100,
	  breakpoints: {
	    360: {
	      slidesPerView: 1,
	      spaceBetween: 30,
	    },
	    400: {
	      slidesPerView: 1,
	      spaceBetween: 30,
	    },
	    500: {
	      slidesPerView: 2,
	      spaceBetween: 20,
	    },
	    700: {
	      slidesPerView: 3,
	      spaceBetween: 20,
	    },
	  }
	});

	const swiperPeople = new Swiper('.swiper.swiper-testimonials', {
	  speed: 400,
	  slidesPerView: 4,
	  spaceBetween: 100,
	  autoplay: {
	   delay: 5000,
	 },
	 pagination: {
	    el: '.swiper-pagination'
	  },
	  breakpoints: {
	    360: {
	      slidesPerView: 1,
	      spaceBetween: 30,
	    },
	    400: {
	      slidesPerView: 1,
	      spaceBetween: 30,
	    },
	    500: {
	      slidesPerView: 2,
	      spaceBetween: 20,
	    },
	    700: {
	      slidesPerView: 3,
	      spaceBetween: 20,
	    },
	  }
	});

	$('.menu-button').click(() => {
		$('nav').toggleClass('active');
	});

	$('[navto]').click(function(){
		$(':root').animate({
			scrollTop: $('#'+$(this).attr('navto')).offset()?.top
		});
	});



	$('.person-card').click(function(){
		let page = $(this).data('page');
		open(page);
	});

}

export default logic;