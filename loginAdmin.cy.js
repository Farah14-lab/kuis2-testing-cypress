Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('empty spec', () => {
  it('passes1', () => {
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=komentar')
    //ketika username salah
    cy.get(':nth-child(1) > .form-control').type('wibu')
    //ketika password benar
    cy.get(':nth-child(2) > .form-control').type('12345')
  })

  it('passes2', () => {
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=komentar')
    //ketika username benar
    cy.get(':nth-child(1) > .form-control').type('wibi')
    //ketika password salah
    cy.get(':nth-child(2) > .form-control').type('11111')
    cy.get('.btn').click()
  })

  it('passes3', () => {
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=komentar')
    //ketika username salah
    cy.get(':nth-child(1) > .form-control').type('wibu')
    //ketika password salah
    cy.get(':nth-child(2) > .form-control').type('11111')
    cy.get('.btn').click()
  })

  it('passes4', () => {
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=komentar')
    //ketika username tidak diisi
    cy.get(':nth-child(1) > .form-control')
    //ketika password tidak diisi
    cy.get(':nth-child(2) > .form-control')
    cy.get('.btn').click()
  })

  it('passes5', () => {
    cy.visit('http://localhost/project_uas/admin/index.php?halaman=komentar')
    //ketika username benar
    cy.get(':nth-child(1) > .form-control').type('wibi')
    //ketika password benar
    cy.get(':nth-child(2) > .form-control').type('12345')
    cy.get('.btn').click()
  })
})