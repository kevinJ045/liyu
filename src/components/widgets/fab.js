import { Frame, $ } from "../../libs/gui";


var Fab = new Frame('button', 'fab');

Fab.data({
	toggle: 'modal',
	target: '#demoModal'
});

Fab.html(`
<i class="material-symbols-outlined">phone</i>
`);

export default Fab;