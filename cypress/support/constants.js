const user = {
   username1 : "apidoc",
   password1 : "!3Derm2021",
   username : "sfihealthcertdev",
   password : "myX2rz59",
   firstname : "Automation",
   lastname : "Tester",
   DOB : "23/01/1969",
   address: "ACP",
   city : "Angeles",
   postcode : "2525",
   contact : "5507891",
   medicare : "2123456701",
   medicareChecked : "2123-45670-1",
   lab : [
      'BSP - Barratt And Smith Pathology',
      'CAP - Capital Pathology',
      'CLI - Clinipath Pathology',
      'CPL - Clinpath Pathology',
      'DHM - Douglas Hanly Moir Pathology',
      'DSP - Diagnostic Services',
      'HOB - Hobart Pathology',
      'LAU - Launceston Pathology',
      'MPS - Melbourne Pathology',
      'NWP - North West Pathology',
      'SNP - Sullivan Nicolaides Pathology',
      'SOP - Southern Iml Pathology',
      'WWG - Wagga Pathology'
   ],
   state : [
      'ACT',
      'NSW',
      'NT',
      'QLD',
      'SA',
      'TAS',
      'VIC',
      'WA',
   ],
   validMessage:[
      "Please select a title.",
      "Please enter a first name. Allowed characters: a-z,A-Z,-,',`.",
      "Please enter a last name. Allowed characters: a-z,A-Z,-,',`.",
      "Please select a gender.",
      "Please enter a valid date of birth.",
      "Please enter an address. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
      "Please enter a suburb / town. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
      "Please select a state.",
      "Please enter a postcode. Allowed characters: 0-9.",
      "Please enter a phone (mobile preferred). Allowed characters: 0-9,+,-, (,).",
   ],
   validMedicareNumber: [
      "An invalid 'Medicare Number' entered. Please try again.",
   ],
   validCopyFields:[
      "Please enter a first name. Allowed characters: a-z,A-Z,-,',`.",
      "Please enter a last name. Allowed characters: a-z,A-Z,-,',`.",
      "Please enter a suburb / town. Allowed characters: a-z, A-Z, 0-9, /, #, -, (,).",
   ],
   validNoteMessage: "Please enter a clinical notes. Allowed characters: a-z, A-Z, 0-9, /, #, -,?, (,).",
   billing:{
      DVA: "S",
      bulkBill: "D",
      private: "P",
      scheduleFee: "SF"
   },
   
   titleTop: {
      dashboard: "Dashboard",
      patientDetails: "Add patient details",
      addLesionDetails: "Add lesion details",
      lesionDetails: "Lesion Details",
      confirmDetails: "Confirm request details",
   },

   gender: {
      female : 'Female',
      male : 'Male',
      other : 'Other',
      unknown : 'Unknown',
   },

   locaton: [
      'Please Select One',
      'Abdomen',
      'Back',
      'Buttock',
      'Chest',
      'Ear',
      'Eyelid',
      'Finger',
      'Finger palmar',
      'Foot',
      'Foot plantar',
      'Forearm (elbow and below)',
      'Genitalia'
   ],

   patientDetailsElement: {
      title: "select#temptitle",
      firstname: "input#case_FirstName",
      lastname: "input#case_LastName",
      gender: "select#case_Gender",
      DOB: "input#case_DOB",
      address: "input#case_Address",
      suburb: "input#case_suburb",
      state: "select#case_patientstate",
      postcode: "input#case_PostCode",
      postcode: "input#case_NotificationPhone",
      billing: "select#case_patientfinancial",
      doNotSendCheckbox: "input#temp_obtained",
   },
   regionsBodyMap: ["Abdomen","Arm","Back","Buttock","Chest","Ear","Eyelid","Finger","Finger palmar","Foot","Foot plantar",
   "Forearm (elbow and below)","Genitalia","Hand","Hand palmar (after hand)","Leg (knee and below)","Lip","Neck","Nose","Other face","Scalp","Shoulder","Thigh","Toe","Toe plantar"
   ]
};

export default user
