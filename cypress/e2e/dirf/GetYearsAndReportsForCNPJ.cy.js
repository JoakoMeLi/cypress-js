const waitLoadPage = 4000
describe('login br',() => {
    beforeEach(()=>{
        cy.session('login', () => {
            cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAy2OwQ6EIAxE_4Wz0TvH_RFSsWKzIKTUxY3x37eYPc505k0vE3Og3cm3oLEGzxLJk5jBlAiyZk6OFj2kolYlwb-Mc48AQ0JBrsZeHRRweaGWOkr4QM3AIZtbY25qPVPqUXV4am2H6BrOH8J-XSHW3ghZxSZSqp2m1tqYkD0suUDIo89pnHnSGGOgqhDs7z1j96CMKk4Y_NvYh3f_AEBZ4FvhAAAA/user')
            cy.wait(waitLoadPage)
            cy.get('[data-testid="user_id"]').type('TETE9312374')
            cy.get('#login_user_form > div.login-form__actions')
                .children().eq(0).should('be.enabled').click()
            cy.wait(waitLoadPage)
            cy.get('[data-testid="password"]').type('vxq,cxp4tr86<krk')
            cy.get('#login_user_form > div.login-form__actions')
                .children().eq(0).should('be.enabled').click()
            cy.wait(waitLoadPage)

        })
    })

    it("",()=>{
        cy.visit('https://www.mercadopago.com.br/billing/summary')
        cy.get('.card-content > :nth-child(3)').should('have.text','CNPJ')
})
})



    // beforeEach(()=>{
    //     cy.session('login', () => {
    //         cy.visit('https://www.mercadolivre.com/jms/mlb/lgz/msl/login/H4sIAAAAAAAEAzWNwQ7DIAxD_yXnqr1z3I-glKYULRQE6ehU9d8Xpu1o-9m-gJMPu5V3JjBAZ-bggsAAmVHWVKINiwYxq1WD0E_y3BEsGEmoVDBXH_K0PEhLfWpFrqQQHrLZlVNT7_ulXqiWTu3tyLbR_ArU03_DJxWbSK5mmlprY6TicEkZfRpdiuNcJrgH5atYKeieYKQcdH8AK_yKhM0AAAA/user')
    //         cy.wait(waitLoadPage)
    //         cy.get('[data-testid="user_id"]').type('TETE9312374')
    //         cy.wait(waitLoadPage)
    //         cy.get('#login_user_form > div.login-form__actions')
    //             .children().eq(0).should('be.enabled').click()
    //         cy.wait(waitLoadPage)
    //         cy.get('[data-testid="password"]').type('vxq,cxp4tr86<krk')
    //         cy.wait(waitLoadPage)
    //         cy.get('#login_user_form > div.login-form__actions')
    //             .children().eq(0).should('be.enabled').click()
    //         cy.wait(waitLoadPage)

    //     })
    // })
    // it("GetYearsAndReportsForCNPJ",()=>{
    //     cy.visit('https://www.mercadopago.com.br/billing/summary')
    //     cy.wait(waitLoadPage)
    //     cy.get('.andes-modal__close-button').click()
    //     cy.wait(waitLoadPage)
    //     cy.get('.card-content > :nth-child(3)').should('have.text','CNPJ')
    //     cy.wait(waitLoadPage)
    //     cy.visit('https://www.mercadopago.com.br/balance/reports/dirf')
    //     cy.wait(waitLoadPage)
    //     cy.get('.andes-dropdown__display-values').click()
    //     cy.get('.andes-list__item-first-column').should('have.text','202120222023')
    //     cy.get('.andes-table__column-center').should('have.text','Trimestral')
        
    // })