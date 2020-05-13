// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(tableData);
tableData.forEach(function(datetime) {
    console.log(datetime);
    
    var trow = tbody.append("tr");
    trow.append("td").text(datetime.datetime)
    trow.append("td").text(datetime.city)
    trow.append("td").text(datetime.state)
    trow.append("td").text(datetime.country)
    trow.append("td").text(datetime.shape)
    trow.append("td").text(datetime.durationMinutes)
    trow.append("td").text(datetime.comments)
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");



// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var DatetimeElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");
    var durationElement = d3.select("#duration");
    // Get the value property of the input element
    var inputDatetime = DatetimeElement.property("value");
    var inputCity = cityElement.property("value");
    var inputState = stateElement.property("value");
    var inputCountry = countryElement.property("value");
    var inputShape = shapeElement.property("value");
    var inputDuration = durationElement.property("value");
  
    console.log(inputDatetime);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
    console.log(inputDuration);
   
  
    //var filteredData = tableData.filter(d => d.datetime === inputValue);
    
    var filteredData = tableData.filter(function(r){
        r.datetime === inputDatetime;
        r.city === inputCity;
        r.state === inputState;
        r.shape === inputShape;
        r.duration === inputDuration;
        r.country === inputCountry;
        const array = [r.datetime, r.city, r.state, r.shape, r.duration, r.country]
        for (i in filteredData.length()){
                return array[i]
            }
    })
    console.log(filteredData);  
    tbody.html("");
    filteredData.forEach(function(results) {
  
    
        var trow = tbody.append("tr");
        trow.append("td").text(results.datetime)
        trow.append("td").text(results.city)
        trow.append("td").text(results.state)
        trow.append("td").text(results.country)
        trow.append("td").text(results.shape)
        trow.append("td").text(results.durationMinutes)
        trow.append("td").text(results.comments)
        console.log(results)
    });
    console.log(filteredData)
    
    
};  

var clear = d3.select("#clear-btn");
clear.on("click", runClear);
function runClear() {
    tableData.forEach(function(clear) {
        console.log(clear);
        d3.event.preventDefault();
        var trow = tbody.append("tr");
        trow.append("td").text(clear.datetime)
        trow.append("td").text(clear.city)
        trow.append("td").text(clear.state)
        trow.append("td").text(clear.country)
        trow.append("td").text(clear.shape)
        trow.append("td").text(clear.durationMinutes)
        trow.append("td").text(clear.comments)
});
};