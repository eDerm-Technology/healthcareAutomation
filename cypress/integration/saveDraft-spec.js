import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Save Draft", () => {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
  
    it("01. Patient Details saving", () => 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = `Draft  ${homeActions.randomAlpha(10)}`;
      const lastname = `save ${homeActions.randomAlpha(10)}`;
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("02. One Lesion saving", () => 
    {
      const firstname = `Draft  ${homeActions.randomAlpha(10)}`;
      const lastname = `save one lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("03. Two Lesion saving", () => 
    {
      const firstname = `Draft  ${homeActions.randomAlpha(10)}`;
      const lastname = `save two lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("04. Three Lesion saving", () => 
    {
      const firstname = `Draft  ${homeActions.randomAlpha(10)}`;
      const lastname = `save three lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
  
    it("05. Four Lesion saving", () => 
    {
      const firstname = `Draft  ${homeActions.randomAlpha(10)}`;
      const lastname = `save four lesion ${homeActions.randomAlpha(10)}`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();

      //Add another lesion
      dashboardActions.addAnotherLesion();
      dashboardActions.addALesion();
  
      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
    });
    
    it("06. Check all body regions", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `Check all body region`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFristName(firstname);
      dashboardActions.selectAndAssertEditedRegion();
    });
    
    it("07. Check all ProvisionalDiagnosis", () => 
    {
      const firstname = `Draft-${homeActions.randomAlpha(10)}`;
      const lastname = `Check all Provisional Diagnosis`;
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Mrs');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Unknown');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Add first lesion
      dashboardActions.addALesion();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.saveDraft();
      dashboardActions.assertTitleTop('Dashboard')
      dashboardActions.assertFirstName(firstname)
      dashboardActions.isReviewCase('Draft')
      dashboardActions.clickPathologyRequestByFristName(firstname);
      dashboardActions.selectAndAssertEditedProvisionalDiagnosis(firstname);
    });
  });
  