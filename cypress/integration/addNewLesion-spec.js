import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Add New Lesion on eDerm", function () {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
  
    it("01. Submit one Lesion", function () 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = user.firstname;
      const lastname = `${user.lastname} submit one lesion ${homeActions.randomAlpha(10)}`;
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Other');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Other');
      dashboardActions.enterDOB(user.DOB);
      dashboardActions.enterHomeAdd(user.address);
      dashboardActions.enterCity(user.city);
      dashboardActions.selectState();
      dashboardActions.enterPostcode(user.postcode);
      dashboardActions.enterContact(user.contact);
      dashboardActions.enterMedicare(user.medicare);
      dashboardActions.nextButton();

      //Clinical Condition
      dashboardActions.noPreviousHistory();
      dashboardActions.provisionalDiagnosis();
      dashboardActions.excludeMelasma();
      dashboardActions.excludeNmsc();
      dashboardActions.selectBiopsyType();

      //Case Images
      dashboardActions.addBodyMap();
      dashboardActions.clickImage();
      dashboardActions.selectBodyRegion();
      dashboardActions.enterSpecimenLocation();
      dashboardActions.saveBodyMap();

      //Upload Dermascopic Images
      dashboardActions.assertTitle('Upload ');
      dashboardActions.uploadImage();
      dashboardActions.startUpload();
      dashboardActions.isImageUploadedSuccessfully();
      dashboardActions.assertFile('1.jpg')
      dashboardActions.nextButtonUploadImg();

      //Case Summary
      dashboardActions.caseSummary();
      dashboardActions.submitCasePrint();
      dashboardActions.returnToDashboard();
      homeActions.isDashboardDisplayed();
      dashboardActions.isUploadSuccesfully(0);
    });
  
    it("02. Submit two Lesion", function () 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = user.firstname;
      const lastname = `${user.lastname} submit two lesion ${homeActions.randomAlpha(10)}`;
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Other');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Other');
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
      dashboardActions.submitCasePrint();
      dashboardActions.returnToDashboard();
      homeActions.isDashboardDisplayed();
      dashboardActions.isUploadSuccesfully(0);
    });
  
    it("03. Submit three Lesion", function () 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = user.firstname;
      const lastname = `${user.lastname} submit three lesion ${homeActions.randomAlpha(10)}`;
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Other');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Other');
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
      dashboardActions.submitCasePrint();
      dashboardActions.returnToDashboard();
      homeActions.isDashboardDisplayed();
      dashboardActions.isUploadSuccesfully(0);
    });
  
    it("04. Submit four Lesion", function () 
    {
      loginActions.visitPage();
      loginActions.inputUserName(user.username);
      loginActions.inputPassword(user.password);
      loginActions.clickLoginButton();
      homeActions.isDashBoardButtonDisplayed();
      
      //Add New Lesion - Patient Details
      const firstname = user.firstname;
      const lastname = `${user.lastname} submit four lesion ${homeActions.randomAlpha(10)}`;
      dashboardActions.clickAddNewLesion();
      dashboardActions.selectTitle('Other');
      dashboardActions.enterFirstName(firstname);
      dashboardActions.enterLastName(lastname);
      dashboardActions.selectGender('Other');
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
      dashboardActions.submitCasePrint();
      dashboardActions.returnToDashboard();
      homeActions.isDashboardDisplayed();
      dashboardActions.isUploadSuccesfully(0);
    });
  });
  