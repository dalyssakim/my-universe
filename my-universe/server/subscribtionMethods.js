
// function subscribeSubCategory(id) {
//     var userId = this;
//     console.log('self : ', Meteor.userId());
//     console.log(' id ', id);
// }

   Meteor.methods({
    'subscribeSubCategory' : function(param) {
        console.log('UserId ', Meteor.userId());
        console.log('Subscribe ', param.id);
        var userId = Meteor.userId();
        var subCategoryId = param.id;
    UserPreferences.upsert(
        { userId : userId }
        ,
        { $set : {userId:userId} },
    );
    if(subCategoryId!==null) {
        UserPreferences.upsert(
        { userId : userId}
        ,
        {    $addToSet: { subscribingSubCategories:subCategoryId } }
    );
    }
}
  });