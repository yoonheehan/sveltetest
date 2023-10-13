// 임시 데이터 및 그래프들

// @ts-ignore
export function makeLineChart(array) {
	let resultList = array;

	let highChartOptionofAttnkareD = {
		chart: {
			renderTo: 'container'
		},
		tooltip: {
			formatter: function () {
				return this.x + '</b> 집중력 점수는 <b>' + this.y + '</b>';
			}
		},
		plotOptions: {
			series: {
				cursor: 'pointer',
				point: {
					events: {
						click: function () {
							location.href = '/';
						}
					}
				}
			}
		},
		title: false,
		xAxis: {
			min: 0,
			categories: ['23/10/10', '23/11/10', '23/12/10'],
			lineWidth: 0,
			labels: {
				useHTML: true,
				formatter: function () {
					return '<span class="xaxis-label">' + this.value + '</span>';
				},
				style: {
					cursor: 'pointer'
				},
				events: {
					click: function () {
						location.href = '/';
					}
				}
			}
		},
		yAxis: {
			labels: {
				rotation: 0
			},
			title: false,
			legend: {
				enabled: false
			}
		},
		legend: {
			enabled: false
		},
		credits: {
			enabled: false
		},

		series: [
			{
				data: resultList,
				dataLabels: {
					enabled: true,
					padding: 13,
					style: {
						fontSize: 15,
						fontWeight: 'normal',
						textOutline: false
					}
				}
			}
		],
		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 100
					}
				}
			]
		}
	};
	return highChartOptionofAttnkareD;
}

// {
//   chart: {
//     renderTo: 'container'
//   },
//   tooltip: {
//     formatter: function () {
//       return this.x + '</b> 집중력 점수는 <b>' + this.y + '</b>';
//     }
//   },
//   plotOptions: {
//     series: {
//       cursor: 'pointer',
//       point: {
//         events: {
//           click: function () {
//             location.href = '/';
//           }
//         }
//       }
//     }
//   },
//   title: false,
//   xAxis: {
//     min: 0,
//     categories: ['2023-10-10', '2023-11-10', '2023-12-10'],
//     lineWidth: 0,
//     labels: {
//       events: {
//         click: function () {
//           console.log(this);
//         }
//       }
//     }
//   },
//   yAxis: {
//     labels: {
//       rotation: 0
//     },
//     legend: {
//       enabled: false
//     },
//     title: {
//       text: '집중력',
//       rotation: 0,
//       align: 'high'
//     }
//   },
//   legend: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },

//   series: [
//     {
//       data: resultList,
//       dataLabels: {
//         enabled: true,
//         padding: 13,
//         style: {
//           fontSize: 15,
//           fontWeight: 'normal',
//           textOutline: false
//         }
//       }
//     }
//   ],
//   responsive: {
//     rules: [
//       {
//         condition: {
//           maxWidth: 500
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//           }
//         }
//       }
//     ]
//   }
// };
