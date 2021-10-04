const { articles } = require('./handler');

const dataParams = process.argv[process.argv.indexOf('--data') + 1]

articles(dataParams).then(r => {
  console.log(r);
})
