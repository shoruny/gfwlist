# 自定义远程gfwlist
- [明文gfwlist编辑规则](https://adblockplus.org/en/filter-cheatsheet)
# 1.PAC
## 自动化部署
### 1.Nodejs
- 1.fork本项目，并clone到本地
- 2.自行安装Nodejs环境
- 3.修改明文的gfwlist[gfwlist_decode.txt]
- 4.node base64.js

### 2.shell[Mac or linux]
- 1.fork本项目，并clone到本地
- 2.修改明文的gfwlist[gfwlist_decode.txt]
- 3.bash base64.sh

## 使用方法
- 修改下方的mack-a为自己的用户名
```
https://raw.githubusercontent.com/mack-a/gfwlist/master/gfwlist.txt
```

# 2.routing
- 支持V2RayN、Qv2ray

## 文档
- [Qv2ray高级路由](https://qv2ray.net/manual/route.html#%E5%85%A8%E5%B1%80%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99)
- [v2ray路由](https://www.v2fly.org/config/routing.html#routingobject)

## 使用
- 使用前请先看文档
- fork本项目，在线修改proxy_rule.json文件
- 修改下方的mack-a为自己的用户名
```
https://raw.githubusercontent.com/mack-a/gfwlist/master/proxy_rules.json
```

# 3.Shadowrocket
- 修改下方的mack-a为自己的用户名
```
https://raw.githubusercontent.com/mack-a/gfwlist/master/Shadowrocket_proxy.conf
```