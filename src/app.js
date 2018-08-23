const app = require('express')();
const bodyParser = require('body-parser');
const openapi = require('express-openapi');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerUi = require('swagger-ui-express');

const docsPath = path.resolve(__dirname, './config/api-doc.yml');
const apiDoc = fs.readFileSync(docsPath, 'utf8');
const routes = path.resolve(__dirname, 'routes');

const swaggerDocument = yaml.safeLoad(apiDoc);

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

openapi.initialize({
  apiDoc, app,
  promiseMode: true,
  paths: routes
});

app.use((err, req, res) => {
  res.status(err.status).json({message: err.message});
});

const port = 3030;
app.listen(port);

console.log('app listen on port ' + port);

module.exports = app;
