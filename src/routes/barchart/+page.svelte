<script>
	import { onMount, onDestroy } from 'svelte';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { makeBarChart } from './barchart';
	import './chart.css';

	// @ts-ignore
	let barChart;
	export let graphResult;
	onMount(() => drawChart());

	export async function drawChart() {
		HighchartsMore(Highcharts);

		// @ts-ignore
		if (barChart) {
			barChart.destroy();
		}
		// @ts-ignore
		barChart = Highcharts.chart(makeBarChart([60, 70, 80, 90, 50, 40]));
	}
	function DestroyChart() {
		// @ts-ignore
		if (barChart) {
			barChart.destroy();
		}
	}

	onDestroy(DestroyChart);
</script>

<div id="containerDiv" class="mt-10 mb-5 mr-5 w-[400px]">
	<div class="w-100">ddd</div>
	<div id="container" class="w-[500px]" />
</div>

<style>
</style>
