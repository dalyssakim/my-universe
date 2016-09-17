Template.CategoriesAdmin.events({
    'submit .new-category-container': function(event){
        // code goes here
        event.preventDefault();
        var categoryName = event.target.categoryName.value;
        var categoryDescription = event.target.categoryDescription.value;
        console.log("CatNAME", categoryName);
        var cat = {
            name: categoryName, 
            desc: categoryDescription
        };
        Meteor.call('insertCategoty', cat);
        return false;
    }
});
