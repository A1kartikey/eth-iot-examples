import express from 'express';
import switchExample from './examples/switchExample';

const PORT = 3030;

let app = new express();
app.set('port', PORT)

app = switchExample(app);

app.listen(app.get('port'), ()=>{
  console.log(`PI-Node on port ${app.get('port')}`);
})