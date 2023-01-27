/*躲猫猫*/
function MaoMao(){
    $("body").append(`<div class="maomao"></div>
    <style>
    .maomao {
        position: fixed;
        top: 50%;
        right: -5px;
        width: 57px;
        height: 70px;
        background-image: url(https://cache.gmit.vip/static/9.0.1/img/mao.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: background .3s;
    }
    .maomao:hover {
        background-position: 60px 50%;
    }
    </style>`);
};MaoMao();

    //在线时间
    // $("#sidebar").append('<section id="a_d_sidebar" class="widget widget_categories wrapper-md clear"><h5 class="widget-title m-t-none text-md">在线时间</h5><div class="card widget"><div class="card-content"><canvas id="Time_canvas" style="width:100%;"></canvas></div>');
    // script(GM_pluginUrl+'lib/clock.js');
    
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
        /*layer.open({
            type: 1,
            title: false ,
            closeBtn: false,
            area: '80%',
            shade: 0.8,
            id: 'LAY_layuipro',
            resize: false,
            btn: ['火速围观', '残忍拒绝'],
            btnAlign: 'c',
            moveType: 1,
            content: '<div style="padding: 20px; line-height: 22px; background-color: #393D49; color: #fff;" class="text-center">「凌梦云」· 开春迎新<br/>'+
'枣庄:鲁南大数据中心，傲盾无视CC<br/>'+
'100Gbps秒解防御，可封UDP/海外<br/>'+
'4核2G 10M 88/月 799/年<br/>'+
'4核4G 10M 108/月 999/年<br/>'+
'8核4G 10M 158/月 1499/年<br/>'+
'8核8G 10M 218/月 1999/年<br/>'+
'-----------------------------<br/>'+
'绍兴BGP:三线BGP接入，100Gbps秒解防御，上层阻断UDP，金盾无视CC，独立防火墙控制面板<br/>'+
'4核4G 20M 199/月 1888/年<br/>'+
'8核8G 20M 300/月 2888/年<br/>'+
'-----------------------------<br/>'+
'徐州BGP:淮海大数据中心，金盾无视CC，100Gbps防御，独立防火墙控制面板，可封UDP/海外<br/>'+
'4核4G 10M 108/月 999/年<br/>'+
'8核4G 10M 168/月 1499/年<br/>'+
'8核8G 10M 218/月 1999/年<br/>'+
    '</div>',
            success: function(layero){
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href: 'http://www.lmyidc.com/',
                    target: '_blank'
                });
            }
        });*/
    }else{
        /*电脑版显示*/
        $('body').before('<div id="fps" style="color:#000;z-index:10000;position:fixed;top:1.5px;left:1.5px;font-weight:bold;"></div>');
        var showFPS = (function(){ 
        var requestAnimationFrame =  
            window.requestAnimationFrame || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame || 
            function(callback) { 
                window.setTimeout(callback, 1000/60); 
            }; 
            var e,pe,pid,fps,last,offset,step,appendFps; 
            fps = 0; 
            last = Date.now(); 
            step = function(){ 
                offset = Date.now() - last; 
                fps += 1; 
                if( offset >= 1000 ){ 
                last += offset; 
                appendFps(fps); 
                fps = 0; 
                } 
                requestAnimationFrame( step ); 
            }; 
            appendFps = function(fps){ 
                $('#fps').html(fps+'FPS');
            };
            step();
        })();
    }
