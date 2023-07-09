import { Frame, Section, $ } from "../libs/gui.js";

const Testimonials = new Section('testimonials', 'testimonials');


Testimonials.html(`
	<div class="title-6">Testimonials</div>
	<div class="swiper swiper-testimonials">
		<div class="swiper-wrapper">
    		<div class="swiper-slide">
    			<div class="testimonial">
    				<!-- sufferToMakeThis( -->
    				<div class="compact-part">
    					<img src="./img/t-1.png" class="pfp" />
    					<div class="info">
	    					<div class="name">Zoe Mantis</div>
	    					<div class="is">Founder, Alpha Group</div>
	    				</div>
    				</div>
    				<div class="body">
    					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    				</div>
    			</div>
    			<!-- ) -->
    		</div>
    		<div class="swiper-slide">
    			<div class="testimonial">
    				<div class="compact-part">
    					<img src="./img/t-2.png" class="pfp" />
    					<div class="info">
    						<div class="name">Don Joe</div>
    						<div class="is">Founder, Alpha Group</div>
    					</div>
    				</div>
    				<div class="body">
    					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="testimonial">
    				<div class="compact-part">
    					<img src="./img/t-3.png" class="pfp" />
    					<div class="info">
    						<div class="name">Zoe Mantis</div>
    						<div class="is">Founder, Alpha Group</div>
    					</div>
    				</div>
    				<div class="body">
    					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="swiper-pagination"></div>
    </div>
`);

export default Testimonials;