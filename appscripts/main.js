
//intro
//scroller function
// function position() {
//     var pos = window.pageYOffset - 10;
//     var sectionIndex = d3.bisect(sectionPositions, pos);
//     sectionIndex = Math.min(sections.size() - 1, sectionIndex);
    
//     if (currentIndex !== sectionIndex) {
//     dispatch.active(sectionIndex);
//     currentIndex = sectionIndex;
//     }
//     var prevIndex = Math.max(sectionIndex - 1, 0);
//     var prevTop = sectionPositions[prevIndex];
//     var progress = (pos - prevTop) / (sectionPositions[sectionIndex] - prevTop);
//     dispatch.progress(currentIndex, progress);
//     }
// var dispatch = d3.dispatch("active", "progress");

//chart no 1

const dataANA = {
    labels: ["Asian", "Non-Asian"],
    datasets: [
        {
            label: "proportion of asian nominees and winners",
            data: [0.02, 0.98], //in percentage
            borderWidth: 2,
            backgroundColor: ['hsla(19, 97%, 37%, 1)', 'hsla(190, 100%, 23%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(19, 97%, 70%, 1)', 'hsla(190, 100%, 70%, 1)']
        }]
};

//might change the chart type
new Chart("asian-total-chart",
    {
        type: "doughnut",
        data: dataANA,
        backgroundColor: "hsla(100, 0, 0, 0)",
        options: {
            reponsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true
            },
            title: {
                display: true,
                text: "Proportion of Asian Nominees and Winners", //don't want title to be seen
            },
        }
    });

//chart no 2
// const data2 = {


// }

//hoping to tweak bubble chart to present in a more engaging mannar
//new Chart("asian-2023-chart",)

//chart no 3 
//const data3 = {}

//hoping to make to resue the bubble charts and this time highlighting nominees associated with the movie 
//new Chart("asian-everything-chart") 

//act1 
//define datasets
//initializing step 
const step = 1
//with prop rep
const withProp = [16, 15, 11, 10, 17, 16, 14, 16, 15, 14, 25, 17, 18, 20, 20]
//below prorep
const belowProp = [78, 69, 73, 75, 67, 73, 73, 68, 68, 66, 57, 55, 54, 20, 20]
//above proprep
const aboveProp = [6, 16, 16, 15, 16, 11, 13, 16, 17, 20, 18, 28, 28, 20, 20]
//year label
const year = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
//DOM slider
const sliderT = document.getElementById("timeScro");

//event listener to scroller

sliderT.addEventListener('change', function() {updatePropChart(this.value);});
sliderT.addEventListener('input', function() {updatePropChart(this.value);});

//event to change data range
function updatePropChart(val) {
    const step = year.findIndex((element => element === val.toString())) + 1 // Parse new integer value from the slider update. parseInt() converts string to int
    //step labels from [2007, step]
    const steps = year.slice(0, step)
    //update datatsets to match value of index step
    proprep.data.labels = steps 
    proprep.data.datasets[0].data = withProp.slice(0, step);
    proprep.data.datasets[1].data = belowProp.slice(0, step);
    proprep.data.datasets[2].data = aboveProp.slice(0, step);
    proprep.update()

}

const proprep = new Chart("proprep",
    {
        type: "line",
        data: {
            labels: year,
            datasets: [
                {
                    label: "Number of Films with Proportional Representation of API",
                    borderColor: 'rgba(187, 62, 3, 1)',
                    backgroundColor: 'rgba(10, 147, 150, 0)',
                    borderWidth: 2,
                    data: withProp.slice(0, step),
                },
                {
                    label: "Number of Films below Proportional Representation of API",
                    borderColor: 'rgba(238, 155, 0, 1)',
                    backgroundColor: 'rgba(238, 155, 0, 0)',
                    borderWidth: 2,
                    data: belowProp.slice(0, step),
                },
                {
                    label: "Number of Films above Proportional Representation of API",
                    borderColor: 'rgba(148, 210, 189, 1)',
                    backgroundColor: 'rgba(174, 32, 18, 0)',
                    borderWidth: 2,
                    data: aboveProp.slice(0, step),
                },
            ]
        },
            
        backgroundColor: "hsla(100, 0, 0, 0)",
        options: {
            aspectRatio: 2,
            responsive: true,
            elements:{
                line: {
                    tension:0
                }
            },
            scales: {
                y: {
                    
                    beginAtZero: true, //might change to see greater difference
                }
            },
            title: {
                display: true,
                text: ["Proportional Representation of API by Year: 2007-2019"]
            }

        }
    }
);




 
//prob using line chart here 
//const data5 = {}

