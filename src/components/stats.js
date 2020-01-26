import React from 'react'

const Stats = ({logData}) => (
    <>
        <div className="impressions">
            <div className="number">
                {getTotalImpressions(logData)}
            </div>
            <div className="stat-title">Impressions</div>
        </div>
        <div className="conversions">
            <div className="number">
                {getTotalConversions(logData)}
            </div>
            <div className="stat-title">Conversions</div>
        </div>
        <div className="revenue">
            <div className="number">
                {getTotalRevenue(logData)}
            </div>
        </div>
    </>
)

function getTotalImpressions(logData) {
    let impData = logData.filter(function(item){
        if(item.type === 'impression'){
            return true;
        }
    })
    return impData.length;
}
function getTotalConversions(logData) {
    let convData = logData.filter(function(item){
        if(item.type === 'conversion'){
            return true;
        }
    })
    return convData.length;
}
function getTotalRevenue(logData) {
    let revData = logData.filter(function(item){
        if(item.type === 'conversion'){
            return true;
        }
    })

    var i;
    var revenue = 0;
    for (i = 0; i < revData.length; i++) {
        revenue += revData[i].revenue;
    }
    let totalRevenue = '$'+(Math.round(revenue * 100) / 100).toFixed(2);
    let finalRevenue = numberWithCommas(totalRevenue);
    return finalRevenue;
}

function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Stats;