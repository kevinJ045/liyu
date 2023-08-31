
import { Frame, $ } from "../../libs/gui";

var Modal = new Frame('div', 'modal fade');

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
			<h5 class="modal-title" id="demoModalLabel">Get a Demo</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>
		<div class="modal-body">
			...
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary close">Close</button>
			<button type="button" class="btn btn-primary">Save changes</button>
		</div>
	</div>
</div>
`);

export default Modal;