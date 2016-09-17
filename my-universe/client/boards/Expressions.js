Template.Expressions.onCreated(function(){
    var self = this;
    self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('categories');
    self.subscribe('expressions');
    self.subscribe('subCategories');
    self.subscribe('subCategoryExpressions', id);
    })
})
Template.Expressions.helpers({
    expressions: ()=> { /* all the recipes will be returned */
        var id = FlowRouter.getParam('id');
        var rawExpressions = Expressions.find({subCategoryId: id}).fetch();
        var i = 0;
                    console.log('rawEx : ', rawExpressions);
        for(i=0; i<rawExpressions.length; i++) {
            var dateTime = rawExpressions[i].createdAt + '';
            var splitedDate = dateTime.split(' ');
            var date = splitedDate.slice(1, 4).join(' ');
            rawExpressions[i].createdAtDate = date;
            rawExpressions[i].createdAtTime = splitedDate[4];
        }
        return rawExpressions;
    },
    subCategory: ()=> {
        var id = FlowRouter.getParam('id');
        return SubCategories.findOne({_id: id}); 
    }
});