describe("todolist app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Page Should Containt The Following Strings", () => {
    cy.get("#heading").contains("todolist").should("be.visible");
    cy.get("#subHeading")
      .contains("What needs to be done?")
      .should("be.visible");
    cy.get("#todoText").should("be.empty").and("be.visible");
    cy.get("#addBtn").contains("Add").should("be.visible");
    cy.contains("There's nothing to do today.").should("be.visible");
  });
  it("Should Mark a Todo Item As Done And Delete It", () => {
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type("Learn About Cypress{enter}");
    cy.get(".form-check-input").should("be.visible").check();
    cy.get(".pointerMouse").should("be.visible").click();
  });
  it("Should Mark Anything Else Item As Done And Delete It", () => {
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type("Anything else{enter}");
    cy.get(".form-check-input").should("be.visible").check();
    cy.get(".pointerMouse").should("be.visible").click();
  });
  it("Add two items", () => {
    const itemText = "Anything else";
    const itemTwo = "Second thing";
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type(itemText + "{enter}");
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type("Second thing{enter}");
    cy.get(".list-group-item").first().should("contain", itemText);
    cy.get(".list-group-item").last().should("contain", itemTwo);
  });
  it("Add one item", () => {
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type("Anything else{enter}");
    cy.get(".list-group-item").first().should("contain", "Anything else");
  });
  it("Add two items and delete them", () => {
    const itemText = "Anything else";
    const itemTwo = "Second thing";
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type(itemText + "{enter}");
    cy.get("#todoText")
      .should("be.empty")
      .and("be.visible")
      .type("Second thing{enter}");
    cy.get(".list-group-item").first().should("contain", itemText);
    cy.get(".list-group-item").last().should("contain", itemTwo);
    cy.get("#delete_list_button").click();
    cy.get(".list-group-item").should("not.exist");
  });
});
