Template.NewExpression.onCreated(function(){
    var self = this;
    this.subCategoryId = FlowRouter.getParam('id');
console.log("id", this.subCategoryId);
    self.autorun(function() {
    self.subscribe('singleSubCategory', FlowRouter.getParam('id'));
    })
})
Template.NewExpression.helpers({
    subcategory: ()=> {
        var id = FlowRouter.getParam('id');
        console.log("id-", id);
        return SubCategories.findOne({_id: id});
    }
});

Template.NewExpression.events({
    'submit .new-expression-container': function(event){
        // code goes here
        event.preventDefault();
        var categoryId = FlowRouter.getParam('cat_id');
        var subCategoryId = $('.subCategoryName').attr('id');
        var subCategoryName = $('.subCategoryName').text();
        var title = event.target.title.value;
        var content = event.target.content.value;
        var expression = {
            categoryId: categoryId,
            subCategoryId : FlowRouter.getParam('id'),
            subCategory: subCategoryName,
            userName: this.userEmail,
            title: title,
            content: content,
            author: this.userId
        };
       console.log("called meteor ", expression);
       Meteor.call('insertExpression', expression);
       $('#myModal').modal('hide');
       return false;
    }
});