//chartno2
//const data5 = {}

//new Chart("invisibility")
//Line chart that has buttons to toggle between all 

//data initialization block
const labelInvis = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", '2015', '2016', '2017', '2018', '2019'];
const missingAPI = [46, 36, 44, 48, 37, 46, 44, 41, 38, 38, 31, 28, 30];
const missingASN = [47, 37, 44, 48, 38, 47, 45, 42, 42, 39, 32, 29, 33];
const missingNHPI = [98, 97, 97, 97, 93, 97, 97, 97, 88, 95, 88, 88, 93];
const missingTT = [191, 170, 185, 193, 168, 190, 186, 180, 168, 172, 151, 145, 156];
var ctx = document.getElementById("lineInvis").getContext("2d");
const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);

gradientBg.addColorStop(0, "transparent")
gradientBg.addColorStop(0.9, "hsla(34, 100%, 47%, 0.9)")

//line chart initial at TOTAL

const invisChart = new Chart("lineInvis",
    {
        type: "line",
        data: {
            labels: labelInvis,
            datasets: [{
                label: 'Total',
                data: missingTT,
                borderColor: "hsla(34, 100%, 47%, 1)",
                backgroundColor: gradientBg,
                tension: 0,
                fill: true 
            }],
        },
        backgroundColor: "hsla(100, 0, 0, 0)",
        options: {
            reponsive: true,
            maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: false,
                    },
                    title: {
                        display: true,
                        text: ["Change in total number of films missing API characters out of 1300 movies", "from 2007-2019"]
                    },
                },
                scales: {
                    yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          min: 20,
                          max: 200,
                        }
                      }]
                    
                },
                
            },
        }
    )


//functions for data changes across
function total(chart) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    gradientBg.addColorStop(0, "transparent")
    gradientBg.addColorStop(0.9, "hsla(358, 64%, 37%, 0.9)")
    const setTT = [{
        label: 'Total',
        data: missingTT,
        borderColor: "hsla(358, 64%, 37%, 1)",
        backgroundColor: gradientBg,
        tension: 0,
    }]

    chart.config.data.datasets = setTT; 
    chart.config.options.scales.yAxes[0].ticks.max = 200
    chart.update();
};

function api(chart) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    gradientBg.addColorStop(0.6, "transparent")
    gradientBg.addColorStop(1, "hsla(19, 97%, 37%, 0.9)")
    const setAPI = [{
        label: 'API',
        data: missingAPI,
        borderColor: "hsla(19, 97%, 37%, 1)",
        backgroundColor: gradientBg,
        tension: 0,
    }]
    chart.config.data.datasets = setAPI; 
    chart.config.options.scales.yAxes[0].ticks.max = 100
    chart.config.options.scales.yAxes[0].ticks.min = 20
    chart.update();
};

function asian(chart) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    // gradientBg.addColorStop(0, "transparent")
    gradientBg.addColorStop(0.6, "transparent")
    gradientBg.addColorStop(1, "hsla(30, 98%, 40%, 0.9)")
    const setASN = [{
        label: 'ASIAN',
        data: missingASN,
        borderColor: "hsla(30, 98%, 40%, 1)",
        backgroundColor: gradientBg,
        tension: 0,
    }]
    chart.config.data.datasets = setASN; 
    chart.config.options.scales.yAxes[0].ticks.max = 100
    chart.config.options.scales.yAxes[0].ticks.min = 20
    chart.update();
};

