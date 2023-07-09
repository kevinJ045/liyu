import { Frame, Section, $ } from "../libs/gui.js";

const Team = new Section('team', 'team');

Team.html(`
	<div class="bg-illustrasive"></div>
	<div class="title-4">Meet Our <b>Team</b></div>
	<div class="swiper swiper-team">
		<div class="swiper-wrapper">
    		<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person.png" class="person-image" />
    				<div class="person-name">Person</div>
    				<div class="icons">
    					<a href=""><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person.png" class="person-image" />
    				<div class="person-name">Person</div>
    				<div class="icons">
    					<a href=""><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person.png" class="person-image" />
    				<div class="person-name">Person</div>
    				<div class="icons">
    					<a href=""><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person.png" class="person-image" />
    				<div class="person-name">Person</div>
    				<div class="icons">
    					<a href=""><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    	</div>
	</div>
	<button class="common-btn">View Team</button>
`);

export default Team;