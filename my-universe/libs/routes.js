if(Meteor.isClient) {
    Accounts.onLogin(function(){
        FlowRouter.go('my-universe');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('our-universes');
        }
        BlazeLayout.render('HomeLayout');
    }
})

FlowRouter.route('/my-universe', {
    name: 'my-universe',
    action() {
 //       GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'MyUniverse'});
    }
})


FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('MainLayout', {main: 'AdminManageCat'});
    }
})


FlowRouter.route('/our-universes', {
    name: 'our-universes',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Categories'});
    }
})

FlowRouter.route('/planet/:cat_id/:id', { 
    name: 'planet',
    action() {
 //       GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Expressions'});
    }
})

FlowRouter.route('/expression/:id', { 
    name: 'expression',
    action() {
 //       GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'ExpressionSingle'});
    }
})

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');