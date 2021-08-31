var Name = "";
var passWord = "";

class Login extends HTMLElement {
    constructor() {
        super();
    }
    async  login(name,password) 
    {console.log(name," ",password);
  let res= await fetch('http://localhost:4001/login/login',{    headers:{          
      'Accept': 'application/json',
      'Content-Type': 'application/json'},
      credentials: 'same-origin',
    // },      credentials: 'include',
    method: 'post',  body:JSON.stringify( {username:name,password:password})}).then(e=>{console.log(document.cookie)});
    console.log(res);

    console.log(JSON.stringify({username:name,password:password}))
    }
    connectedCallback() {
        this._render();
    }
    get img() {
        return this.getAttribute("title");
    }

    set img(value) {
        this.setAttribute("title", value);
    }


    async  _render() {
        let user=await fetch('http://localhost:4001/login/user',{       credentials: 'include',
        method: 'get'});
        
        console.log(user.data);
        const container = document.createElement("div");
        container.innerHTML = `
        <style>
       #popUp{
            position:fixed;
            justify-content:center;
            width:100vw;
            height: 100%;
            background-color: rgb(0 0 0 /   50%);
            z-index: 200;
            top: 0;
            display: flex;
           justify-content: center;
         }
        .popUpM{
         width: 50%;
         max-height:80vh;
         justify-content: center;
         height: max-content;
         min-width:270px;
        }
        .popUpM img{
                border-radius: 8%;
              margin-top:8%;
                max-height:80vh;
        
        }
        .closebtn {
            top: 0;
            font-size: xxx-large;
            right: 3%;
            border: none;
            position: fixed;
            background: transparent;
            color: #f6ca0d;
        }
        slot{
            display:block;
        }
        </style>
        <div  id="popUp">
          <div class='popUpM'>
            <button class='closebtn' id='closebtn' >&times;</button>
            <input type="text" id="name" placeholder="name"/>
            <input type="password" id="password"  placeholder="password"/>
            <button id="save">save</button>
          <div>  <slot></slot></div>
          </div>
        </div>`;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(container);
        shadowRoot.getElementById('closebtn').onclick = () => shadowRoot.getElementById('popUp').style.display = 'none';
        shadowRoot.getElementById('save')
        .onclick=()=>this.login( shadowRoot.getElementById('name').value,shadowRoot.getElementById('password').value);

    }
}
window.customElements.define("login-rv", Login);
