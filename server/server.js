const app = require('./app');

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening');
});
