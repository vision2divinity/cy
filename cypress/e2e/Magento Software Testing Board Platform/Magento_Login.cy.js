import { Magento_Login } from "../../PageObjects/login.cy";

const SignIn=new Magento_Login()

describe("Magento Ecommerce Site", () => {
  it("verify is user can login to magento", () => {
    
    SignIn.navigate('https://magento.softwaretestingboard.com/')
    SignIn.Sign_In('.panel > .header > .authorization-link > a')
    SignIn.email('#email')
    SignIn.password('#pass')
    SignIn.SignInButton('.action.login.primary')
    
    SignIn.email('#email')
    SignIn.password('#pass')
     //to actually proceed and continue you need to enter the recaptcha manually 
     //and put wait time of 10s to enter it
    SignIn.SignInButton('.action.login.primary')
   

    
  });
  
})
