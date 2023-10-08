import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import { Home } from "./Home";
import { MyNotes } from "./MyNotes";
import { Favorites } from "./Favorites";

export const Pages = () => { 
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route exact path="" element={<Home/>} />
        <Route path="/mynotes" element={<MyNotes/>} />         
        <Route path="/favorites" element={<Favorites/>} />
      </Route>
    </Routes>
  );
};

// <Routes>
// <Route path='/' element={<MainLayout/>}>
//   <Route path='' element={<Home/>}/>
//   <Route path='cart' element={<Cart/>}/>
//   <Route path='pizza/:id' element={<FullPizza/>}/>
//   <Route path='*' element={<NotFound/>}/>
// </Route>

// </Routes>