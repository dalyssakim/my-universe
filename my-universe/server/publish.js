Meteor.publish('allexpressions', function(){
    return Expressions.find(); /* Only current user's recipes */
});

Meteor.publish('singleExpression', function(id){
   // check(id, String);
   console.log("single sub-cat ", id);
    return Expressions.find({_id: id}); 
});

Meteor.publish('categories', function(){
    return Categories.find(); 
});

Meteor.publish('subCategories', function(){
    return SubCategories.find(); 
});

Meteor.publish('userPreferences', function(id){
    return UserPreferences.find({userId: id});
})

Meteor.publish('singleSubCategory', function(id){
    //check(id, String);
    
   console.log("single sub-cat ", id);
    return SubCategories.find({_id: id}); 
});

Meteor.publish('subCategoryExpressions', function(id){
    return Expressions.find({subCategoryId: id}); 
});

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});