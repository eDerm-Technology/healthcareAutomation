import { LoginActions } from "../pages/loginAction";
import { HomeActions } from "../pages/homeAction";
import { DashboardActions } from "../pages/dashboardActions";
import user from "../support/constants"


describe("Verify bug on EDERMPATH JIRA", function () {
    const loginActions = new LoginActions();
    const homeActions = new HomeActions();
    const dashboardActions = new DashboardActions();
  
  it("EDERMPATH-102. The Title is rollbacked to blank after selecting Other", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one one two`;
    const title = 'Other';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle(title);
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
    dashboardActions.clickPathologyRequestByFristName(firstname)
    dashboardActions.isTitle(title)
  });
  
  it("EDERMPATH-119. The Laboratory is not be saved after backing", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname;
    const lastname = `EDERMPATH one one nine`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.assertAllLabNextAndBack();
  });
  
  it("EDERMPATH-119. The Laboratory is not be saved after backing - Draft", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `${user.lastname} EDERMPATH one one nine`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.assertAllLabSaveAndDraft(firstname);
  });
    
  it("EDERMPATH-137. The Clinical note is not be saved after inputting the quote symbol", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one three seven`;
    const invalidQuoteText = '"""""""""""""""""""""""""""""';
    const quoteText = "(((((((((((())))))))))))";
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.enterClinicalNote(invalidQuoteText);
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.assertText("Please enter a clinical notes. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).")

    dashboardActions.enterClinicalNote(quoteText);
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();

    //Upload Dermascopic Images
    dashboardActions.assertTitle('Upload ');
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();
    dashboardActions.assertTextArea(quoteText);

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Submit
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-141. Return to setup screen from Edit Account", function () 
  {
    const subhurb = `Pattaya City ${dashboardActions.randomAlphanumeric(5)}`
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Setup
    dashboardActions.clickSetup();
    dashboardActions.assertText('Account Setup');
    dashboardActions.clickEditAccount();
    dashboardActions.enterSubHurbAccount(subhurb);
    dashboardActions.clickSaveUpdateAccount();
    dashboardActions.assertText('Account Setup');
  });

  it("EDERMPATH-145. eOrder did not upload", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one four five`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-146. eOrder no uploading - deleting lesion 1 when there were 3 lesions", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one four six`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.clickDeleteLesion()
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });

  it("EDERMPATH-83. After adding two conditions the DOB is missing", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH eight three`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.compareDOB(user.DOB)
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });

  it("EDERMPATH-64. Back button is not functional after backing from the Body Map", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH six four`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.selectBiopsyType();

    //Case Images
    dashboardActions.addBodyMap();
    dashboardActions.assertTitle('Body map');
    dashboardActions.backButton();
    dashboardActions.assertTitle('Clinical indication')
    dashboardActions.backButton();
    dashboardActions.isPatientDetails('Patient details')
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
  
  it("EDERMPATH-62. The delete button is not presented after adding a new lesion", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH six two`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.assertButton('Dashboard')
    //Delete first lesion
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.assertText('Delete')
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
  
  it("EDERMPATH-76. The Laboratory selector is disappeared after adding new conditions", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH seven six`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.selectLab(user.lab[4])
    dashboardActions.nextButton();

    //Add first lesion
    dashboardActions.addALesion();
    dashboardActions.caseSummary();
    dashboardActions.isLab(user.lab[4])

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Lesion 1')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.isLab(user.lab[4])
    dashboardActions.saveDraft();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
      
  it("EDERMPATH-114. All fields are blank after editing the body map", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(10);
    const lastname = `EDERMPATH one one four`;
    const quoteText = 'automation';
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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

    //Clinical Condition
    dashboardActions.noPreviousHistory();
    dashboardActions.provisionalDiagnosis();
    dashboardActions.excludeMelasma();
    dashboardActions.excludeNmsc();
    dashboardActions.enterClinicalNote(quoteText);
    dashboardActions.selectBiopsyType();

    //Case AddBodyMap
    dashboardActions.addBodyMap();
    dashboardActions.clickImage();
    dashboardActions.selectBodyRegion();
    dashboardActions.enterSpecimenLocation();
    dashboardActions.saveBodyMap();
    dashboardActions.assertTitle('Upload');
    dashboardActions.assertTitle('Lesion');
    dashboardActions.assertTitle('Images');
    dashboardActions.backButton(true);
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton(true);
    dashboardActions.isPatientDetails();
    dashboardActions.nextButton(true);
    dashboardActions.assertText(quoteText);
    dashboardActions.assertText('BCC (Basal Cell Carcinoma)');
    dashboardActions.assertNoPreviousHistologyChecked()

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Submit
    dashboardActions.saveDraft();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft');
  });
      
  it("EDERMPATH-150. The status is upload failure when creating an order that having a long lastname and 3 lesions continuously ", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();

    //Add New Lesion - Patient Details
    const firstname = user.firstname + homeActions.randomAlpha(20);
    const lastname = `EDERMPATH one five zero ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-151. Upload issue from Melanie", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one five one ${homeActions.randomAlpha(20)}`;
    const lastname = `Upload issue from Melanie ${homeActions.randomAlpha(20)}`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    dashboardActions.uploadMultiImages(2);
    dashboardActions.startUpload();
    dashboardActions.isImageUploadedSuccessfully();
    dashboardActions.assertFile('1.jpg')
    dashboardActions.assertFile('2.jpg')
    dashboardActions.nextButtonUploadImg();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard')

    //Click on Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton();

    // Add additions Images
    dashboardActions.uploadAdditionalImages(1)
    
    dashboardActions.assertButton('Dashboard')
    dashboardActions.assertText('Add additional images')

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.assertTitle('Clinical indication');
    dashboardActions.backButton();
    dashboardActions.assertButton('Dashboard')
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
  
  it("EDERMPATH-115. Case fails to upload if Lesion 3 is deleted before submition", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH one one five ${homeActions.randomAlpha(20)}`;
    const lastname = `delete third lesion`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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
    //Delete first lesion
    dashboardActions.assertButton('Dashboard')
    dashboardActions.scrollToLesion('Lesion 3')
    dashboardActions.assertText('Lesion 3')
    dashboardActions.clickDeleteLesion('Lesion 3')
    dashboardActions.assertText('Submit request & print');
    dashboardActions.submitCasePrint();
    dashboardActions.returnToDashboard();
    homeActions.isDashboardDisplayed();
    dashboardActions.isUploadSuccesfully(0);
  });
    
  it("EDERMPATH-79. Unable to add new conditions from the draft", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH seven nine ${homeActions.randomAlpha(10)}`;
    const lastname = `Unable to add new conditions from the draft`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
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

    homeActions.isDashboardDisplayed();
    dashboardActions.isReviewCase('Draft')

    dashboardActions.clickPathologyRequestByFristName(firstname);

    //Add another lesion
    dashboardActions.addAnotherLesion();
    dashboardActions.addALesion();

    //Case Summary
    dashboardActions.caseSummary();
    dashboardActions.assertButton('Dashboard');
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)

    homeActions.isDashboardDisplayed();
    dashboardActions.isReviewCase('Draft')
  });
    
  it("EDERMPATH-78. The state is not saved", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH seven eight ${homeActions.randomAlpha(10)}`;
    const lastname = `The state is not saved`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.assertAllStateSaveAndDraft(firstname); 
  });
    
  it("EDERMPATH-80. Unable to save the new lesion although the last name changing to a valid value", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH eight zero ${homeActions.randomAlpha(10)}`;
    const invalidLastname = `Invalid lastname 123`;
    const lastname = "a-zA-Z'`";
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(invalidLastname);
    dashboardActions.selectGender('Unknown');
    dashboardActions.enterDOB(user.DOB);
    dashboardActions.enterHomeAdd(user.address);
    dashboardActions.enterCity(user.city);
    dashboardActions.selectState();
    dashboardActions.enterPostcode(user.postcode);
    dashboardActions.enterContact(user.contact);
    dashboardActions.enterMedicare(user.medicare);

    dashboardActions.saveDraft();
    dashboardActions.assertText("Please enter a last name. Allowed characters: a-z,A-Z,-,',`.");
    dashboardActions.enterLastName(lastname);
    dashboardActions.saveDraft();
    dashboardActions.assertFirstName(firstname)
    dashboardActions.isReviewCase('Draft')
  });
    
  it("EDERMPATH-155. Remove Gender Other", function () 
  {
    loginActions.visitPage();
    loginActions.inputUserName(user.username);
    loginActions.inputPassword(user.password);
    loginActions.clickLoginButton();
    homeActions.isDashBoardButtonDisplayed();
    
    //Add New Lesion - Patient Details
    const firstname = `EDERMPATH five five ${homeActions.randomAlpha(10)}`;
    const lastname = `Remove Gender Other`;
    dashboardActions.clickAddNewLesion();
    dashboardActions.selectTitle('Other');
    dashboardActions.enterFirstName(firstname);
    dashboardActions.enterLastName(lastname);
    dashboardActions.clickGender();
    dashboardActions.isGender('Male');
    dashboardActions.isGender('Female');
    dashboardActions.isGender('Unknown');
    dashboardActions.isNotGender('Other');
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

});
  