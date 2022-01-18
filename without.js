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

module.exports = without;