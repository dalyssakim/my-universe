import { Meteor } from 'meteor/meteor';
import './categoryMethods.js'; 

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.methods({
    'insertCategoty' : function(cat) {
      Categories.insert({
         name: cat.name,
         description: cat.desc,
         createdAt: function() {
            return new Date()
        }});
    }
  });

    Meteor.methods({
    'insertSubCategoty' : function(subcat) {
      SubCategories.insert({
         categoryId: subcat.categoryId,
         name: subcat.name,
         description: subcat.desc,
         createdAt: function() {
            return new Date()
        }});
      console.log("inserted : ", subcat);
    }
  });


    Meteor.methods({
    'insertExpression' : function(exp) {
      Expressions.insert({
         userId: this.userId,
         userName: "Unknown Yet",
         categoryId: exp.categoryId,
         category: exp.subCategory, /* Just for now */
         subCategoryId: exp.subCategoryId,
         subCategory: exp.subCategory,
         title: exp.title,
         content: exp.content,
         Author: this.userId,
         createdAt: function() {
            return new Date()
        }});
    }
  });

    Meteor.methods({
    'updateThumbs' : function(param) {
        console.log('UserId ', Meteor.userId());
        console.log('Article ID ', param.articleId);
        console.log('Thumbs ', param.thumb);
        var userId = Meteor.userId();
        var articleId = param.articleId;
        var thumbs = param.thumb;
        var thumbField;
        if( thumbs == 'thumbsUp') {
            Expressions.update(
              { _id : articleId}
              ,
              {    $addToSet: { thumbsUp:userId } }
              );
        } else if( thumbs == 'thumbsDown') {
             Expressions.update(
              { _id : articleId}
              ,
              {    $addToSet: { thumbsDown:userId } }
              );
        }
}
  });

});