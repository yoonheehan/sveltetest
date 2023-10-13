<script>
	import { blur, fade, fly, slide } from 'svelte/transition';
	import { backInOut, linear } from 'svelte/easing';
	let color = 'bg-blue-900';
</script>

{#key color}
	<input type="text" class="${color}" transition:blur={{ duration: 1000, easing: linear }} />
{/key}
<div>HI</div>

<button on:click={() => (color = 'bg-black')}>showIt</button>

<input type="text" class="" />
