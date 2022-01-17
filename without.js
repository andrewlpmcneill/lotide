const without = (source, itemsToRemove) => {
  
  const output = [];
  for (const element of source) {
    
    for (let i = 0; i < itemsToRemove.length; i++) {
      
      if (element === itemsToRemove[i]) {
        
        break;
        
      }
      
      if (i === itemsToRemove.length - 1) {
        
        output.push(element);
        
      }
      
    }
    
  }
  
  return output;
  
};

console.log(without([1, 4, 2, 3, 2, 4], [2, 4]));

module.exports = without;