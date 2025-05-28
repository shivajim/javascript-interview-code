function a(){
    var x = 100;
    function b(){
        var y = 10;
        function c(){
            console.log(x,y);
        }
        c();
    }
    b();
}
a();