function nhpi(chart) {
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 500);
    gradientBg.addColorStop(0, "transparent")
    gradientBg.addColorStop(0.5, "hsla(39, 100%, 47%, 0.5)")
    gradientBg.addColorStop(1, "hsla(39, 100%, 47%, 1)")
    const setNHPI = [{
        label: 'NHPI',
        data: missingNHPI,
        borderColor: "hsla(39, 100%, 47%, 1)",
        backgroundColor: gradientBg,
        tension: 0,
    }]
    chart.config.data.datasets = setNHPI; 
    chart.config.options.scales.yAxes[0].ticks.max = 100
    chart.config.options.scales.yAxes[0].ticks.min = 20
    chart.update();
};

//function to update data 
document.getElementById("tt").addEventListener("click", function() {total(invisChart);})
document.getElementById("api").addEventListener("click", function() {api(invisChart);})
document.getElementById("asi").addEventListener("click", function() {asian(invisChart);})
document.getElementById("nhp").addEventListener("click", function() {nhpi(invisChart);})

// //Draw the axis
// svg
//   .append("g")
//   .attr("transform", "translate(0,50)")      // This controls the vertical position of the Axis
//   .call(d3.axisBottom(x));
//act2
//chart leads
//defining the size of chart  
// create svg element
var svg = d3.select("#type-of-actors")
  .append("svg")
  .attr("width", 1200)
  .attr("height", 600)
