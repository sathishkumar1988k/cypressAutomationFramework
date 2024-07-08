class homepage {
    //locators
    get textLoginSuccessMessage() {
        return '.post-title';
    }

    //Reeuable Methods in home page
    verifyLoginSuccessMessage(successMessage) {
        cy.get(this.textLoginSuccessMessage).should('have.text',successMessage);
    }
}

export default new homepage;