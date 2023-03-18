
//intro
//chart no 1
const data1 = {
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
        data: data1,
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
//chartno1
//const data4 = {}

//new Chart("proprep")
//prob using line chart here 
//const data5 = {}

//chartno2
//const data5 = {}
const data5 = {
    labels: ["API Characters", "Asian Characters", "NHPI Characters"],
    datasets: [
        {
            label: "Number of films missing API characters",
            data: [507, 523, 1225],
            borderWidth: 1,
            backgroundColor: 'hsla(34, 100%, 47%, 1)',
            borderColor: "hsla(240, 0, 0, 0)",

        },
        {
            label: "Number of films with API characters",
            data: [793, 777, 75],
            borderWidth: 1,
            backgroundColor: 'hsla(34, 100%, 47%, 0.2)',
            borderColor: "hsla(240, 0, 0, 0)",

        }
    ]
};

//new Chart("invisibility")
//prob same line chart, but this time there are 1/2 tabs (see how)
new Chart("invisibilitybad",
    {
        type: "bar",
        data: data5,
        backgroundColor: "hsla(100, 0, 0, 0)",
        options: {
            reponsive: true,
            barThickness: 1,
            maintainAspectRatio: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    barPercentage: 0.4
                }],
                yAxes: [{
                    stacked: true
                }],

                legend: {
                    display: true,
                    position: "right",
                },
                title: {
                    display: true,
                    text: ["Proportion of films missing API characters out of 1300 movies", "from 2007-2019"]
                },
            }
        },
    });

const labelInvis = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", '2015', '2016', '2017', '2018', '2019'];

const data6 = {
    labels: labelInvis,
    datasets: [
        {
            label: "Number of Films Missing API",
            data: [46, 36, 44, 48, 37, 46, 44, 41, 38, 38, 31, 28, 30],
            backgroundColor: ['hsla(34, 100%, 47%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(34, 100%, 90%, 1)']
        },
        {
            label: "Number of films missing Asians",
            data: [47, 37, 44, 48, 38, 47, 45, 42, 42, 39, 32, 29, 33],
            backgroundColor: ['hsla(179, 44%, 55%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(179, 99%, 55%, 1)']
        },
        {
            label: "Number of films missing NHPI",
            data: [98, 97, 97, 97, 93, 97, 97, 97, 88, 95, 88, 88, 93],
            backgroundColor: ['hsla(179, 44%, 55%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(179, 99%, 55%, 1)']
        },
        {
            label: "Total",
            data: [191, 170, 185, 193, 168, 190, 186, 180, 168, 172, 151, 145, 156],
            backgroundColor: ['hsla(179, 44%, 55%, 1)'],
            borderColor: "hsla(240, 0, 0, 0)",
            hoverBackgroundColor: ['hsla(179, 99%, 55%, 1)']
        }
    ]
};

new Chart("invisibilitygood",
    {
        type: "line",
        data: data6,
        backgroundColor: "hsla(100, 0, 0, 0)",
        options: {
            reponsive: true,
            maintainAspectRatio: false,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: ["Change in numebr of films missing API characters out of 1300 movies", "from 2007-2019"]
                    },
                }
            },
        },
    });

//function creation for chart toggling
const invisBad = function () {
    document.getElementById("barInvis").style.display = "block";
    document.getElementById("lineInvis").style.display = "none";
}

const invisGood = function () {
    document.getElementById("lineInvis").style.display = "block";
    document.getElementById("barInvis").style.display = "none";
}

//DOM for chart toggling
document.getElementById("bad").addEventListener("click", invisBad);
document.getElementById("good").addEventListener("click", invisGood);

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

