import { Frame, Section, $ } from "../libs/gui.js";

const Team = new Section('team', 'team');

Team.html(`
	<div class="bg-illustrasive"></div>
	<div class="title-4">Meet Our <b>Team</b></div>
	<div class="swiper swiper-team">
		<div class="swiper-wrapper">
    		<div class="swiper-slide">
    			<div class="person-card" data-page="">
    				<img src="./img/person-1.jpg" class="person-image" />
    				<div class="person-name">Solomon Tigabu</div>
    				<div class="person-role">CEO</div>
    				<div class="icons">
							<a href="mailto:soltig66@gmail.com"><svg class="icon-svg icon-email"><path /></svg></a>
							<a href="https://www.linkedin.com/in/sol-tig/"><svg class="icon-svg icon-lin"><path /></svg></a>
							<a href="https://t.me/Sol_Tig"><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person-2.png" class="person-image" />
    				<div class="person-name">Biniyam Daniel</div>
    				<div class="person-role">CTO</div>
    				<div class="icons">
    					<a href="https://biniyamdaniel.vercel.app/"><svg class="icon-svg icon-email"><path /></svg></a>
							<a href="https://www.linkedin.com/in/b1n1yam/"><svg class="icon-svg icon-lin"><path /></svg></a>
							<a href="https://t.me/B1n1yam"><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card" data-page="">
    				<img src="./img/person-3.jpg" class="person-image" />
    				<div class="person-name">Enqu Tewodros</div>
    				<div class="person-role">Digital Marketer</div>
    				<div class="icons">
							<a href="mailto:enquted2211@gmail.com"><svg class="icon-svg icon-email"><path /></svg></a>
							<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
							<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    		<div class="swiper-slide">
    			<div class="person-card" data-page="">
    				<img src="./img/person-4.png" class="person-image" />
    				<div class="person-name">Esubalew Bitew</div>
    				<div class="person-role">Full Stack Dev</div>
    				<div class="icons">
							<a href="mailto:esubalewbitew13@gmail.com"><svg class="icon-svg icon-email"><path /></svg></a>
							<a href="https://www.linkedin.com/in/esubalew-bitew/"><svg class="icon-svg icon-lin"><path /></svg></a>
							<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
				<div class="swiper-slide">
    			<div class="person-card">
    				<img src="./img/person-5.jpg" class="person-image" />
    				<div class="person-name">Mohammed</div>
    				<div class="person-role">Full Stack Dev</div>
    				<div class="icons">
    					<a href="https://portfolio-kevinj045.vercel.app/"><svg class="icon-svg icon-email"><path /></svg></a>
							<a href="https://www.linkedin.com/in/b1n1yam/"><svg class="icon-svg icon-lin"><path /></svg></a>
							<a href="https://t.me/bushyice"><svg class="icon-svg icon-tg"><path /></svg></a>
    				</div>
    			</div>
    		</div>
    	</div>
	</div>
	<button class="common-btn">View Team</button>
`);

export default Team;