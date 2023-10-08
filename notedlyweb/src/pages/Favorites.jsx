import React, { useEffect } from 'react';

export const Favorites = () => { 
  useEffect(() => {      
    document.title = 'Favorites — Notedly';     
  });
  
  return (
    <div>
      <p>These are my favorites</p>       </div>
  );
};
  

