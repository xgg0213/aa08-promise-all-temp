function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

function workout() {
  // refactor this code to use Promise.all
  // stretch()
  //   .then(runOnTreadmill)
  //   .then(liftWeights)
  //   .then(() => console.log("done working out"))
  //   .catch((err) => console.log(err));

  const values = [
    stretch(),
    runOnTreadmill(),
    liftWeights()
  ]

  const superPromise = Promise.all(values); // Promise.all !== .then's, it takes all values, but does not guaranteee the values run in order, 
                                            // the timing depends on the setTimeOut in this case
                                            // different use case: just checking to make sure all promises run successfully, if 1 is rejected, the entire superPromise is rejected
                                            // the .then's will make sure promises runs in order

  superPromise
    .then()
    .then(() => console.log("done working out"))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done running on treadmill
    // done stretching
    // done lifting weights
    // done working out