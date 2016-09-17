Template.ExpressionSingle.onCreated(function(){
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleExpression', id);
    })
})
Template.ExpressionSingle.helpers({
    expression: ()=> { /* all the recipes will be returned */
        var id = FlowRouter.getParam('id');
        return Expressions.findOne({_id: id});
    }
});