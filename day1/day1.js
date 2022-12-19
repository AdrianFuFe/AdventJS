function wrapping(gifts) {
    const giftsW = [...gifts];   
    let paperSize;
    for (let i=0; i< giftsW.length; i++){
      paperSize = gifts[i].length+2;
      giftsW[i]= '*'.repeat(paperSize) 
        +'\n*' 
        +giftsW[i] 
        +'*\n' 
        +'*'.repeat(paperSize);
    }
    return giftsW
  }
  