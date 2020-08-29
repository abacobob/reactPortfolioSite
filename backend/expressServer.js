//Creating an Express server for the react demo project 'Restaurante Valle de la Sella'.

const express = require('express');
const app = express();
const port = 5000;

//The Menu object is held here but could easily be a database etc at the clients request
let menu = [
    {category: 'Small plates', name: 'Pulpo a la Galega', desc: 'Grilled local Octopus, charred and seasoned in the Galician style', price: 8.50 },
    {category: 'Small plates', name: 'Socorrat de gambas', desc: 'Barbecued ocean shrimp served on a seafood risotto', price: 7.00 },
    {category: 'Small plates', name: 'Jamon iberico', desc: 'A platter of Iberico ham with fresh bread and butter from our dairy', price: 7.50 },
    {category: 'Small plates', name: 'Hamburguesa Wagyu', desc: 'A juicy hamburger made with local Wagyu beef', price: 7.50 },
    {category: 'Small plates', name: 'Ravioli de Carrillera de Res', desc: 'Ravioli of slow-cooked beef cheek, served au jus', price: 6.99 },
    {category: 'Desserts', name: 'Flan de Queso', desc: 'Traditional vanilla flan, smooth and sweet', price: 3.50 },
    {category: 'Desserts', name: 'Arroz con Leche', desc: 'Grandma-style rice pudding, creamy and unctuous', price: 2.99 },
  ];

app.get('/',(req,res) =>{
            res.setHeader('Access-Control-Allow-Origin','*'),
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.send(menu); 

});

app.post('/',(req,res)=>{
  
  let body = [];
  
  req.on('data', (chunk) => {
          body.push(chunk);})
      .on('end', () => {
          body = Buffer.concat(body).toString();
         
          console.log('\n  Order received: ', body  + '\n')
         
        });
  
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.send('Order successfully recieved by server');
});
    

app.listen(port, () =>{console.log(`Restaurant demo site: server listening on port ${port}`)});