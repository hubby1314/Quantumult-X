/*******************************
脚本名称: 唔姆(解锁下载⏬)
脚本作者：彭于晏💞
更新时间：2022年10月31日 下午2:48
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/api3.umu168.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/umu168.js

[mitm] 

hostname = api3.umu168.com

*******************************/

var _0x284d=['KXXDs8Otwr43RDwJIg==','w4rCiMKNdsOqw5hs','HFjDnMOHw6caCy1yw6kQOg==','w5ceNsK6WkHCpMOeOTk7w6w=','w57DgsOVwrg='];(function(_0x287970,_0x284dd){var _0x233912=function(_0x419178){while(--_0x419178){_0x287970['push'](_0x287970['shift']());}};_0x233912(++_0x284dd);}(_0x284d,0x10e));var _0x2339=function(_0x287970,_0x284dd){_0x287970=_0x287970-0x0;var _0x233912=_0x284d[_0x287970];if(_0x2339['vxxlXw']===undefined){(function(){var _0x597453;try{var _0x1d4508=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x597453=_0x1d4508();}catch(_0x5a9cbf){_0x597453=window;}var _0x36c67f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x597453['atob']||(_0x597453['atob']=function(_0x3445b0){var _0x1e9639=String(_0x3445b0)['replace'](/=+$/,'');var _0x5722a3='';for(var _0x23bdba=0x0,_0x58adb5,_0x1d494e,_0x25ffb4=0x0;_0x1d494e=_0x1e9639['charAt'](_0x25ffb4++);~_0x1d494e&&(_0x58adb5=_0x23bdba%0x4?_0x58adb5*0x40+_0x1d494e:_0x1d494e,_0x23bdba++%0x4)?_0x5722a3+=String['fromCharCode'](0xff&_0x58adb5>>(-0x2*_0x23bdba&0x6)):0x0){_0x1d494e=_0x36c67f['indexOf'](_0x1d494e);}return _0x5722a3;});}());var _0x5cba55=function(_0x5d77c1,_0x6329b6){var _0x1a4f50=[],_0x135c46=0x0,_0x57b980,_0x539d37='',_0x6a663b='';_0x5d77c1=atob(_0x5d77c1);for(var _0x355503=0x0,_0x239741=_0x5d77c1['length'];_0x355503<_0x239741;_0x355503++){_0x6a663b+='%'+('00'+_0x5d77c1['charCodeAt'](_0x355503)['toString'](0x10))['slice'](-0x2);}_0x5d77c1=decodeURIComponent(_0x6a663b);var _0x3c224b;for(_0x3c224b=0x0;_0x3c224b<0x100;_0x3c224b++){_0x1a4f50[_0x3c224b]=_0x3c224b;}for(_0x3c224b=0x0;_0x3c224b<0x100;_0x3c224b++){_0x135c46=(_0x135c46+_0x1a4f50[_0x3c224b]+_0x6329b6['charCodeAt'](_0x3c224b%_0x6329b6['length']))%0x100;_0x57b980=_0x1a4f50[_0x3c224b];_0x1a4f50[_0x3c224b]=_0x1a4f50[_0x135c46];_0x1a4f50[_0x135c46]=_0x57b980;}_0x3c224b=0x0;_0x135c46=0x0;for(var _0x266963=0x0;_0x266963<_0x5d77c1['length'];_0x266963++){_0x3c224b=(_0x3c224b+0x1)%0x100;_0x135c46=(_0x135c46+_0x1a4f50[_0x3c224b])%0x100;_0x57b980=_0x1a4f50[_0x3c224b];_0x1a4f50[_0x3c224b]=_0x1a4f50[_0x135c46];_0x1a4f50[_0x135c46]=_0x57b980;_0x539d37+=String['fromCharCode'](_0x5d77c1['charCodeAt'](_0x266963)^_0x1a4f50[(_0x1a4f50[_0x3c224b]+_0x1a4f50[_0x135c46])%0x100]);}return _0x539d37;};_0x2339['nzznjl']=_0x5cba55;_0x2339['lPOWoP']={};_0x2339['vxxlXw']=!![];}var _0x419178=_0x2339['lPOWoP'][_0x287970];if(_0x419178===undefined){if(_0x2339['NQxdwK']===undefined){_0x2339['NQxdwK']=!![];}_0x233912=_0x2339['nzznjl'](_0x233912,_0x284dd);_0x2339['lPOWoP'][_0x287970]=_0x233912;}else{_0x233912=_0x419178;}return _0x233912;};var _0x135c46=$response['body']['replace'](/"need_vip":\d/g,_0x2339('0x3','wz6!'))['replace'](/"pay_coin":\d+/g,_0x2339('0x2','cJ]H'))['replace'](/"code":0/g,_0x2339('0x0','QYuy'))[_0x2339('0x1','gU]$')](/"status":"noIcon"/g,'\x22status\x22:\x221\x22');var _0x57b980={};_0x57b980[_0x2339('0x4','hffd')]=_0x135c46;$done(_0x57b980);