$('.acordeon').on('click','h2',function(){
    var t = $(this);
    var tsection = t.next();
    var section = t.parent().siblings().find('section');
    tsection.slideToggle();
    section.slideUp();
});