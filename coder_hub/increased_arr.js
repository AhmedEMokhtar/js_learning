function increasing_array(arr) {
  var points = 0;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index + 1] < arr[index]) {
      points += arr[index] - arr[index + 1];
    }
  }
  console.log(points);
}
increasing_array((arr = [1, 2, 1, 5, 3]));
