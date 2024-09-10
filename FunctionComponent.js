//creating the component in SRC/Components/Login Page

export function Login() {
return (
<div>
  <label for="username">UserName</label>
  <input type="text" placeholder="name" id="username" />
  <label for="Password">Password</label>
  <input type="text" placeholder="Password" id="Password" />
</div>
);
}
//importing into other component
import { Login } from './Components/Login';
