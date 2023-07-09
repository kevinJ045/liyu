import { Frame, Section, $ } from "../libs/gui.js";

const Work = new Section('work', 'work');

Work.html(`
	<div class="worked stuff">
		<div class="title-5">Our <b>latest</b> work</div>
		<div class="swiper swiper-work">
			<div class="swiper-wrapper">
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-1.png" class="work-image" />
	    				<div class="title">Artem - Digital Marketing campaign</div>
	    				<div class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
	    			</div>
	    		</div>
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-2.png" class="work-image" />
	    				<div class="title">Mayhem - Search engine Optimization</div>
	    				<div class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
	    			</div>
	    		</div>
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-3.png" class="work-image" />
	    				<div class="title">Basic - Pay per click (PPC)</div>
	    				<div class="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</div>
`);

export default Work;