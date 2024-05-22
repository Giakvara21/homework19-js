function asyncFunction(inputString) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputString.length > 10) {
        resolve(inputString);
      } else {
        reject("This is async function");
      }
    }, 5000);
  });
}

asyncFunction("Hello World!")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

asyncFunction("Hello")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
