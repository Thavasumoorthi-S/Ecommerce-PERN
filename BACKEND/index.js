const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const db=require('./db')
const app=express();
app.use(cors())
app.use(bodyparser.json({extended:true,limit:'50mb'}))



app.post('/setuser', async (req, res) => {
    try {
      const { name, email,password } = req.body;
      const newItem = await db.one('INSERT INTO "Users"."user1"(name, email,password) VALUES ($1, $2,$3) RETURNING *', [name, email,password]);
      res.json(newItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  
  
  app.post('/checkuser', async (req, res) => {
    try {
        const {email,password}=req.body
      const items = await db.one('SELECT * FROM "Users"."user1" WHERE email = $1', email);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.post('/setitem/:useremail',async(req,res)=>{
   try {
    const {useremail}=req.params;
    const {id,price,brand,size,img,amount,type}=req.body;
    console.log(useremail,id,price,brand,size,img,amount,type)
    const newItem = await db.one('INSERT INTO "Users"."useritem"(id, price,brand,size,img,amount,type,useremail)VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [id,price,brand,size,img,amount,type,useremail]);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})


app.get('/getitem/:useremail',async(req,res)=>{

    try {
        const {useremail}=req.params
        console.log(useremail)
      const items = await db.any('SELECT * FROM "Users"."useritem" WHERE useremail = $1', useremail);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
})


app.delete('/deleteitem/:useremail/:id',async(req,res)=>{

    try {
        const {useremail,id } = req.params;
        console.log(useremail,id)
        await db.none('DELETE FROM "Users"."useritem" WHERE useremail = $1 AND id=$2 ',[useremail,id]);
        res.json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})
