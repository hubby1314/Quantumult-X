/*******************************

脚本名称: 动物夜市——无限胡萝卜
下载地址：微信小程序
软件版本：9.99.9
脚本作者：彭于晏💞
更新时间：2023-8-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/www.liwoxiao.com\/api\/game\/account\/data\/download url script-response-body https://raw.githubusercontent.com/hubby1314/Quantumult-X/main/yx/liwoxiao.js

[mitm] 

hostname = www.liwoxiao.com

*******************************/

var body = $response.body
    // 金萝卜
    .replace(/playerInfo_gold\\":\d+/g,'playerInfo_gold\\":88888888')
    // .replace(/playerInfo_buildScore\\":\d+/g,'playerInfo_buildScore\\":88888888')
    // .replace(/playerInfo_shipuScore\\":\d+/g,'playerInfo_shipuScore\\":8888')
    // 钻石
    .replace(/playerInfo_diamond\\":\d+/g,'playerInfo_diamond\\":8888')
    // 厨师帽
    .replace(/playerInfo_cookHat\\":\d+/g,'playerInfo_cookHat\\":180000')
    // 黄金厨师帽
    .replace(/playerInfo_goldCookHat\\":\d+/g,'playerInfo_goldCookHat\\":180000')
    // 普通抽奖券
    .replace(/playerInfo_normalTicket\\":\d+/g,'playerInfo_normalTicket\\":188888')
    // 超级抽奖券
    .replace(/playerInfo_specialTicket\\":\d+/g,'playerInfo_specialTicket\\":188888');

$done({ body });
