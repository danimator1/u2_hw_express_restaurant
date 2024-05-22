
const Entrees = [
    { name: "Antipasto platter",
     price: 25, 
     vegan: true },
    { name: "Candied tomatoes on basil leaves", 
    price: 35, 
    vegan: true },
    { name: "Chicken and spinach dumplings", 
    price: 55, 
    vegan: false },
  ];
  
  

  const getEntrees = (req, res) => {
    res.send(Entrees[req.params.id])
  }

  module.exports = {
    getEntrees
  }