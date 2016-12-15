module.exports = (results) => {
  // console.log('jestResults', results);
  if (process.send) {
    process.send(results);
  }
  return results;
};
