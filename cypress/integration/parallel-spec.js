import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("parallel", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();

  it("1.Large images 3 lesions + 3 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `submit ${homeActions.randomAlpha(20)}`;
    const lastname = `three lesions-three large images`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(3);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(3)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(3)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
    dashboardActions.clickReviewCaseByFirstName(firstname);
    dashboardActions.assertGender(user.gender.other)
  });
 
  it("2.Large images 4 lesions + 4 images", () => 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `submit ${homeActions.randomAlpha(20)}`;
    const lastname = `four lesions-four large images`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Mrs');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender(user.gender.unknown);
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);
    dashboardActions.nextButton();

    //Add lesion
    dashboardActions.addALesionLargeImages(4);

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Add another lesion
    dashboardActions.addAnotherLesion()
    dashboardActions.addALesionLargeImages(4)

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.selectGender(user.gender.other);
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
    dashboardActions.clickReviewCaseByFirstName(firstname);
    dashboardActions.assertGender(user.gender.other)
  });

});
  