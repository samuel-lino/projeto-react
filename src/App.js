import {useState} from 'react'
import './style.css'
import login from './dados.json'
function App() {
  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  const logins = login
  class count {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  }
  function logar(){
    console.log(logins)
    if(user !== ''){
      if(pass !== ''){
          let logando = false;
          for (const obje of logins) {
            if (obje.username === user) {
              if (obje.password === pass){
                alert('Olá ' + user + ', seja bem vindo!')
                logando = true;
                return;
              };
            };
          };
          if (logando === false) {
            alert('senha ou nome de usuario estão incorretos ou você não possui cadastro clique em criar conta para criala');
          };
        };
      } 
    }
    function criarconta() {
      if(user !== ''){
        if(pass !== ''){
          const u = new count(user, pass);
          logins.push(u);
        }
      }
      
    };
    
  return (
    <div className="conteiner">
      <div className="conteinerLogin">
          <h3>Login</h3>
          <label form="Username">Username</label>
          <input id="Username" placeholder="username" value={user} onChange={(e) => setuser(e.target.value)}/>
          <label form='password'>Password</label>
          <input id="Password" placeholder="password" value={pass} onChange={(e) => setpass(e.target.value)}/>
          <button id="login" onClick={logar}>login</button>
          <button id="CreatCount" onClick={criarconta}>creat count</button>
      </div>
    </div>
)}

export default App;
