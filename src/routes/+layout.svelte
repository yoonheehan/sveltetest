<script>
	import { goto } from '$app/navigation';
	import '../app.css';
</script>

<div class="w-full h-[50px] flex justify-center items-center">
	<button on:click={() => goto('/')}>홈으로</button>
</div>
<slot />