// Load data from CSV file
d3.csv("https://raw.githubusercontent.com/leejiaren-nm2207/leejiaren-nm2207.github.io/main/resources/APIleads.csv", function(err, rows) {

  // Convert necessary data to strings
    rows.forEach(function(d) {
        d.Title = d.Title.toString();
        d.Worldwide_Box_Office = d.Worldwide_Box_Office.toString();
    })
    //create a helper function to filter the movies
    function getDataByYear(Year) {
        return rows.filter(row => row.Year === Year.toString());
    }
    //frames to that groups the individual
    const frames = []
    // creating year array to iterate through
    const years = d3.range(2007,2020);
    //iterate through each year
    for (let i = 0; i < years.length; i++) {
        const year = years[i];

        const data = getDataByYear(year);
        //populate frames with data of each year's movies etc
        const frame = {
            name: year.toString(),
            data: [
              {
                title: data.map((row)=>row.Title),
                box_office: data.map((row)=>row.Worldwide_Box_Office),
                release: data.map((row)=>row.Release_Data),
                value: data.map((row)=>row.Value),
                lead: data.map((row)=>row.Actor)
              }
            ]
          };
        
          frames.push(frame);
        }

        //     {year: "2007", value: 2},
//     {year: "2008", value: 3},
//     {year: "2009", value: 3},
//     {year: "2010", value: 2},
//     {year: "2011", value: 1},
//     {year: "2012", value: 2},
//     {year: "2013", value: 3},
//     {year: "2014", value: 4},
//     {year: "2015", value: 1},
//     {year: "2016", value: 4},
//     {year: "2017", value: 6},
//     {year: "2018", value: 6},
//     {year: "2019", value: 7}
    //create new data array for reference
    var dataLead = [
        { class: "movie1", year: "2007", value: frames[0].data[0].value[0], title: frames[0].data[0].title[0], release_date: frames[0].data[0].release[0], box_office: frames[0].data[0].box_office[0], leads: frames[0].data[0].lead[0]},
        { class: "movie2", year: "2007", value: frames[0].data[0].value[0], title: frames[0].data[0].title[1], release_date: frames[0].data[0].release[1], box_office: frames[0].data[0].box_office[1], leads: frames[0].data[0].lead[1]},
        { class: "movie3", year: "2008", value: frames[1].data[0].value[0], title: frames[1].data[0].title[0], release_date: frames[1].data[0].release[0], box_office: frames[1].data[0].box_office[0], leads: frames[1].data[0].lead[0]},
        { class: "movie4", year: "2008", value: frames[1].data[0].value[0], title: frames[1].data[0].title[1], release_date: frames[1].data[0].release[1], box_office: frames[1].data[0].box_office[1], leads: frames[1].data[0].lead[1]},
        { class: "movie5", year: "2008", value: frames[1].data[0].value[0], title: frames[1].data[0].title[2], release_date: frames[1].data[0].release[2], box_office: frames[1].data[0].box_office[2], leads: frames[1].data[0].lead[2]},
        { class: "movie6", year: "2009", value: frames[2].data[0].value[0], title: frames[2].data[0].title[0], release_date: frames[2].data[0].release[0], box_office: frames[2].data[0].box_office[0], leads: frames[2].data[0].lead[0]},
        { class: "movie7", year: "2009", value: frames[2].data[0].value[0], title: frames[2].data[0].title[1], release_date: frames[2].data[0].release[1], box_office: frames[2].data[0].box_office[1], leads: frames[2].data[0].lead[1]},
        { class: "movie8", year: "2009", value: frames[2].data[0].value[0], title: frames[2].data[0].title[2], release_date: frames[2].data[0].release[2], box_office: frames[2].data[0].box_office[2], leads: frames[2].data[0].lead[2]},
        { class: "movie9", year: "2010", value: frames[3].data[0].value[0], title: frames[3].data[0].title[0], release_date: frames[3].data[0].release[0], box_office: frames[3].data[0].box_office[0], leads: frames[3].data[0].lead[0]},
        { class: "movie10", year: "2010", value: frames[3].data[0].value[0], title: frames[3].data[0].title[1], release_date: frames[3].data[0].release[1], box_office: frames[3].data[0].box_office[1], leads: frames[3].data[0].lead[1]},
        { class: "movie11", year: "2011", value: frames[4].data[0].value[0], title: frames[4].data[0].title[0], release_date: frames[4].data[0].release[0], box_office: frames[4].data[0].box_office[0], leads: frames[4].data[0].lead[0]},
        { class: "movie12", year: "2012", value: frames[5].data[0].value[0], title: frames[5].data[0].title[0], release_date: frames[5].data[0].release[0], box_office: frames[5].data[0].box_office[0], leads: frames[5].data[0].lead[0]},
        { class: "movie13", year: "2012", value: frames[5].data[0].value[0], title: frames[5].data[0].title[1], release_date: frames[5].data[0].release[1], box_office: frames[5].data[0].box_office[1], leads: frames[5].data[0].lead[1]},
        { class: "movie14", year: "2013", value: frames[6].data[0].value[0], title: frames[6].data[0].title[0], release_date: frames[6].data[0].release[0], box_office: frames[6].data[0].box_office[0], leads: frames[6].data[0].lead[0]},
        { class: "movie15", year: "2013", value: frames[6].data[0].value[0], title: frames[6].data[0].title[1], release_date: frames[6].data[0].release[1], box_office: frames[6].data[0].box_office[1], leads: frames[6].data[0].lead[1]},
        { class: "movie16", year: "2013", value: frames[6].data[0].value[0], title: frames[6].data[0].title[2], release_date: frames[6].data[0].release[2], box_office: frames[6].data[0].box_office[2], leads: frames[6].data[0].lead[2]},
        { class: "movie17", year: "2014", value: frames[7].data[0].value[0], title: frames[7].data[0].title[0], release_date: frames[7].data[0].release[0], box_office: frames[7].data[0].box_office[0], leads: frames[7].data[0].lead[0]},
        { class: "movie18", year: "2014", value: frames[7].data[0].value[0], title: frames[7].data[0].title[1], release_date: frames[7].data[0].release[1], box_office: frames[7].data[0].box_office[1], leads: frames[7].data[0].lead[1]},
        { class: "movie19", year: "2014", value: frames[7].data[0].value[0], title: frames[7].data[0].title[2], release_date: frames[7].data[0].release[2], box_office: frames[7].data[0].box_office[2], leads: frames[7].data[0].lead[2]},
        { class: "movie20", year: "2014", value: frames[7].data[0].value[0], title: frames[7].data[0].title[3], release_date: frames[7].data[0].release[3], box_office: frames[7].data[0].box_office[3], leads: frames[7].data[0].lead[3]},
        { class: "movie21", year: "2015", value: frames[8].data[0].value, title: frames[8].data[0].title[0], release_date: frames[8].data[0].release[0], box_office: frames[8].data[0].box_office[0], leads: frames[8].data[0].lead[0]},
        { class: "movie22", year: "2016", value: frames[9].data[0].value[0], title: frames[9].data[0].title[0], release_date: frames[9].data[0].release[0], box_office: frames[9].data[0].box_office[0], leads: frames[9].data[0].lead[0]},
        { class: "movie23", year: "2016", value: frames[9].data[0].value[0], title: frames[9].data[0].title[1], release_date: frames[9].data[0].release[1], box_office: frames[9].data[0].box_office[1], leads: frames[9].data[0].lead[1]},
        { class: "movie24", year: "2016", value: frames[9].data[0].value[0], title: frames[9].data[0].title[2], release_date: frames[9].data[0].release[2], box_office: frames[9].data[0].box_office[2], leads: frames[9].data[0].lead[2]},
        { class: "movie25", year: "2016", value: frames[9].data[0].value[0], title: frames[9].data[0].title[3], release_date: frames[9].data[0].release[3], box_office: frames[9].data[0].box_office[3], leads: frames[9].data[0].lead[3]},
        { class: "movie26", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[0], release_date: frames[10].data[0].release[0], box_office: frames[10].data[0].box_office[0], leads: frames[10].data[0].lead[0]},
        { class: "movie27", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[1], release_date: frames[10].data[0].release[1], box_office: frames[10].data[0].box_office[1], leads: frames[10].data[0].lead[1]},
        { class: "movie28", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[2], release_date: frames[10].data[0].release[2], box_office: frames[10].data[0].box_office[2], leads: frames[10].data[0].lead[2]},
        { class: "movie29", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[3], release_date: frames[10].data[0].release[3], box_office: frames[10].data[0].box_office[3], leads: frames[10].data[0].lead[3]},
        { class: "movie30", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[4], release_date: frames[10].data[0].release[4], box_office: frames[10].data[0].box_office[4], leads: frames[10].data[0].lead[4]},
        { class: "movie31", year: "2017", value: frames[10].data[0].value[0], title: frames[10].data[0].title[5], release_date: frames[10].data[0].release[5], box_office: frames[10].data[0].box_office[5], leads: frames[10].data[0].lead[5]},
        { class: "movie32", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[0], release_date: frames[11].data[0].release[0], box_office: frames[11].data[0].box_office[0], leads: frames[11].data[0].lead[0]},
        { class: "movie33", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[1], release_date: frames[11].data[0].release[1], box_office: frames[11].data[0].box_office[1], leads: frames[11].data[0].lead[1]},
        { class: "movie34", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[2], release_date: frames[11].data[0].release[2], box_office: frames[11].data[0].box_office[2], leads: frames[11].data[0].lead[2]},
        { class: "movie35", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[3], release_date: frames[11].data[0].release[3], box_office: frames[11].data[0].box_office[3], leads: frames[11].data[0].lead[3]},
        { class: "movie36", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[4], release_date: frames[11].data[0].release[4], box_office: frames[11].data[0].box_office[4], leads: frames[11].data[0].lead[4]},
        { class: "movie37", year: "2018", value: frames[11].data[0].value[0], title: frames[11].data[0].title[5], release_date: frames[11].data[0].release[5], box_office: frames[11].data[0].box_office[5], leads: frames[11].data[0].lead[5]},
        { class: "movie38", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[0], release_date: frames[12].data[0].release[0], box_office: frames[12].data[0].box_office[0], leads: frames[12].data[0].lead[0]},
        { class: "movie39", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[1], release_date: frames[12].data[0].release[1], box_office: frames[12].data[0].box_office[1], leads: frames[12].data[0].lead[1]},
        { class: "movie40", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[2], release_date: frames[12].data[0].release[2], box_office: frames[12].data[0].box_office[2], leads: frames[12].data[0].lead[2]},
        { class: "movie41", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[3], release_date: frames[12].data[0].release[3], box_office: frames[12].data[0].box_office[3], leads: frames[12].data[0].lead[3]},
        { class: "movie42", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[4], release_date: frames[12].data[0].release[4], box_office: frames[12].data[0].box_office[4], leads: frames[12].data[0].lead[4]},
        { class: "movie43", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[5], release_date: frames[12].data[0].release[5], box_office: frames[12].data[0].box_office[5], leads: frames[12].data[0].lead[5]},
        { class: "movie44", year: "2019", value: frames[12].data[0].value[0], title: frames[12].data[0].title[6], release_date: frames[12].data[0].release[6], box_office: frames[12].data[0].box_office[6], leads: frames[12].data[0].lead[6]},
    
    ];
    // Create the scale
    const x = d3.scalePoint()
      .domain(years.map(years => years.toString()))
      .range([200, 1000]);
  
    // Select the SVG element and add groups for each data point
    var groups = svg.selectAll("g")
      .data(dataLead)
      .enter()
      .append("g")
      .attr("transform", function(d) { 
        return "translate(" + x(d.year) + ",450)"; 
      });
  
      //tooltiphtml function
      function getTooltipHtml(className, data) {
        // Find the data object with the matching class name
        const obj = data.find(d => d.class === className);
  
        // Construct the tooltip HTML using the object properties
        const html =  `<strong>Movie Title:</strong> ${obj.title}<br>,
                       <strong>Release Date:</strong> ${obj.release_date}<br>
                       <strong>Box Office:</strong> $${obj.box_office}`;
      
        return html;
      }
    //tooltip var
    var Tooltip = d3.select("#myTooltip")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
    //mouseover function
    var mouseover = function(d) {
        Tooltip
          .style("opacity", 1)
        d3.select(this)
          .style("stroke", "black")
          .style("opacity", 1)
      }
      //removed since classname cannot be found
    // var mousemove = function(d) {
        // // Get the class name of the element
        // const className = d.class;

        // Get the tooltip HTML for the class name
        // const tooltipHtml = getTooltipHtml(className, dataLead);
        //get position of mouse
    //     const [x, y] = d3.mouse(this);
    //     Tooltip
    //         .style("left", x + 10 + "px")
    //         .style("top", y + 10 + "px")
    //         .html(tooltipHtml)
    // }

    var mouseleave = function(d) {
        Tooltip
          .style("opacity", 0)
        d3.select(this)
          .style("stroke", "none")
          .style("opacity", 0.8)
    }
    // Add circles to each group
    groups.selectAll("circle") 
      .data(function(d) { return d3.range(d.value); })
      .enter()
      .append("circle")
    // removed because cannot append classname
    //   .attr("class", function(d, i) { 
    //     return d[i].class;
    // })

      .attr("cx", 0)
      .attr("cy", function(d, i) {
        return -(i * 50);
      })
      .attr("r", 20)
      .attr('stroke', 'black')
      .attr('fill', '#ee9b00')
    //   was trying to change the colors accoridng to the actors, but could nt because did not bind data together
    //   .style("fill", function(d) {
    //     if (d.leads === "DWAYNE JOHNSON") {
    //         return "red";
    //     } else if (d.leads === "JOHN CHO") {
    //         return "orange";
    //     } else if (d.leads === "KEANU REEVES") {
    //         return "yellow";
    //     }})
    //     } else if (d.leads === "CONSTANCE WU") {
    //         return "yellow";
    //     } else if (d.leads === "DEV PATEL") {
    //         return "yellow";
    //     } else if (d.leads === "HAILEE STEINFIELD") {
    //         return "yellow";
    //     }
      
    // })
      .on("mouseover", mouseover)
    //   .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)


      // Add x axis
      svg.append("g")
      .attr("transform", "translate(0,500)")
      .call(d3.axisBottom(x));
    });
