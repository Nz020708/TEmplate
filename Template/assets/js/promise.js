let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 4000);
  });
  
  // resolve runs the first function in .then
  promise.then(
   result=> console.log(`Success: ${result}`)) // shows "done!" after 1 second
// error=> console.log(`Error: ${error}`));
