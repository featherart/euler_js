// get all the permutations
function cartesian(arr) {
  var holder = [];
  var length = arr.length;
  for( var i = 0; i < length; i++ ) {
    for( var j = i + 1; j < length; j++ ) {
      holder.push([arr[i], arr[j]]);
    }
  }
  return holder;
}

var letters = ['a', 'b', 'c', 'd', 'e'];
console.log(cartesian(letters));