//       .attr("data-title", function(d) {
//         return "<strong>Movie Title:</strong> " + d.title + "<br>" +
//                "<strong>Release Date:</strong> " + d.release_date + "<br>" +
//                "<strong>Box Office:</strong> $" + d.box_office;
//       })

//     circles.each(function() {
//         d3.select(this).attr("data-toggle", "tooltip")
//                        .attr("data-placement", "top")
//                        .attr("data-html", "true")
//                        .attr("title", d3.select(this).attr("title"));
//       });
      
// // Initialize tooltips
//       $(function () {
//         $('[data-toggle="tooltip"]').tooltip()
//       })
    
    // circles.each(function(d) {
    //   this.setAttribute("data-toggle", "tooltip");
    //   this.setAttribute("data-placement", "top");
    //   this.setAttribute("data-html", "true");
    //   this.setAttribute("title", d3.select(this).attr("data-title"));
    // });
    
    // // Add event listener for tooltips
    // document.addEventListener("mouseover", function(e) {
    //   if (e.target && e.target.getAttribute("data-toggle") === "tooltip") {
    //     e.target.setAttribute("title", e.target.getAttribute("data-title"));
    //   }
    // });
    
    // // Remove tooltip when mouse leaves the element
    // document.addEventListener("mouseout", function(e) {
    //   if (e.target && e.target.getAttribute("data-toggle") === "tooltip") {
    //     e.target.removeAttribute("title");
    //   }
    // });

       

    // Define the tooltip
