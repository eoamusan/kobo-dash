$(window).scroll(function(){
    var sTop = $(this).scrollTop();
    
    if(sTop >= 80){
        $('.head').addClass('minimized');
    }else if(sTop < 80){
        $('.head').removeClass('minimized');
    }
});

var barChartData = {
	labels: ['MAR 2018', 'APR 2018', 'MAY 2018', 'JUN 2018', 'JUL 2018', 'AUG 2018'],
	datasets: [{
		label: 'Dataset 1',
		backgroundColor: '#FCAB31',
		borderColor: '#FFF',
		borderWidth: 1,
		data: [
			2500,
			4500,
			4500,
			4500,
			4500,
			4500
		]
	}, {
		label: 'Dataset 2',
		backgroundColor: '#106CB5',
		borderColor: '#FFF',
		borderWidth: 1,
		data: [
			4500,
			1500,
			1500,
			1500,
			1500,
			1500
		]
	}]

};

window.onload = function() {
	var ctx = document.getElementById('requests').getContext("2d");
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
		        display: false
		    },
			"scales": {
				"yAxes": [
					{
						"ticks": {
							"beginAtZero": true,
							"suggestedMax": 5000
						}
					}
				],
				xAxes: [{
					categoryPercentage: 0.5,
		            barPercentage: 0.7
		        }]
			}
		}
	});

	var data = {
		labels: ['MAR 2018', 'APR 2018', 'MAY 2018', 'JUN 2018', 'JUL 2018', 'AUG 2018'],
		datasets: [{
			backgroundColor: '#106CB5',
			borderColor: '#106CB5',
			data: [220000, 350000, 110000, 300000, 420000, 0],
			label: 'D1',
			fill: '-1'
		}]
	};

	var options = {
		maintainAspectRatio: false,
		spanGaps: false,
		bezierCurve : false,
		legend: {
	        display: false
	    },
		elements: {
			line: {
				tension: 0.000001
			}
		},
		scales: {
			yAxes: [{
				stacked: true
			}]
		},
		plugins: {
			filler: {
				propagate: false
			},
			'samples-filler-analyser': {
				target: 'chart-analyser'
			}
		}
	};

	var chart = new Chart('spending', {
		type: 'line',
		data: data,
		options: options
	});
};