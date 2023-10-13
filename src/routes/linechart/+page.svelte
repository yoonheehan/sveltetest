<script>
	import { onMount, onDestroy } from 'svelte';
	import Highcharts from 'highcharts';
	import HighchartsMore from 'highcharts/highcharts-more';
	import { makeLineChart } from './linechart';
	import HighchartsCustomEvents from 'highcharts-custom-events';
	import './chart.css';

	// @ts-ignore
	let lineChart;

	onMount(() => drawChart());

	export async function drawChart() {
		// 더 다양한 그래프 사용하기 위해 쓰는 함수
		HighchartsMore(Highcharts);
		// 더 다양한 이벤트 사용하기 위한 함수
		HighchartsCustomEvents(Highcharts);

		// @ts-ignore
		if (lineChart) {
			lineChart.destroy();
		}
		// @ts-ignore
		lineChart = Highcharts.chart(makeLineChart([60, 50, 80]));
	}
	function DestroyChart() {
		// @ts-ignore
		if (lineChart) {
			lineChart.destroy();
		}
	}

	onDestroy(DestroyChart);
</script>

<div id="test" class="flex justify-center items-center w-screen">
	<div id="container" class="w-full max-w-[500px]" />
</div>
