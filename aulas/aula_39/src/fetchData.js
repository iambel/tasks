function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dados recebidos");
    }, 2000);
  });
}

module.exports = fetchData;
