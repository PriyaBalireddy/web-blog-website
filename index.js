import express from 'express';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public')); 


app.get('/', (req, res) =>{
  res.render('ncc_chronicles');
});
app.get('/ncc', (req, res) => {
  res.render('ncc_chronicles');
});
app.get('/tech', (req, res) =>{
  res.render('tech_coding_corner')
});
app.get('/growth', (req, res) => {
  res.render('personal_growth')
});
app.get('/events', (req, res) => {
  res.render('events_achievements')
});
app.get('/leadership', (req, res) => {
  res.render('leadership_motivation')
});

app.listen(port, () =>{
   console.log(`SUO's Log is running at http://localhost:${port}`);
  });
