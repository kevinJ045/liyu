import { Frame, Section, $ } from "../libs/gui.js";

const Contact = new Section('contact', 'contact');


Contact.html(`

	<div class="contact-us-section">

		<div class="row">

			<div class="col-md-4 col-sm-12 c1">

				<div class="direct-contact">

					<div class="title-7">Contact <br/> <b a>Directly</b></div>

					<ul class="info">
						<li><i class="material-symbols-outlined">phone</i> (251) 555-0103</li>
						<li><i class="material-symbols-outlined">location_on</i> A.A, Ethiopia</li>
						<li><i class="material-symbols-outlined">email</i> info@liyusol.com</li>
					</ul>

					<div class="or-btn">o<span>r</span></div>


					<div class="social-media-icons">
						<a href=""><svg class="icon-svg icon-insta"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-fb"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href=""><svg class="icon-svg icon-tg"><path /></svg></a>
					</div>

				</div>

			</div>

			<div class="col-md-8 col-sm-12 c2">

				<div class="send-message">

					<div class="title-7">Send us a<br /><b a>Message</b></div>

				</div>

			</div>

		<div>

	</div>

`);

export default Contact;