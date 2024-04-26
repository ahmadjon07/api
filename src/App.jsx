import { useEffect, useState } from 'react';
import './App.scss';

function App() {
    const[users, SetUsers] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  .then((data)=> SetUsers(data))
 
  })
 
  return (
    <div className="App">
      <div className="wrapper">
      {users.map((item)=>(
        <div class="card" style={{width:"18rem"}}>
        <img src={item.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}

export default App;