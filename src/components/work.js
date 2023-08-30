import { Frame, Section, $ } from "../libs/gui.js";

const Work = new Section('work', 'work');

Work.html(`
	<div class="worked stuff">
		<div class="title-5">Our <b>latest</b> work</div>
		<div class="swiper swiper-work">
			<div class="swiper-wrapper">
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-1.webp" class="work-image" />
	    				<div class="title">Qinash</div>
	    				<div class="description">A marketplace for discounted products.</div>
	    			</div>
	    		</div>
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-2.webp" class="work-image" />
	    				<div class="title">MOE - Dashboard</div>
	    				<div class="description">A Dashboard for the ministry of education.</div>
	    			</div>
	    		</div>
	    		<div class="swiper-slide">
	    			<div class="work-card">
	    				<img src="./img/work-3.webp" class="work-image" />
	    				<div class="title">The Expert</div>
	    				<div class="description">A datascience based ERP platform</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</div>
`);

export default Work;