//     var tip = d3.tip()
//       .attr('class', 'd3-tip')
//       .offset([-10, 0])
//       .html(function(d) {
//         return "<strong>Movie Title:</strong> " + d.Title + "<br>" +
//                "<strong>Release Date:</strong> " + d.Release_Data + "<br>" +
//                "<strong>Box Office:</strong> $" + d.Worldwide_Box_Office + " million<br>" 
//             //    "<img src='" + d.poster_url + "' width='150px'>";
//       });
  
//     // Call the tooltip on the circles
//     circles.call(tip);
  
//     // Add mouseover and mouseout events to show/hide the tooltip
//     circles.on('mouseover', tip.show)
//            .on('mouseout', tip.hide);
  





// // Create the scale
// var x = d3.scalePoint()
//     .domain(["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"])         // This is what is written on the Axis: from 0 to 100
//     .range([200, 1000]);       // This is where the axis is placed: from 100 px to 800px



// //define th data
// var dataLead = [
//     {year: "2007", value: 2},
//     {year: "2008", value: 3},
//     {year: "2009", value: 3},
//     {year: "2010", value: 2},
//     {year: "2011", value: 1},
//     {year: "2012", value: 2},
//     {year: "2013", value: 3},
//     {year: "2014", value: 4},
//     {year: "2015", value: 1},
//     {year: "2016", value: 4},
//     {year: "2017", value: 6},
//     {year: "2018", value: 6},
//     {year: "2019", value: 7}
//   ];

