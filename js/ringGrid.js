$(function(){
    $(".barPie__ring__item").mousedown(function () {
        $(this).toggleClass("change");
        $("body").mouseup(onMouseUp);
        $(".barPie__ring__item").mouseover(onMouseOver);
        return false;
    });
    $(".barPie__ring").mouseleave(function(){
        $(".barPie__ring__item").unbind('mouseover', onMouseOver);
    });
    function onMouseUp() {
        $(".barPie__ring__item").unbind('mouseup', onMouseUp);
        $(".barPie__ring__item").unbind('mouseover', onMouseOver);
    }
    //设置选择的时间段背景色
    function onMouseOver() {
        $(this).toggleClass("change");
    }
});