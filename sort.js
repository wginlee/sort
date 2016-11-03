var array = [10, 2, 5, 1, 9];
console.log(array.sort(function(a, b){
  return a - b;
}));


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//implement a asort function which sorts the array
// first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.
var sorted = students.sort(function (a, b){
  //-  a comes first (ascending)
  //0  leave positions unchanged
  //+  b comes first (descending)

  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  else{
    if (b.age > a.age) return 1;
    if (b.age < a.age) return -1;
    else return 0;
  }

});

console.log(sorted);