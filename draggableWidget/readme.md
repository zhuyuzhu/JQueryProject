属性值为默认值

(1)addClasses: false
添加ui-draggable的css类，可以通过该类给标签设置样式，但是在测试时，值为true和false时，
original和helper都添加了ui-draggable
？？？？

(2)appendTo: "parent"
拖拽的时候有个跟着鼠标跑的玩意(helper), 这玩意可以是被拖动的dom本身（此时appendTo无效），也可以是另外创建的一个代表这个被拖动dom的特效元素。
在同一个dom内拖拽确实没有appendTo存在的意义。但如果涉及到多层dom结构，要把里面的某个dom拖到外面来，这个时候如果不配置appendTo，默认是会取被拖拽dom的parentNode，如果改pnode有overflow:auto属性，按理想往外面拖会出现滚动条（具体如何没试）
此时可以设置appendTo为拖拽区域最外层就很适合了
？？？

(3) axis: false,
约束在水平轴 (x) 或垂直轴 (y) 上拖拽。可能的值："x", "y"
(4)containment: false
约束在指定元素或区域的边界内拖拽
值类型：Selector 或 Element 或 String 或 Array
可能值："parent",

(5)handle: false
指定可拖拽元素的子元素被拖拽时，该拖拽元素才可以被拖动
值类型：Selector 或 Element
(6)cancel: "input, textarea, button, select, option"
防止从指定的元素上开始拖拽
值类型：Selector

(7)cursor: "auto"
拖拽操作期间的 CSS 光标
值类型：String
可能值：css样式中cursor属性值
(8)cursorAt: false
设置拖拽助手（helper）相对于鼠标光标的偏移,坐标可通过一个或两个键的组合成一个哈希给出：{ top, left, right, bottom }
值类型：Object
比如：$( ".selector" ).draggable({ cursorAt: { left: 5 } })

(9)delay: 0
鼠标按下后直到拖拽开始为止的时间，以毫秒计
当鼠标按下时开始计时，delay的时间后，才可以进行移动，然后移动到鼠标光标所在的位置
值类型：Number
(10)distance: 1
鼠标按下后拖拽开始前必须移动的距离，以像素计
值类型：Number

(11)opacity: false
当被拖拽时助手（helper）的透明度

(12)refreshPositions: false
如果设置为 true，在每次鼠标移动（mousemove）时都会计算所有可放置的位置
注意：这解决了高度动态的问题，但是明显降低了性能

(13)revert: false
当拖拽停止时，元素是否还原到它的开始位置，返回 draggable（或它的助手）到原始位置
(14)revertDuration: 500
还原（revert）动画的持续时间，以毫秒计。如果 revert 选项是 false 则忽略

(15) snap: false
元素是否对齐到其他元素
(16)snapMode: "both"
决定 draggable 将对齐到对齐元素的哪个边缘。如果 snap 选项是 false 则忽略。
可能的值："inner"、"outer"、"both"。
(17)snapTolerance: 20
从要发生对齐的对齐元素边缘起的距离，以像素计。如果 snap 选项是 false 则忽略。
(18)grid: false
对齐拖拽助手（helper）到网格，每个 x 和 y 像素。数组形式必须是 [ x, y ]。
以网格的形式移动，网格的宽高为x y

(19)zIndex:false
当被拖拽时，助手（helper）的 Z-index值
(20)stack: false
控制匹配选择器（selector）的元素集合的 z-index，总是在当前拖拽项的前面，在类似窗口管理器这样的事物中非常有用
比如：stack: "#set div":让该元素z-index的值最大，显示在最高层

(21)iframeFix: false
???

(22)helper: "original"
允许一个 helper 元素用于拖拽显示
值：original：是源元素，拖拽时，将拖拽源标签作为helper，随着光标移动
值：clone：克隆源标签，克隆的标签随着光标移动
值：还可以是一个function：返回值是一个标签元素dom等的 DOMElement
helper: function(){return '<div style="width:200px;height:50px;background-color:red;"></div>';}

(23)connectToSortable: false
允许 draggable 放置在指定的 sortable 上。
如果使用了该选项，一个 draggable 可被放置在一个 sortable 列表上，然后成为列表的一部分。
注意：helper 选项必须设置为 "clone".

(24)scope: "default"
用于组合配套 draggable 和 droppable 项，除了 droppable 的 accept 选项之外。
一个与 droppable 带有相同的 scope 值的 draggable 会被该 droppable 接受
即： scope属性值相同的 draggable元素可以放置在droppable元素上

(25)scroll: true,
当拖拽时容器会自动滚动。
//如果 scroll 选项是 false，以下两个属性失效
scrollSensitivity: 20
从要滚动的视区边缘起的距离，以像素计。距离是相对于指针的，不是相对于 draggable。
scrollSpeed: 20
当鼠标指针获取到在 scrollSensitivity 距离内时，窗体滚动的速度。

(26)disabled: false
如果设置为 true，则禁用该 draggable。
(27)disable方法：也是禁用 draggable
$( "#draggable" ).draggable( "disable" );//禁用 draggable

(28)enable方法：启用 draggable
$( "#draggable" ).draggable( "enable" );

(29)destroy方法：销毁draggable 完全移除 draggable 功能
$( "#draggable" ).draggable( "destroy" );

(30)widget方法：返回 draggable 元素的 jQuery 对象
$( "#draggable" ).draggable( "widget" );

(31)获取和设置属性值
$( "#draggable" ).draggable("option");//获取draggable所有的参数属性及对应的值
$( "#draggable" ).draggable("option", "zIndex");//获取当前draggable的指定参数值，比如：zIndex的值
$( "#draggable" ).draggable( "option", "z-index", 1000 );//设置指定的值，比如z-index为1000
$( "#draggable" ).draggable( "option", { "z-index": 999, "opacity: 0.5" } );//为 draggable 设置一个或多个选项

(32)事件
drag: function( event, ui ) {//在拖拽期间当鼠标移动时触发
    // console.log(ui);
},
start: function( event, ui ) {//当拖拽开始时触发
    // console.log(ui);
},
stop: function( event, ui ) {//当拖拽停止时触发
    // console.log(ui);
}
//ui:{
//     helper: init [div#draggable.ui-widget-content.ui-draggable, context: div#draggable.ui-widget-content.ui-draggable]
//     offset: {top: 47, left: 81}
//     originalPosition: {top: 25, left: 37}
//     position: {top: 39, left: 73}
// }