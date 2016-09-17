Template.Categories.onCreated(function(){
    var self = this;
    self.autorun(function() {
    self.subscribe('categories');
    })
})
Template.Categories.helpers({
    categories: ()=> { /* all the recipes will be returned */
        return Categories.find({});
    } 
});
