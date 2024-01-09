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
.replace(/playerInfo_streetHelper\\":{\\"level\\":\d+/g,'playerInfo_streetHelper\\":{\\"level\\":10')
.replace(/awakeCount\\":\d+/g,'awakeCount\\":120')
.replace(/completeAwakeCount\\":\d+/g,'completeAwakeCount\\":120')
.replace(/totalAwakeTime\\":\d+.d+/g,'totalAwakeTime\\":30')
.replace(/levelAwardGetInfo\\":[1,2,3,4,5]/g,'levelAwardGetInfo\\":[1,2,3,4,5,6,7,8,9,10]')
*******************************

[rewrite_local]

^http[s]?:\/\/www.liwoxiao.com\/api\/game\/account\/data\/download url script-response-body https://raw.githubusercontent.com/hubby1314/Quantumult-X/main/yx/liwoxiao.js

[mitm] 

hostname = www.liwoxiao.com

*******************************/

var body = $response.body.replace(/playerInfo_gold\\":\d+/g,'playerInfo_gold\\":3600000000')
.replace(/playerInfo_godGold\\":\d+/g,'playerInfo_godGold\\":1666666')
.replace(/playerInfo_composeCredits\\":{\\"1\\":\d+,\\"2\\":\d+,\\"3\\":\d+}/g,'playerInfo_composeCredits\\":{\\"1\\":8800,\\"2\\":8800,\\"3\\":8800}')
 .replace(/playerInfo_clover\\":\d+/g,'playerInfo_clover\\":266666')
.replace(/playerInfo_buildScore\\":\d+/g,'playerInfo_buildScore\\":88888888')
.replace(/playerInfo_shipuScore\\":\d+/g,'playerInfo_shipuScore\\":8888')
.replace(/playerInfo_diamond\\":\d+/g,'playerInfo_diamond\\":8888')
$done({ body });
