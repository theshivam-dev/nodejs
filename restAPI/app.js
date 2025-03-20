import express from "express";
import fs from "fs/promises";
const app = express();
const PORT = 3000;


// Middleware - Plugin
app.use(express.urlencoded({ extended:false}))

app.get("/api/users", async (req, res) => {
  const users = await fs.readFile("MOCK_DATA.json");
  return res.json(JSON.parse(users));
});

app.get("/users", async (req, res) => {
  const users = JSON.parse(await fs.readFile("MOCK_DATA.json", "utf-8"));
  const html = `
<ul> 
${users
  .map((user) => {
    return ` <li> ${user.first_name}</li> `;
  })
  .join("")}
</ul>
`;
  res.send(html);
});

app.get("/api/users/:id", async (req, res) => {
  const users = JSON.parse(await fs.readFile("MOCK_DATA.json", "utf-8"));
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.route('/api/users/:id').get((req, res)=>{  
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user);
})
.patch((req, res) =>{
  // TODO : edit the user with id
  return res.json({status : 'Pending'})
})
.delete((req , res)=>{
  // TODO : delete the user with id
  res.json({status : 'Pending'})
})


app.post('/api/users' ,async (req , res)=>{
    const users = JSON.parse(await fs.readFile("MOCK_DATA.json", "utf-8"));
    const body = req.body
    users.push({...body,id:users.length + 1})
    await fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2)); // Pretty format JSON
    return res.json({ status: "success", id: users.length});
})

// app.patch('/api/users/:id' , (req , res)=>{
//     // TODO : Edit the user with id
//     return res.json({status: "pending"});
// })
// app.delete('/api/users/:id' , (req , res)=>{
//     // TODO : delete the user with id
//     return res.json({status: "pending"});
// })

app.listen(PORT, () => console.log(`server started at ${PORT}`));
