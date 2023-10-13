// 임시 데이터 및 그래프들

const series = [
	{
		name: 'Basketball',
		id: 'basketball',
		marker: {
			symbol: 'circle'
		},
		data: [
			[1.6, 100],
			[1.65, 90]
		]
	},
	{
		name: 'Triathlon',
		id: 'triathlon',
		marker: {
			symbol: 'triangle'
		},
		data: [
			[1.2, 80],
			[1.25, 85]
		]
	},
	{
		name: 'Volleyball',
		id: 'volleyball',
		marker: {
			symbol: 'square'
		},
		data: [
			[1.4, 75],
			[1.5, 70]
		]
	}
];

// AttnkareD 차트 옵션

// @ts-ignore
export function makeScatterChart() {
	let highChartOptionofAttnkareD = {
		chart: {
			renderTo: 'container',
			type: 'scatter',
			zoomType: 'xy'
		},
		title: false,
		xAxis: {
			title: {
				text: 'Height'
			},
			labels: {
				format: '{value} m'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Weight'
			},
			labels: {
				format: '{value} kg'
			}
		},
		legend: {
			enabled: true
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 2.5,
					symbol: 'circle',
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				jitter: {
					x: 0.005
				}
			}
		},
		tooltip: {
			pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg'
		},
		credits: {
			enabled: false
		},
		series
	};
	return highChartOptionofAttnkareD;
}
