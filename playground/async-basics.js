console.log("Starting App");
setTimeout(() => {
  console.log('Inside first callback')
},2000);

setTimeout(() => {
  console.log('Inside second callback');
},0);

console.log("Finishing App");
