import { login_page } from "../../PageObjects/login.cy"
//this will import shortcuts from the login objects

//describe('this is a full time on that platfom', ()=>{

const sign_in=new login_page()
    
    it('verious component', ()=>{
    sign_in.navigate('https://trytestingthis.netlify.app/')
    sign_in.username('test')
    sign_in.password('test')
    sign_in.submit()
    //dont forget to let your methods be in your 'it' function=> otherwise error
    //})
})