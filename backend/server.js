const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const connectDB = require('./config/db');
const app = require('./routes/app');

const PORT = process.env.PORT || 5000;

//CONNECT TO DATABASE
connectDB();

//DEFINE A ROUTE FOR THE ROOT URL
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

//START THE SERVER AND LISTEN ON THE DEFINED PORT
//app.listen(PORT, () => {
//  console.log(`server is running on port ${PORT}`);
//});
