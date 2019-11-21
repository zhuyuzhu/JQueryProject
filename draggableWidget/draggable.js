$(function() {
    // helper:跟着鼠标移动的标签
    $( "#draggable" ).draggable();//启用draggable的默认功能
    $( "#draggable" ).draggable({
        addClasses: false,//添加ui-draggable的css类，可以通过该类给标签设置样式
        appendTo: "parent",//?

        axis: false,//约束在水平轴 (x) 或垂直轴 (y) 上拖拽。可能的值："x", "y"。
        containment: "document",//约束在指定元素或区域的边界内拖拽

        handle: false,//指定可拖拽元素的子元素被拖拽时，该拖拽元素才可以被拖动
        cancel: "input, textarea, button, select, option",//防止从指定的元素上开始拖拽。

        connectToSortable: false,//允许 draggable 放置在指定的 sortable 上。如果使用了该选项，一个 draggable 可被放置在一个 sortable 列表上，然后成为列表的一部分。注意：helper 选项必须设置为 "clone"，
        cursor: "auto",//拖拽操作期间的 CSS 光标
        cursorAt: false,//设置拖拽助手（helper）相对于鼠标光标的偏移。坐标可通过一个或两个键的组合成一个哈希给出：{ top, left, right, bottom }。
        
        
        delay: 0,//鼠标按下后直到拖拽开始为止的时间，以毫秒计
        distance: 1,//鼠标按下后拖拽开始前必须移动的距离，以像素计

        disabled: false,//如果设置为 true，则禁用该 draggable。
        
        
        
        //helper: "original",//允许一个 helper 元素用于拖拽显示
        helper: "clone",//String：如果设置为 "clone"，元素将被克隆，且克隆将被拖拽。
        //Function：一个函数，将返回拖拽时要使用的 DOMElement。helper是一个跟着鼠标移动的标，可以构造该标签
        // helper: function(){
        //     return '<div style="width:200px;height:50px;background-color:red;"></div>';
        // },

        iframeFix: false,//???
        opacity: false,//当被拖拽时助手（helper）的透明度
        refreshPositions: false,//如果设置为 true，在每次鼠标移动（mousemove）时都会计算所有可放置的位置。注意：这解决了高度动态的问题，但是明显降低了性能??
        
        revert: false,//当拖拽停止时，元素是否还原到它的开始位置，返回 draggable（或它的助手）到原始位置
        revertDuration: 500,//还原（revert）动画的持续时间，以毫秒计。如果 revert 选项是 false 则忽略。

    
        scroll: true,//当拖拽时容器会自动滚动。
        scrollSensitivity: 20,//从要滚动的视区边缘起的距离，以像素计。距离是相对于指针的，不是相对于 draggable。如果 scroll 选项是 false 则忽略。
        scrollSpeed: 20,//当鼠标指针获取到在 scrollSensitivity 距离内时，窗体滚动的速度。如果 scroll 选项是 false 则忽略。

        snap: false,//元素是否对齐到其他元素??
        snapMode: "both",//决定 draggable 将对齐到对齐元素的哪个边缘。如果 snap 选项是 false 则忽略。可能的值："inner"、"outer"、"both"。
        snapTolerance: 20,//从要发生对齐的对齐元素边缘起的距离，以像素计。如果 snap 选项是 false 则忽略。
        grid: false,//对齐拖拽助手（helper）到网格，每个 x 和 y 像素。数组形式必须是 [ x, y ]。以网格的形式移动，网格的宽高为x y


        stack: false,//控制匹配选择器（selector）的元素集合的 z-index，总是在当前拖拽项的前面，在类似窗口管理器这样的事物中非常有用??
        //stack: "#set div":让该元素z-index的值最大，显示在最高层


        zIndex:false,//当被拖拽时，助手（helper）的 Z-index值

        scope: "default",//用于组合配套 draggable 和 droppable 项，除了 droppable 的 accept 选项之外。一个与 droppable 带有相同的 scope 值的 draggable 会被该 droppable 接受
        //事件
        //ui:{
        //     helper: init [div#draggable.ui-widget-content.ui-draggable, context: div#draggable.ui-widget-content.ui-draggable]
        //     offset: {top: 47, left: 81}
        //     originalPosition: {top: 25, left: 37}
        //     position: {top: 39, left: 73}
        // }
        drag: function( event, ui ) {//在拖拽期间当鼠标移动时触发
            // console.log(ui);
        },
        start: function( event, ui ) {
            // console.log(ui);
        },
        stop: function( event, ui ) {//当拖拽停止时触发
            // console.log(ui);
        }
    });
    //方法：
    //(1) $( "#draggable" ).draggable( "destroy" );//完全移除 draggable 功能。这会把元素返回到它的预初始化状态
    //(2) $( "#draggable" ).draggable( "disable" );//禁用 draggable
    //(3) $( "#draggable" ).draggable( "enable" );//启用 draggable
    //对option的操作，可以不写option，直接设置或获取draggable的属性值
    //(4) $( "#draggable" ).draggable("option", "zIndex");//获取当前draggable的指定参数值，比如：zIndex的值
    //(5) $( "#draggable" ).draggable("option");//获取draggable所有的参数属性及对应的值
    //(6) $( "#draggable" ).draggable( "option", "z-index", 1000 );//设置指定的值，比如z-index为1000
    //(7) $( "#draggable" ).draggable( "option", { "z-index": 999, "opacity: 0.5" } );//为 draggable 设置一个或多个选项

    //(8) $( "#draggable" ).draggable( "widget" );//返回 draggable 元素的 jQuery 对象

});