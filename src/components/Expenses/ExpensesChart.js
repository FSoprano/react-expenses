import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    // An array of objects wanted, because the the props are accessed 
    // by the map function in Chart.js in object notation style.

    // Inserting the real values into the chartDataPoints array:
    // We get the values via props; props.expenses is an array.
    // We go through the array elements by a forEach loop:
    props.expenses.forEach(expense => {
        const expenseMonth = expense.date.getMonth(); 
        // Starting at index 0;
        // expense.date is a data object; we therefore have access to the getMonth()
        // function.
        // The chartDataPoints array uses the same index from 
        // 0 to 11 as the expenses array. 
        // We can thus exploit this common property to
        // reassign the values, sorted by expenseMonth, of   
        // the chartDataPoints array:
        chartDataPoints[expenseMonth].value += expense.amount; 
    });

    return <Chart dataPoints={chartDataPoints} />
    // dataPoints is the name of the array we use to map in Chart.js
};

export default ExpensesChart;