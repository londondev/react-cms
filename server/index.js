import express from 'express';
import bodyParser from 'body-parser';
import {getMenu, saveMenu} from './menu-service';
import {getContent, saveContent} from './content-service';
import promiseHandler from './promiseHandler';
import cors from 'cors';

var app = express();  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.text({ type: 'text/html' }))
app.use(cors());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', async(req, res)=> {
    let err, menu;
    [err, menu] =await promiseHandler(getMenu());
    if(err)
      return return500(err);
    res.send(menu);   
});

router.post('/menu', async (req,res) => {
    let err, menu;
    [err, menu] =await promiseHandler(saveMenu(JSON.stringify(req.body)));
    if(err)
      return return500(err);
    res.send(req.body);
});

router.get('/content', async (req,res) => {
    let err, content;
    [err, content] =await promiseHandler(getContent(req.param('path')));
    if(err)
      return return500(err);
    res.send(content);
});

router.post('/content', async (req,res) => {
    let err, content;
    [err, content] =await promiseHandler(saveContent(req.param('path'), req.body));
    if(err)
      return return500(err);
    res.send('success');
});

router.post('/content', (req,res) =>{
    
});

const return500=(err)=>{
    console.log('error', err);
    res.status(500).send({error:'Unexpected error occured'});
}

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
  