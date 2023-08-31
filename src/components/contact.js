import { Frame, Section, $ } from "../libs/gui.js";

const Contact = new Section('contact_us', 'contact');


Contact.html(`

	<div class="contact-us-section">

		<div class="row">

			<div class="col-md-4 col-sm-12 c1">

				<div class="direct-contact">

					<div class="title-7">Contact <br/> <b a>Directly</b></div>

					<ul class="info">
						<li><i class="material-symbols-outlined">phone</i> (251) <a href="tel:251996341186">996341186</a></li>
						<li><i class="material-symbols-outlined">location_on</i> A.A, Ethiopia</li>
						<li><i class="material-symbols-outlined">email</i> <a href="mailto:liyusoftwaresolutions@gmail.com">liyusoftwaresolutions</a></li>
					</ul>

					<div class="or-btn">o<span>r</span></div>


					<div class="social-media-icons">
						<a href="https://www.instagram.com/liyusoftwaresolutions"><svg class="icon-svg icon-insta"><path /></svg></a>
						<a href="https://www.facebook.com/liyusoftwaresolutions"><svg class="icon-svg icon-fb"><path /></svg></a>
						<a href="https://www.linkedin.com/in/liyusoftwaresolutions"><svg class="icon-svg icon-lin"><path /></svg></a>
						<a href="https://twitter.com/liyusoftwaresolutions"><svg class="icon-svg icon-twitter"><path /></svg></a>
						<a href="https://t.me/liyusoftwaresolutions"><svg class="icon-svg icon-tg"><path /></svg></a>
					</div>

				</div>

			</div>

			<div class="col-md-8 col-sm-12 c2">

				<div class="send-message">

					<div class="title-7">Send us a<br /><b a>Message</b></div>

					<form action="" class="form">

						<div class="form-wrapper">
							<label for="fname">First Name</label>
							<input name="fname" class="form-input" placeholder="Enter first name" />
						</div>

						<div class="form-wrapper">
							<label for="lname">Last Name</label>
							<input name="lname" class="form-input" placeholder="Enter last name" />
						</div>

						<div class="form-wrapper">
							<label for="email">Email</label>
							<input name="email" type="email" class="form-input" placeholder="Enter email" />
						</div>

						<div class="form-wrapper">
							<label for="phone">Phone</label>
							<input name="phone" type="phone" class="form-input" placeholder="Enter phone number" />
						</div>

						<div class="form-wrapper">
							<label for="message">Message</label>
							<textarea name="message" class="form-input" placeholder="Enter message"></textarea>
						</div>

						<button type="submit" class="button">Send message</button>

					</form>

				</div>

			</div>

		<div>

	</div>

`);

export default Contact;