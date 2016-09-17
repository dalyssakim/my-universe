Template.MyUniverse.onCreated(function(){
    var self = this;
    self.autorun(function() { /* MUST NEED Subscribe to see the db! */
    self.subscribe('userPreferences', Meteor.userId());
    self.subscribe('subCategories');
    })
})
Template.MyUniverse.helpers({
    subCategories: ()=> { /* this is wired to template variable */
        var userPref = UserPreferences.findOne({userId: Meteor.userId()});
        var subCategoryIds = userPref.subscribingSubCategories;
        var i = 0;
        var subscribingSubCats = [];
        for(i = 0; i < subCategoryIds.length; i++) {
        var subCategory = SubCategories.find({_id: subCategoryIds[i]}).fetch();
        subCategory[0].subscribe="off";
        subscribingSubCats.push(subCategory[0]);

        }
        return subscribingSubCats;
    }
});
