
const Appetizers = [
    { name: "Party Meatballs",
     price: 12, 
     vegan: false },
    { name: "Clam Dip", 
    price: 15, 
    vegan: true },
    { name: "Perfect Charcuterie Board", 
    price: 14, 
    vegan: false },
  ];
  
  

  const getAppetizers = (req, res) => {
    res.send(Appetizers[req.params.id])
  }

  module.exports = {
    getAppetizers
  }