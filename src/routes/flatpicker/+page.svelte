<script>
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';
	import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index';
	import './calendar.css';

	let ref;
	let value = '';
	let blurValue = '';

	onMount(() => {
		flatpickr('#ddd', {
			altInput: true,
			dateFormat: 'm/Y',
			altFormat: 'F Y',
			plugins: [
				monthSelectPlugin({
					shorthand: true, //defaults to false
					dateFormat: 'y년 m월', //defaults to "F Y"
					altFormat: 'y년 m월' //defaults to "F Y"
				})
			]
		});
	});

	let check = '';
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />

<input id="ddd" bind:value={check} />

<span>
	{check}
</span>
