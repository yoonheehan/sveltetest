// 임시 데이터 및 그래프들
let radarDataTitle = ['주의력', '작업기억력', '집행기능', '행동조절', '사회성', '충동조절'];
// let radarDataTitle = ['AAAAAAA', 'BBBBBB', 'CCCCCC', 'DDDDDD', 'EEEEEE', 'FFFFFF'];
export let radarData = [];

// AttnkareD 차트 옵션
export let object = {
	chart: {
		renderTo: 'container',
		polar: true,
		type: 'area',
		events: {
			load() {
				const chart = this,
					axis = chart.xAxis[0];

				axis.axisLine.attr({
					'stroke-dasharray': '4 5'
				});
			}
		}
	},
	// cx: 0,
	// 		cy: 1,
	// 		r: 1.5,

	// x1: 0,
	// 		y1: 0,
	// 		x2: 0,
	// 		y2: 1,

	defs: {
		gradient0: {
			tagName: 'linearGradient',
			id: 'gradient-0',
			cx: 0,
			cy: 1,
			r: 1.5,
			children: [
				{
					tagName: 'stop',
					offset: 0
				},
				{
					tagName: 'stop',
					offset: 1
				}
			]
		}
	},

	title: false,
	subtitle: false,
	legend: false,

	tooltip: {
		shared: true,
		pointFormat: '<span style="color:black">{series.name}: <b>{point.y:,.0f}</b><br/>'
	},

	xAxis: {
		categories: [
			'<span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[0] +
				'</span>',
			'<span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[1] +
				'</span>',
			'<span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[2] +
				'</span>',
			'<span style="opacity:0;">2</span><br><span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[3] +
				'</span>',
			'<span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[4] +
				'&nbsp</span>',
			'<span style="color:#404040; font-size:16px; font-weight:500;">' +
				radarDataTitle[5] +
				'&nbsp&nbsp</span>'
		],

		tickmarkPlacement: 'on',
		lineWidth: 0,
		labels: {
			distance: 15
		}
	},

	yAxis: {
		gridLineInterpolation: 'polygon',
		lineWidth: 0,
		min: 0,
		max: 100,
		tickInterval: 20
	},

	series: [],

	credits: {
		enabled: false
	}
};

// @ts-ignore
export function makeRadarChart(array) {
	radarData = array;

	// @ts-ignore
	object.series.push({
		data: radarData,
		pointPlacement: 'on',
		marker: {
			radius: 1
		},
		lineColor: '#002d84',
		color: '#002a8426'
	});
	return object;
}

export function addSeries(array) {
	radarData = array;
	// @ts-ignore
	object.series.push({
		enableMouseTracking: false,
		data: radarData,
		pointPlacement: 'on',
		marker: {
			radius: 1
		},
		lineColor: '#ff712b',
		color: '#ffb46826'
	});
	return object;
}

// series: [
// 	{
// 		enableMouseTracking: false,
// 		data: radarData,
// 		pointPlacement: 'on',
// 		marker: {
// 			radius: 1
// 		},
// 		lineColor: '#002d84',
// 		color: '#002a8426'
// 	},
// 	{
// 		enableMouseTracking: false,
// 		data: [20, 40, 90, 50, 20, 30],
// 		pointPlacement: 'on',
// 		marker: {
// 			radius: 1
// 		},
// 		lineColor: '#ff712b',
// 		color: '#ffb46826'
// 	}
// ],
