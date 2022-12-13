d3.csv('https://assets.codepen.io/9330932/2010_top50.csv')
  .then(makeChart);

d3.csv('https://assets.codepen.io/9330932/2010_top50.csv')
    .then(res => {
        console.log(res)
    })



const reader = new FileReader();

reader.onload = function(event) {
  console.log(event.target.result);
};

function csvToArray(str, delimiter = ',') {
  
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
  
}
function injectHTML(list) {
  const target = document.querySelector('#song_list');
  target.innerHTMl = '';
  
  const listEL = document.createElement('ol');
  target.appendChild(listEl);
  list.forEach((item) => {
    const el = document.createElement9('li');
    el.innerText = item.name;
    listEL.appendChild(el);
  });
}

function processSongs(list) {
  console.log('fired songs list')
}

async function mainEvent() {
  
  let currentList = [];
  const form = document.querySelector('.main_form'); // get your main form so you can do JS with it
  const submit = document.querySelector('#get-songs');
  const target = csvToArray('https://assets.codepen.io/9330932/2010_top50.csv');
  const results = await fetch(target).then((response) => response.text()).then((data) => console.log(data));
  
  form.addEvemtListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    
    currentList = csvToArray('https://assets.codepen.io/9330932/2010_top50.csv');
    console.log(currentList);
    injectHTML(currentList);
  })
  
}


function makeChart(artists) {
  var artistLabels = artists.map(function(d) {return d.artist});
  var genreLabels = artists.map(function(d) {return d.top_genre});
  var energyLevels = artists.map(function(d) {return d.nrgy});
  var yearLabels = artists.map(function(d) {return d.year})
  var songLabels = artists.map(function(d) {return d.title})
  var chart = new Chart('chart', {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      options: {
        plugins: {
            colorschemes: {
                scheme: 'brewer.Paired12'
            }
        }
    },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Energy Levels',
              fontSize: 15
            }
          }
        ]
      }
    },
    data: {
      labels: songLabels,
      datasets: [
        {
          data: energyLevels
        }
        
      ]
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => mainEvent());