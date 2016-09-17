Template.Category.onCreated(function(){
    var self = this;
    self.autorun(function() {
    self.subscribe('userPreferences', Meteor.userId());
    self.subscribe('subCategories');
    })
})

Template.Category.helpers({
    subCategories: function() {
        var subCategories = SubCategories.find({categoryId: this._id}).fetch();
        var userPref = UserPreferences.findOne({userId: Meteor.userId()});
        var subscribingSubCategoriesmap = {};
        var subCategoryIds = userPref.subscribingSubCategories;
        var i = 0;
        
            console.log('???? ids ',subCategories);
        for(i = 0; i < subCategoryIds.length; i++) {
            subscribingSubCategoriesmap[subCategoryIds[i]] = true;
        }

        for(i = 0; i <subCategories.length; i++) {
            if(subscribingSubCategoriesmap[subCategories[i]._id] === true) {
                subCategories[i].subscribe="off";
            } else {
                subCategories[i].subscribe="";     
            }
        }
        return subCategories;
    }
});