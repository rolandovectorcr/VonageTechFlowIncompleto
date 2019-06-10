$('.acordeon').on('click','h2',function(){
    var t = $(this);
    var tp = t.next();
    var p = t.parent().siblings().find('p');
    tp.slideToggle();
    p.slideUp();
});