class loginpage {
    //locators
    get inputUserName() {
        return "#username";
    }
    get inputpassword() {
        return "[name='password']";
    }
    get btnsubmit() {
        return "#submit";
    }
    get errorMessage() {
        return ".show";
    }

    //Reeuable Methods in login page
    fillUserName(userName) {
        cy.get(this.inputUserName).type(userName);
    }

    fillPassword(password) {
        cy.get(this.inputpassword).type(password);
    }

    submit() {
        cy.get(this.btnsubmit).click();
    }

    verifyLoginErrorMessage(loginErrorMessage){
        cy.get(this.errorMessage).should('have.text',loginErrorMessage);
    }
}

export default new loginpage;