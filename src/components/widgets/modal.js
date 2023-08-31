
import { Frame, $ } from "../../libs/gui";

var Modal = new Frame('div', 'modal fade demo-modal');

Modal.attr({
	'id': 'demoModal',
	'role': 'dialog',
	'tabindex': '-1',
	'aria-labelledby': "demoModalLabel",
	'aria-hidden': "true"
});

Modal.html(`
<div class="modal-dialog" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>
		<div class="modal-body">
			<h2>Need Unique Solutions?</h2>
			<h3>GET IN TOUCH</h3>
			<h6>Call us</h6>
			<div class="icon-with-text">
				<span class="icon material-symbols-outlined">phone</span>
				<span class="text">(251) 996341186</span>
			</div>

			<div class="icons">
				<a href="https://t.me/liyusoftwaresolutions"><svg class="icon-svg icon-tg"><path /></svg></a>
				<a href="https://twitter.com/liyusoftwaresolutions"><svg class="icon-svg icon-twitter"><path /></svg></a>
				<a href="https://www.linkedin.com/in/liyusoftwaresolutions"><svg class="icon-svg icon-lin"><path /></svg></a>
			</div>

		</div>
		<div class="modal-footer">
			<div class="icon-with-text small">
				<span class="icon material-symbols-outlined">email</span>
				<span class="text"><a href="mailto:liyusoftwaresolutions@gmail.com">liyusoftwaresolutions</a></span>
			</div>
			<div class="icon-with-text small">
				<span class="icon material-symbols-outlined">location_on</span>
				<span class="text">Addiss Ababa, Ethiopia</span>
			</div>
		</div>
	</div>
</div>
`);

export default Modal;