import React from 'react'
import logData from "../content/logs.json"
import Chart from './myChart'
import Stats from './stats';

function getFormattedData(userId) {
    let userData = getUserData(userId);

    let newData = userData.filter(function(item){
        if(item.type === 'conversion'){
            return true;
        }
    })
    let dataArr = [];
    const formattedData = newData.map(function(item){
        var date = Date.parse(item.time);
        return dataArr.push({x:date, y:item.revenue})
    })
    return dataArr;
}

function getUserData(userId) {
    let userData = logData.filter(function(data){
        if(data.user_id === userId){
            return true
        } else {
            return false;
        }
    })
    return userData;
}

const LogChart = ({id, theme}) => (
    <div className="stats-container">
        
        <div className="graph-container">
            <Chart data={getFormattedData(id)} cardId={id} theme={theme}/>
        </div>
        <div className="stats">
            <Stats logData={getUserData(id)} />
        </div>
    </div>
)

export default LogChart;