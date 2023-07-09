import { Frame, Root } from "../libs/gui.js";
import NavBar from "./widgets/nav.js";
import Hero from "./hero.js";
import Section2 from "./section2.js";
import Team from "./team.js";
import Work from "./work.js";
import Testimonials from "./testimonials.js";
import Contact from "./contact.js";
import Footer from "./foot.js";

var mainFrame = new Frame("main");

Root.add(new NavBar());

mainFrame.add(
	Hero,
	Section2,
	Team,
	Work,
	Testimonials,
	Contact,
	Footer
);

export default mainFrame;