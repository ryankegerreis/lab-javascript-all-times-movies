/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes


function turnHoursToMinutes(array) {
  for (i = 0; i < array.length; i++) {
    let durations = array[i].duration.split(" ");
    let hours = Number(durations[0].replace("h", ""));
    let minutes = 0;
    if (durations[1]) {
      minutes = Number(durations[1].replace("min", ""));
    }
    array[i].duration = hours * 60 + minutes;
  }
  return array;
}

// Get the average of all rates with 2 decimals

function ratesAverage(array) {
  var newArray = 0;
  for (i = 0; i < array.length; i++) {
    newArray += array[i].rate;
  }
  var avg = Number(newArray / array.length).toFixed(2);

  return Number(avg);
}




// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var dramaArray = array.filter(movies => movies.genre.includes("Drama"));
  if (dramaArray.length === 0) return undefined;
  var dramaTotal = 0;
  for (i = 0; i < dramaArray.length; i++) {
    dramaTotal += dramaArray[i].rate;
  };
var avg = Number(dramaTotal / dramaArray.length);
 return(avg);
}

// Order by time duration, in growing order

// function orderByDuration (array) {
// var orderArray = parseInt(movies => movies.duration);
// array.sort(function(a, b){return b-a} );
// console.log(orderArray);
// }


// function turnHoursToMinutes(array) {
//   for (i = 0; i < array.length; i++) {
//     let durations = array[i].duration.split(" ");
//     let hours = Number(durations[0].replace("h", ""));
//     let minutes = 0;
//     if (durations[1]) {
//       minutes = Number(durations[1].replace("min", ""));
//     }
//     array[i].duration = hours * 60 + minutes;
//   }
//   return array;
// 

function orderByDuration (array) {
  for (i = 0; i < array.length; i++) {
        let durations = array[i].duration.split(" ");
        let hours = Number(durations[0].replace("h", ""));
        let minutes = 0;
        if (durations[1]) {
          minutes = Number(durations[1].replace("min", ""));
        }
        array[i].duration = hours * 60 + minutes;
      }
      return array.sort(function(a,b){
        return a.duration != b.duration ? a.duration-b.duration : a.title.localeCompare(b.title) 
      });
}

// How many movies did STEVEN SPIELBERG direct

// Order by title and print the first 20 titles

// Best yearly rate average