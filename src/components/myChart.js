import React from 'react'
import {Line} from 'react-chartjs-2'

class Chart extends React.Component {
  constructor(props) {
	super(props);
	const daLabels = props.data.slice(0,15).map(function(item){
		return Date(item.x);
	});
    this.state = {
      chartData:{
		labels: daLabels,
        datasets: [
          {
            data:props.data,
			lineTension:0.1,
			borderColor: "rgba(78, 103, 128, 0.75)",
			pointBorderWidth: 1,
			fill: false,
			pointRadius:.01,
          }
		]
      }
    }
  }

  render() {
	  if(this.props.data == 'null' || this.props.data == 'undefined'){
		  return (
			  <div>
				  no chart data
			  </div>
		  )
	  } else {
		  return(
			<div>
				<Line 
				data={this.state.chartData}
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
		)
	  }
  }
}
export default Chart;