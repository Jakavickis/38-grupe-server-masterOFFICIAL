import { PageTemplate } from '../lib/PageTemplate.js'

class PageRegister extends PageTemplate {
    constructor(data) {
        super(data);
        this.pageCSSfileName = 'register';
        this.pageJSfileName = 'register'
    }

    mainHTML() {
        return `<div class="row">
                    <p>Register 🎅</p>
                    <form class="form borderContainer" action="/api/account" method="POST">
                        <div class="notifications"></div>
                    
                        <label for="fullname">Fullname</label>
                        <input id="fullname" name="fullname" data-validation="fullname" type="text" placeholder="name" autofocus required>
                        
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email" data-validation="email" placeholder="Email" required>
                        
                        <label for="pass">Passworld</label>
                        <input id="pass" name="pass" type="password" data-validation="password" placeholder="password" required>
                        
                        <label for="repass">Repeat password</label>
                        <input id="repass" name="repass" type="password" data-validation="password" placeholder="repeat password" required>
                        
                        <label for="tos">please mark TOS agreement</label>
                        <input type="checkbox" name="tos" id="tos" required>

                        <div></div>
                        <button class="registerButton" type="submit"><span>Register</span></button>
                    </form>
                </div>`;
    }
}

export { PageRegister };