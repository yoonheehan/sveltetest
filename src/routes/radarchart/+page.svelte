<script>
	import { onMount, onDestroy } from 'svelte';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { makeRadarChart, addSeries, object } from './radarchart';
	import './chart.css';

	// @ts-ignore
	let radarChart;
	onMount(() => drawChart());

	export async function drawChart() {
		HighchartsMore(Highcharts);

		// @ts-ignore
		if (radarChart) {
			radarChart.destroy();
		}
		// @ts-ignore
		radarChart = Highcharts.chart(makeRadarChart([60, 70, 80, 90, 50, 40]));
	}
	function DestroyChart() {
		// @ts-ignore
		if (radarChart) {
			radarChart.destroy();
		}
	}

	onDestroy(DestroyChart);

	function test() {
		radarChart = Highcharts.chart(addSeries([20, 40, 90, 50, 20, 30]));
	}
</script>

<div id="containerDiv" class="mt-10 mb-5 mr-5 w-full">
	<div class="w-100">ddd</div>
	<div id="container" class="graph" />
</div>

<button on:click={test}>시리즈추가테스트</button>

<style>
	.graph {
		width: full;
	}
</style>