// var groups = svg.selectAll("g")
//   .data(dataLead)
//   .enter()
//   .append("g")
//   .attr("transform", function(d) { 
//     return "translate(" + x(d.year) + ",450)"; 
//   });

// groups.selectAll("circle")
//   .data(function(d) { return d3.range(d.value); })
//   .enter()
//   .append("circle")
//   .attr("id", "circleBasicTooltip")
//   .attr("cx", 0)
//   .attr("cy", function(d, i) {
//     return -(i * 50);
// })
//   .attr("r", 20);

// svg.append("g")
//   .attr("transform", "translate(0,500)")
//   .call(d3.axisBottom(x));


// Add 1 circle for the group B:
// svg
//   .append("circle")
//   .attr("cx", x("2007"))
//   .attr("cy", 30)
//   .attr("r", 10)

// var margin = {top: 10, right: 30, bottom: 30, left: 40},
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom
// // append the svg object to the body of the page
// var svg = d3.select("#type-of-actors")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");
// //load data
// d3.csv("https://raw.githubusercontent.com/leejiaren-nm2207/leejiaren-nm2207.github.io/main/resources/APIleads.csv", function(data) {
//     // function getDataByYear(Year) {
//     //     return rows.filter(row => row.Year === Year.toString());
//     //   }
//     // const years = d3.range(2007, 2019, 1);
//     // svg.append("g")
//     //   .attr("transform", "translate(0," + height + ")")
//     //   .call(d3.axisBottom(years).ticks(13));
//     var value = identity,
//     domain = extent;
//     //intitializing bins
//       var i,
//       n = data[/]/       x,
//       values = new Array(n);
//       console.log("n=", n);
//     //a tuple of index and value
//       for (i = 0; i < n; ++i) {
//         values[i] = value(data[i], i, data);
//       }
//     // Draw the histogram bars
//     var bins = d3.histogram()
//         // .value(function(d) { return d["Year"]; })
//         .domain([2007, 2019])
//         .thresholds(d3.range(2007, 2020))(values);
//     svg.selectAll("rect")
//         .data(bins)
//         .enter()
//         .append("rect")
//           .attr("x", 1)
//           .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + height + ")"; })
//           .attr("width", function(d) { return x(d.x1) - x(d.x0) - 1; })
//           .attr("height", function(d) { return height - y(d[}])
//           .style("fill", "steelblue")
//           .style("opacity", 0.5);
//           svg.selectAll("circle")
//           .data(data)
//           .enter()
//           .append("circle")
//             .attr("cx", function(d) { return x(d["Year"]); })
//             .attr("cy", function(d) { return height; })
//             .attr("r", 4)
//             .style("fill", "white")
//             .style("stroke", "steelblue")
//             .style("stroke-width", 2)
//             .style("opacity", 1)
//             .transition()
//             .duration(1000)
//             .delay(function(d,i) { return i * 2; })
//             .attr("cy", function(d) { return height - y(1); });
//     });
//const data6 ={}

