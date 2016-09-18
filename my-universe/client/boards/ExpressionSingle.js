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
        var Expression = Expressions.findOne({_id: id});
        var thumbsUpCount = 0;
        var thumbsDownCount= 0;
        var dateTime = Expression.createdAt + '';
        var splitedDate = dateTime.split(' ');
        var date = splitedDate.slice(1, 4).join(' ');
        Expression.createdAtDate = date;
        Expression.createdAtTime = splitedDate[4];

        if(Expression.thumbsUp) {
            thumbsUpCount = Expression.thumbsUp.length;
        }
        if(Expression.thumbsDown) {
            thumbsDownCount= Expression.thumbsDown.length;
        }
        
        Expression.thumbsUpCount = thumbsUpCount;
        Expression.thumbsDownCount = thumbsDownCount;
        return Expression;
    }
});

Template.ExpressionSingle.events({
    'click .thumbs': function(event){
        // code goes here
        event.preventDefault();
        var articleId = FlowRouter.getParam('id');
        var thumb = event.target.id;
        var param = {
            articleId: articleId,
            thumb : thumb
        };
       console.log("called meteor ", param);
       Meteor.call('updateThumbs', param);
       return false;
    }
});