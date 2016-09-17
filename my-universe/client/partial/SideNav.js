if (Meteor.isClient) {
  Template.body.events({
    'click .nav-link': function (e) {
     var path = $(this).attr('class');
     if(path!==null && path.length !== 0) {
     var activeItem = path[1].trim();
     console.log('activeItem:'+activeItem)
     $('.nav li').removeClass("active");
     $('.'+activeItem).addClass( "active" );
    }
    }
  });
}
