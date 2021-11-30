describe('testing service fitness example', () => {
  // beforeEach(()=>{
  //   cy.visit('http://10.10.0.10:30754/')
  // })
  it('click on the voter example', () => {
    cy.visit('http://10.10.0.10:30754/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })    
    cy.contains('Cart').click()
  })  
  it('click on the cart service', () => {
    cy.visit('http://10.10.0.10:30754/cart')
    cy.contains('Your shopping cart is empty!')
  })  
  it("click on air plants example and check if it's present", () => {
    cy.visit('http://10.10.0.10:30754/product/6E92ZMYYFZ')
    cy.contains('Air Plant')
    cy.contains('Have you ever wondered whether air plants need water? Buy one and figure out.')
    //cy.contains('Completed').click()
  })  
  it("click on Chemex and Aeropress and if it's present", () => {
  cy.visit('http://10.10.0.10:30754/product/1YMWWN1N4O')
  cy.contains('Always wanted to brew coffee with Chemex and Aeropress at home?')
  cy.contains('Home Barista Kit')
    //cy.contains('Completed').click()
  }) 
  it('click on Vintage Camera Lens', () => {
    cy.visit('http://10.10.0.10:30754/product/66VCHSJNUP')
    cy.contains('Vintage Camera Lens')
    cy.contains("You won't have a camera to use it and it probably doesn't work anyway.")
  })  
  it('click on Advertisements', () => {
    cy.visit('http://10.10.0.10:30754/product/LS4PSXUNUM')
    cy.contains('Advertisement: Home Barista kitchen kit for sale. Buy one, get second kit for free').click()
    // cy.visit('http://10.10.0.10:30754/product/1YMWWN1N4O')
    // cy.contains("Home Barista Kit")
    // cy.contains("USD 123.99")
  })   
  it('click on the cart service', () => {
    cy.visit('http://10.10.0.10:30754/cart')
    cy.contains('Items you add to your shopping cart will appear here.')
  }) 
})