//new Chart("ethnicdiv")
//two tabs, one dipcts map with regional variation, the second tab showcases the ethnic difference using circular packing

//chart no3
//const for the data later
const stereotypes = ["Dragon Lady",    "Nerd",    "Model Minority",    "Exotic Woman",    "Foreign",    "Martial Arts"]
const displayed = [3.5,    4.5,    5,    4.5,    4.5,    5.5    ]
const subverted = [-1.5,    -2,    -1.5,    0,    0,    -2.5    ]

//data for config
const dataType = {
    labels: stereotypes,
    datasets: [
      {
        label: 'Displayed',
        data: displayed,
        borderColor: "rgba(241, 250, 238, 1)",
        backgroundColor: "rgba(168, 218, 220, 1)",
      },
      {
        label: 'Subverted',
        data: subverted,
        borderColor: "rgba(241, 250, 238, 1)",
        backgroundColor: "rgba(230, 57, 70, 1)",
      }
    ]
  };


const barChart = document.getElementById('stereo');
const cardType = document.getElementById('typecards');
const originalImagePath = './resources/orig.png'

//new Chart("stereo")
const chartType = new Chart("stereo",
    {
        type: "horizontalBar",
        data: dataType,
    options: {
        maintainAspectRatio: false,
        elements: {
        bar: {
            borderWidth: 1,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        title: {
            display: true,
            text: ['Percentage of displayed and subverted stereotypes among API CHARACTERS']
        }
        },
        // onHover: function(evt) {
        //     const activeBar = this.getElementAtEvent(evt)[0];
        //     if (activeBar) {
        //       const stereotype = stereotypes[activeBar.index];
        //       // update the content of the card-type div
        //       imageChange;
        //     }
        //   },
        //   onLeave: function(evt) {
        //     const cardType = document.getElementById("card-type");
        //     // reset the content of the card-type div
        //     cardType.src = "./resources/act1.png";
        //   }
    },
}); 

//mousemove function
//i orginally wanted to change the html within for higher resolution, but had no time.
barChart.addEventListener('mousemove', (event) => {
    const activePoints = chartType.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (activePoints[0]) {
      const idx = activePoints[0]._index;
      if (typeof idx !== 'undefined') {
        if (idx == 2) {
            
        }
        const stereotype = stereotypes[idx];
        const imagePath = `./resources/${stereotype}.png`;
        cardType.src = imagePath;
      } else {
        cardType.src = originalImagePath;
      }
    }
})
barChart.addEventListener('mouseout', (event) => {
    cardType.src = originalImagePath;
  });

//bar chart that shows the different stereotypes. when you hover over a bar you have see a card pop up to explain
