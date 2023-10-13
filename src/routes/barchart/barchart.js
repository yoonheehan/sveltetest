// 임시 데이터 및 그래프들

// let radarDataTitle = ['AAAAAAA', 'BBBBBB', 'CCCCCC', 'DDDDDD', 'EEEEEE', 'FFFFFF'];
// @ts-ignore

// @ts-ignore
function setColor(level) {
	switch (level) {
		case 0:
			return 'red';

		case 1:
			return 'green';

		case 2:
			return 'blue';

		case 3:
			return 'yellow';
	}
}

let level = [0, 1, 2, 3, 0, 1];
// AttnkareD 차트 옵션

// @ts-ignore
export function makeBarChart(array) {
	let resultList = [];
	for (let i = 0; i < array.length; i++) {
		let dataObject = {};
		let color = setColor(level[i]);
		dataObject.color = color;
		dataObject.y = array[i];
		resultList.push(dataObject);
	}
	let highChartOptionofAttnkareD = {
		chart: {
			renderTo: 'container',
			type: 'bar'
		},
		tooltip: { enabled: false },
		title: false,
		xAxis: {
			min: 0,
			categories: ['주의집중력', '작업기억력', '집행기능', '행동조절력', '사회성', '충동자제력'],
			minorTickLength: 0,
			tickLength: 0,
			lineWidth: 0,
			minorGridLineWidth: 0,
			labels: {
				useHTML: true,
				formatter: function () {
					return '<span class="xaxis-label">' + this.value + '</span>';
				}
			}
		},
		yAxis: {
			labels: {
				enabled: false
			},
			legend: {
				enabled: false
			},
			title: false,
			gridLineWidth: 0
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			column: {
				colorByPoint: true
			}
		},

		series: [
			{
				align: 'right',
				data: resultList,
				dataLabels: {
					inside: true,
					enabled: true,
					align: 'left',
					// @ts-ignore
					formatter: function () {
						// @ts-ignore
						let max = this.series.yAxis.max;

						// @ts-ignore
						let color = this.y / max < 0.5 ? 'black' : 'white';
						// @ts-ignore
						return '<span style="color: ' + color + '">' + this.y + ' M</span>';
					},
					padding: 20,
					style: {
						fontSize: 15,
						fontWeight: 'normal',
						textOutline: false
					}
				},
				pointPadding: 10,
				pointWidth: 50
			}
		]
	};
	return highChartOptionofAttnkareD;
}
