Template.SubCategoriesAdmin.onCreated(function(){
    var self = this;
    self.autorun(function() {
    self.subscribe('categories');
    self.subscribe('subCategories');
    })
})
Template.SubCategoriesAdmin.helpers({
    categories: ()=> { /* all the recipes will be returned */
        return Categories.find({});
    },
    subcategories: ()=> {
        return subcategories.find({});
    }
});

Template.SubCategoriesAdmin.events({
    'submit .new-subcategory-container': function(event){
        // code goes here
        event.preventDefault();
        var selectedCategoryId = event.target.categorySelect.value;
        var subCategoryName = event.target.subCategoryName.value;
        var subCategoryDescription = event.target.subCategoryDescription.value;
        var subCat = {
            categoryId : selectedCategoryId,
            name: subCategoryName,
            desc: subCategoryDescription
        };
       Meteor.call('insertSubCategoty', subCat);
       console.log("called meteor")
       return false;
    }
});