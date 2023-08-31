import jQuery from "jquery";

import components from "./components/index.js";
import "bootstrap/dist/css/bootstrap.css";
import "./css/main.css";


import { Root } from "./libs/gui.js";
import logic from './do.js';
import Fab from "./components/widgets/fab.js";
import Modal from "./components/widgets/modal.js";

Root.add(components);
Root.add(Modal);
Root.add(Fab);
import("bootstrap/dist/js/bootstrap.js");

logic.term = components.term;

jQuery(document).ready(logic.init);