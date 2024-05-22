
const Desserts = [
    { name: "Strawberry Crunch Cake",
     price: 10, 
     vegan: false },
    { name: "Frangipane Strawberry Shortcake", 
    price: 8, 
    vegan: false },
    { name: "German Rhubarb Almond Cake", 
    price: 11, 
    vegan: false },
  ];
  
  

  const getDesserts = (req, res) => {
    res.send(Desserts[req.params.id])
  }

  module.exports = {
    getDesserts
  }