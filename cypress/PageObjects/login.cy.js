export class login_page{
//this will export methods from this page to the main scripts
    
login_page_username ='#uname'
login_page_password='#pwd'
login_page_submit='[type="submit"]'
//this means, you create objects for these methods and then adjust their actions as below
//so if there is any change in the backend or the application, you will only need to make changes here. that is your objects

navigate(url){
        cy.visit(url)
        //before changing to the url it had the base website link
    }
    username(username){
        cy.get(this.login_page_username).type(username)
        //before it was this, it was passed as cy.get('#uname').type('test') 
    }
    password(password){
        cy.get(this.login_page_password).type(password)
        //likewise the username, cy.get('#pwd').type('test')
    }
    submit()
    {
        cy.get(this.login_page_submit).click()
        //and this was cy.get('[type="submit"]').click()
    }

}

export class Magento_Login{

    SignIn_Sign_In='.panel > .header > .authorization-link > a'
    SignIn_email='#email'
    SignIn_password='#pass'
    SignIn_SignInButton='.action.login.primary'

    navigate(url){
        cy.visit(url)
    }
    Sign_In(Sign_In){
        cy.get(this.SignIn_Sign_In).click()
    }
    email(email){
        cy.get(this.SignIn_email).type('roni_cost@example.com')
    }
    password(password){
        cy.get(this.SignIn_password).type('roni_cost3@example.com')
    }
    SignInButton(){
        cy.get(this.SignIn_SignInButton).click()     
    }
    email(email){
        cy.get(this.SignIn_email).type('roni_cost@example.com')
    }
    password(password){
        cy.get(this.SignIn_password).type('roni_cost3@example.com')
        cy.wait(10000)
    }
    //there is a recaptcha option which needed to be entered manually
    SignInButton(){
        cy.get(this.SignIn_SignInButton).click()     
    }
    
}

    export class adminlogin{

        admin_forMobile='#formMobile'
        admin_Signin='type=["submit"]'
        admin_custom='custom-button'
        admin_flag='.iti__selected-flag'
        admin_gh='iti-1__item-gh'
        
        navigate(url){
            cy.visit(url)
            cy.wait(10000)
        }
        flag(flag){
        cy.get(this.admin_flag).click()
        cy.wait(5000)
        }

        gh(gh){
            cy.get(this.admin_gh).click()
        }
        formMobile(formMobile){
            cy.get(this.admin_formMobile).type('0556780200')
        }
        Signin(Signin){
            cy.get(this.admin_Signin).click()
            cy.wait(5000)
        }
        custom(custom){
            cy.get(this.admin_custom).click()
        }
    }