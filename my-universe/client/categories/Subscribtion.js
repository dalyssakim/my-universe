if (Meteor.isClient) {
  Template.body.events({
    'click .subscribe': function (e) {
      e.preventDefault();
      var subCategoryId = e.target.getAttribute("name");
      console.log('subcategoryid : ', subCategoryId);
      Meteor.call('subscribeSubCategory', { 
        id:subCategoryId
      });
      e.target.addClass("off");
    }
  });
}


