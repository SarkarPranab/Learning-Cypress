Feature: End to end Ecommerce validation
    Application regression

  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
      | product      | quantity |
      | Test Product |        2 |
    # And Validate the total prices
    Then select the country submit and verify Thankyou

  @Smoke
  Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details validate form behaviour
    Then validate the forms behaviour
    # And select the shop page
# Run with tag
# npx cypress run --env tags="@Smoke" --headed
