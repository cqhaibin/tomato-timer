## 框架基架目录说明
1. skin：存放皮肤或样式内容
2. lib：依赖的第三方js组件
3. core: 框架基架和系统模块（如：布局模块）
## api说明
### 导航
可以通过获取vue的store来进行dispatch实现。其中分为两种导航：
#### 一级导航，其key为root，赋值只是向一级导航添加数据，导航数据格式如下：
```
{id:'mainc', path: 'test', thridpart: true, name: '业务组件', href: '/mainc', selected: false}
```
说明：   
1. id：一级导航的Id，必须惟一
2. path: 对就业务组件的文件路径，可以省略.js扩展名
3. thridpart: 表示是否为第三方业务组件，设置为false，框架不会主动加载此业务组件
4. name：一级导航的名称
5. href：一级导航的hash值
6. selected: 表示是否被选中，用于导航状态
#### 二级导航，其key为childs，赋值必须是一个数组，其内部会直接替换当前二级导航的所有的数据。
### 业务组件的勾子
#### install
组件被首次加载和安装成功后执行，参数是cxt，其包含了框架基架相关实例，如：vue，vueRouter、store、service、api等。
#### activated
组件被激活的时候执行，首次会晚于install勾子的执行，参数与install一致.   
为什么要有activated勾子，此少现在动态注入业务模块的二级导航必须在此方法中实现。因为在主导航切换的时候是没有缓存二级导航的。