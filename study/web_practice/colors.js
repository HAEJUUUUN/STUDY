var Links = {
    setColor: function(color) {
    //     var alist = document.querySelectorAll('a');
    //         var i = 0;
    //         while(i < alist.length) {
    //             alist[i].style.color = color;
    //             i = i + 1;
    // }
    $('a').css('color', color);
}
}
var Body = {
setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
},
setBackgroungColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundcolor', color);
}
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night'){
        Body.setBackgroungColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroungColor('white');
        Body.setColor('black');
        self.value = 'night';
        
        Links.setColor('#048C3A');

        }
    }