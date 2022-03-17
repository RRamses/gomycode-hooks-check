import { Userlist } from './component/Userlist';
import { useState } from "react"
import { Searchbar } from './component/Searchbar';

import './App.css';


function App (){
    
  const [ name , setname] = useState(
    [ 
      {
        id:0 ,
        name:"raoul"
      }
    ]
    );

    const dellete=(id)=>{
      alert(id)
    let newstudent=name.filter(student=>student.id !== id);
    setname(newstudent)
    
  }

  const handleAdd=(user)=>{

    let newUser=[...name];
    newUser.push(user);
    setname(newUser);
    }
    
  return (
    <div className="App">
      <div className="bigbox">
        <Searchbar addUser={handleAdd}/>
        <hr />
        <Userlist users={name} handleDelete={dellete}/>
      </div>
    </div>
  );
}

export default App;