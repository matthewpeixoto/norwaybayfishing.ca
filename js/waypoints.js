$('.waypoint').each(function(){

    var self = $(this);

    $(this).waypoint(function () {
      self.addClass('js-waypoint-active');
    }, {offset: '90%'});

})
