<script>
	import { goto } from '$app/navigation';
</script>

<button class="bg-blue-500 px-3 py-2 rounded-xl" on:click={() => goto('/radarchart')}
	>레이더차트</button
>
<button class="bg-blue-500 px-3 py-2 rounded-xl" on:click={() => goto('/barchart')}>바차트</button>
<button class="bg-blue-500 px-3 py-2 rounded-xl" on:click={() => goto('/scatterchart')}
	>스캐터차트</button
>
<button class="bg-blue-500 px-3 py-2 rounded-xl" on:click={() => goto('/linechart')}
	>라인차트</button
>
<button class="bg-blue-500 px-3 py-2 rounded-xl" on:click={() => goto('/test')}>테스트페이지</button
>
