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
          let existe = false
          for(var obje of logins){
            if(obje.username === user){
              existe = true
            }
          }
          if(existe === false){
            const u = new count(user, pass);
            //coloquei esta parte para não ficar aparecendo count na frente do objeto
            //sem ele aparecia assim count{username:'valor', password:'valor'}
            //também tentei fazer com que salva-se no arquivo dados.json, mas não consegui, olhei alguns videos sobre, mas precisava criar um servidor backend, e não entendi como fazelo por isso dexei assim mesmo.
            const s = {username: u.username, password: u.password}
            logins.push(s);
          }
          else{
            alert('Este nome de usuario ja existe porfavor escolha outro.')
          }
           
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
