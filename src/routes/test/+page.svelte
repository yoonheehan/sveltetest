<script>
	import { browser } from '$app/environment';
	import './test.css';
</script>

<div class="relative inline-block group">
	<button
		class="bg-[#3498db] text-white p-4 cursor-pointer relative inline-block hover:bg-[#2980b9] group-hover:bg-[#3e8e41]"
		>Dropdown</button
	>
	<div
		id="myDropdown"
		class="group-hover:block hidden absolute bg-[#f1f1f1] min-w-[160px] shadow-xl z-10"
	>
		<a href="/#" class="px-3 py-4 block hover:bg-[#ddd]">Link 1</a>
		<a href="/#" class="px-3 py-4 block hover:bg-[#ddd]">Link 2</a>
		<a href="/#" class="px-3 py-4 block hover:bg-[#ddd]">Link 3</a>
	</div>
</div>
