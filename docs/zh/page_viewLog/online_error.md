# 日志——线上问题诊断



## 诊断

### DLC缺失错误

搜索`DLC`,如见以下报错即为DLC缺失

<div align=center> <img src="../imgs/page_viewLog/Indexes/DLC_missing_01.png" alt="DLC_missing_01" align=center; style="zoom:100%;" /> </div>

如还没有购买DLC请点击[这里](../page-localGame/install#购买dlc) 如购买了DLC但是仍出现此错误请点击[这里](../page-localGame/error#)


### 本地车辆版本和服务器不同步


### sol错误

打开日志文件夹中的log.txt，找到第43行
<div align=center> <img src="../imgs/page_viewLog/online_error/sol_error_01.png" alt="sol_error_01" align=center; style="zoom:100%;" /> </div>
如果如上图所示，显示为`_sol`则说明已经使用sol，可以排除未引用sol的情况，如果没有则可能是使用了其他渲染器导致的错误






