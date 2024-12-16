describe('Backend API Tests', () => {
    let userId;

    it('Return a list of users', () => {

        cy.request('GET', '/usuarios')
            .then((response) => {            
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property("usuarios")
        });
    });
  
    it('Create a new user', () => {
      
        cy.fixture('userObject').then((userObject) => {
            cy.request('POST', '/usuarios', userObject)
                .then((response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body.message).to.eq("Cadastro realizado com sucesso")
                
                    userId = response.body._id;
            });
        });
    });

    it('Update user', () => {
      
        cy.fixture('editUserObject').then((editUserObject) => {
            cy.request('PUT', `/usuarios/${userId}`, editUserObject)
                .then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.message).to.eq("Registro alterado com sucesso")
            });
        });
    });

    it('Delete user', () => {
      
        cy.request('DELETE', `/usuarios/${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq("Registro excluído com sucesso")
        });
    });
});