import app from './lib/app.js';

const port = process.env.PORT || 8001;

app.listen(port, () => {
    //eslint-disable-line
    console.log(`App listening at http://localhost:${port}`); //eslint-disable-line
});