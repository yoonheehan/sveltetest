<script>
	import { onMount, onDestroy } from 'svelte';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { makeScatterChart } from './scatter';
	import './chart.css';

	// @ts-ignore
	let scatterChart;
	onMount(() => drawChart());

	export async function drawChart() {
		HighchartsMore(Highcharts);

		// @ts-ignore
		if (scatterChart) {
			scatterChart.destroy();
		}
		// @ts-ignore
		scatterChart = Highcharts.chart(makeScatterChart());
	}
	function DestroyChart() {
		// @ts-ignore
		if (scatterChart) {
			scatterChart.destroy();
		}
	}

	onDestroy(DestroyChart);
</script>

<div class="flex justify-center">
	<div id="container" class="w-full max-w-[600px]" />
</div>

<style>
</style>
