
//intro
//chart no 1
const dataANA = {
    labels: ["Asian", "Non-Asian"],
    datasets: [
        {
            label: "proportion of asian nominees and winners",
            data: [0.02, 0.98], //in percentage
            borderWidth: 2,
            backgroundColor: ['hsla(34, 100%, 47%, 1)', 'hsla(179, 44%, 55%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(34, 100%, 90%, 1)', 'hsla(179, 99%, 55%, 1)']
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
                display: false,
                text: "the first chart", //don't want title to be seen
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
const withProp = [16, 15, 11, 10, 17, 16, 14, 16, 15, 14, 25, 17, 18]
//below prorep
const belowProp = [78, 69, 73, 75, 67, 73, 73, 68, 68, 66, 57, 55, 54]
//above proprep
const aboveProp = [6, 16, 16, 15, 16, 11, 13, 16, 17, 20, 18, 28, 28]
//year label
const year = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
//DOM slider
const sliderT = document.getElementById("timeScro");

//event listener to scroller

sliderT.addEventListener('change', function() {updatePropChart(this.value);});
sliderT.addEventListener('input', function() {updatePropChart(this.value);});

//event to change data range
function updatePropChart(val) {
    const step = year.findIndex((element => element === val.toString())) // Parse new integer value from the slider update. parseInt() converts string to int
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
                    borderColor: 'rgba(10, 147, 150, 1)',
                    backgroundColor: 'rgba(10, 147, 150, 0.2)',
                    borderWidth: 2,
                    data: withProp.slice(0, step),
                },
                {
                    label: "Number of Films below Proportional Representation of API",
                    borderColor: 'rgba(238, 155, 0, 1)',
                    backgroundColor: 'rgba(238, 155, 0, 0.2)',
                    borderWidth: 2,
                    data: belowProp.slice(0, step),
                },
                {
                    label: "Number of Films above Proportional Representation of API",
                    borderColor: 'rgba(174, 32, 18, 1)',
                    backgroundColor: 'rgba(174, 32, 18, 0.2)',
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





var canvas = document.getElementById('lineInvis');
var width = canvas.scrollWidth;
var height = canvas.scrollHeight;
console.log('width' + width)
console.log('heig' + height)

 
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
    gradientBg.addColorStop(0.9, "hsla(34, 100%, 47%, 0.9)")
    const setTT = [{
        label: 'Total',
        data: missingTT,
        borderColor: "hsla(34, 100%, 47%, 1)",
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
    gradientBg.addColorStop(1, "hsla(63, 69%, 74%, 0.9)")
    const setAPI = [{
        label: 'API',
        data: missingAPI,
        borderColor: "hsla(63, 69%, 74%, 1)",
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
    gradientBg.addColorStop(1, "hsla(179, 44%, 55%, 0.9)")
    const setASN = [{
        label: 'ASIAN',
        data: missingASN,
        borderColor: "hsla(179, 44%, 55%, 1)",
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
    gradientBg.addColorStop(0.5, "hsla(355, 39%, 28%, 0.5)")
    gradientBg.addColorStop(1, "hsla(355, 39%, 28%, 1)")
    const setNHPI = [{
        label: 'NHPI',
        data: missingNHPI,
        borderColor: "hsla(355, 39%, 28%, 1)",
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


//act2
//chart no1
//const data6 ={}

//new Chart("type-of-actors")
//this time its a doughtnut chart showing the number of movies each actor in relation to all other API actors. There will be icons at the side with actor's pix and name (those that are more than 1) and when you hover over that actor, the proportion of their movies will appear.

//chart no2
//const data7 = {}

//new Chart("ethnicdiv")
//two tabs, one dipcts map with regional variation, the second tab showcases the ethnic difference using circular packing

//chart no3
//const data8 = {}

//new Chart("stereo")
//bar chart that shows the different stereotypes. when you hover over a bar you have see a card pop up to explain

