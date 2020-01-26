import React from 'react'
import {Line} from 'react-chartjs-2'

function getDateDiv(props) {
	let date = props.data.slice(0,15).map(function(item){
		return new Date(item.x).getFullYear();
	});
	let dateDive = 'Conversions ' + date[0];
	return dateDive;
}

class Chart extends React.Component {
  constructor(props) {
	super(props);
	const daLabels = props.data.slice(0,15).map(function(item){
		return Date(item.x);
	});
	const lineColor = () => {
		if(this.props.theme === 'lightMode') {
			return "rgba(56, 57, 58, 0.75)";
		} else {
			return "rgba(163,177,198, 0.75)";
		}
	}
    this.state = {
      chartData:{
		labels: daLabels,
        datasets: [
          {
            data:props.data,
			lineTension:0.1,
			borderColor: lineColor,
			pointBorderWidth: 1,
			fill: false,
			pointRadius:.01,
          }
		]
      }
    }
  }

  render() {
	if(this.props.data === 'null' || this.props.data === 'undefined'){
		return (
			<div>
				no chart data
			</div>
		)
	} else {
		return(
			<>
				<div>
					<Line 
					data={this.state.chartData}
					ref = {(reference) => this.reference = reference}
					options={{
						title:{display:false},
						legend:{display:false},
						scales:{
							yAxes:[{
								type: 'linear',
								gridLines:[{display:false}],
								display:false
							}],
							xAxes:[{
								id: 'timeForRevenue',
								gridLines:[{display:false}],
								scaleLabel: {
									display: true,
								},
								display:false
							}]
						}
					}} 
					/>
				</div>
				<div className="chart-date">
					{getDateDiv(this.props)}
				</div>
			</>
		)
	}
  }

}
export default Chart;