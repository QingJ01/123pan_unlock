# 123云盘解锁

<div align="center">
    <img src="https://raw.gitmirror.com/QingJ01/123pan_unlock/refs/heads/main/icon.ico" width="128px" style="border-radius: 10px"/>
    <br>
    <img src="https://img.shields.io/badge/version-1.2.0-blue?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/QingJ01/123pan_unlock?style=flat-square" alt="stars">
    <img src="https://img.shields.io/github/forks/QingJ01/123pan_unlock?style=flat-square" alt="forks">
    <img src="https://img.shields.io/github/issues/QingJ01/123pan_unlock?style=flat-square" alt="issues">
    <img src="https://img.shields.io/github/license/QingJ01/123pan_unlock?style=flat-square" alt="license">
    <br>
    <b>让你的123云盘体验更美好</b>
</div>

## ✨ 特性

### 🎭 会员功能
- **身份显示**: 完美模拟会员/超级会员身份
- **等级提升**: 支持自定义等级(最高128级)
- **过期时间**: 自定义会员过期时间
- **广告移除**: 一键关闭所有广告显示

### 🚀 下载增强
- **容量突破**: 解除1GB下载限制
- **场景支持**: 
  - ✅ 个人网盘页面下载
  - ✅ 分享页面文件下载
  - ✅ 不限速不限流文件下载

### ⚡ 秒传功能（来自项目123FastLink）
- **链接生成**: 一键生成文件秒传链接，快速分享
- **链接保存**: 支持导入秒传链接，秒速保存文件
- **格式支持**: 
  - ✅ 纯文本格式
  - ✅ JSON格式（带文件列表预览）
- **批量操作**: 
  - ✅ 多文件/文件夹批量生成
  - ✅ 批量导入保存
- **智能队列**: 
  - ✅ 任务队列管理
  - ✅ 进度实时显示
  - ✅ 失败重试机制
  - ✅ 任务取消功能
- **文件操作**: 
  - ✅ 文件拖拽导入
  - ✅ JSON导入/导出
  - ✅ 详细结果展示

### 🎨 个性化
- **用户名称**: 自定义显示昵称
- **头像设置**: 自定义头像图片
- **界面美化**: 精心设计的设置面板
- **便捷操作**: 快速切换各项功能

## 🌈 界面预览

<div align="center">
    
![设置](https://fastly.jsdelivr.net/gh/bucketio/img8@main/2025/10/06/1759763069658-f7f083b5-03b1-462c-8a30-e4a0245ad21a.png)
  
![保存秒传文件](https://fastly.jsdelivr.net/gh/bucketio/img2@main/2025/10/06/1759763099918-f23ba5e5-f771-4b22-bdbd-a0793e3fcbcf.png)
</div>

## 📦 安装使用

### 安装步骤
1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击 [安装脚本](https://greasyfork.org/zh-CN/scripts/519353-123%E4%BA%91%E7%9B%98%E8%A7%A3%E9%94%81) 跳转至 Greasy Fork
3. 点击安装按钮完成安装

### 使用方法

#### 基础功能
1. 访问 [123云盘](https://www.123pan.com) 网站
2. 点击右下角 `设置面板` 按钮
3. 在面板中配置所需功能:
   - 开启/关闭会员模拟
   - 切换会员等级显示
   - 自定义用户信息
   - 调整其他设置项

#### 秒传功能
1. **生成秒传链接**:
   - 在文件列表页面，点击右下角 `⚡ 秒传` 按钮
   - 选择 `生成秒传链接`![](https://fastly.jsdelivr.net/gh/bucketio/img15@main/2025/10/06/1759762909018-0a020f92-9a01-46d1-9a32-0d329455e8db.png)
  
   - 选中要分享的文件/文件夹
   - 等待生成完成，复制链接或导出JSON
   
2. **保存秒传文件**:
   - 点击 `⚡ 秒传` 按钮
   - 选择 `保存秒传文件`![](https://fastly.jsdelivr.net/gh/bucketio/img6@main/2025/10/06/1759762827380-f0bdaabc-aa98-451f-97d5-5d9521c31aa5.png)
  
   - 粘贴秒传链接或拖入JSON文件
   - 点击保存，等待完成

## 🔄 更新日志

### v1.2.0 (2025-10-06)
- ⚡️ **重大更新**: 整合123FastLink秒传功能
  - 支持生成和保存秒传文件
  - 支持纯文本和JSON两种格式
  - 实现任务队列管理系统
  - 进度条支持最小化显示
  - 文件拖拽导入功能
  - 失败自动重试机制
  - 详细的操作结果展示
- 🎨 优化UI界面，统一按钮样式
- 🔧 删除无用调试日志，提升性能
- 🐞 修复事件监听器泄漏
- 🏗️ 修复错误处理不一致

### v1.1.3 (2025-09-21)
- 🎨 全新UI设计：设置面板采用现代化毛玻璃效果，视觉体验大幅提升
- 🔧 重写XMLHttpRequest拦截机制，使用CustomXHR类封装
- ⚡️ 实现设置项类型智能识别，修复写入数值1被误判为开关的逻辑错误
- 🛡️ 新增输入类型判断逻辑，支持文本、数字、日期时间等多种类型
- 🏗️ 架构重构新增Symbol标识符管理，避免属性冲突和内存泄漏

### v1.1.2 (2025-09-19)
- 🔧 修复权限丢失问题

### v1.1.1 (2025-09-18)
- 🔧 问题修复：修复了在某些情况下会员等级显示不正确的问题
- ⚡️ 下载优化：统一了新旧版下载链接的重写逻辑，解决了部分文件在特定情况下无法下载的问题
- 🚀 核心重构：对脚本代码进行了大规模的重构，使其更加模块化和易于维护
- 💻 增强了广告拦截功能，屏蔽了更多的统计和数据收集请求

### v1.1.0 (2025-09-16)
- 🔧 重置下载逻辑，适配新版123云盘分享页面
- ⚡️ 优化代码结构，重写部分不合理的函数
- 🚀 更新了版本号为1.1.0
- 💻 重构控制面板GUI，适配移动端，更美观和简洁

### v1.0.6 (2025-05-21)
- 🔧 用户报告信息同步: 确保用户报告信息与脚本设置的保持一致
- ⚡️ 增加"长期会员"选项 用户可设置为长期会员状态
- 🐛 对下载链接的转换逻辑进行了细微调整 以提高兼容性和稳定性
- 💻 更新了版本号

### v1.0.5 (2025-02-18)
- ⚡️ 新适配123云盘新域名123912.com

### v1.0.4 (2025-01-18)
- 🔧 修复部分问题
- ⚡️ 优化脚本性能

### v1.0.3 (2025-01-01)
- 🔧 修复了 XMLHttpRequest 中 this 指向问题
- ⚡️ 优化了请求拦截处理
- 🐛 修复了响应拦截可能导致的内存泄漏
- 💻 改进了异常情况的处理逻辑

### v1.0.2 (2024-12-07)
- 🔧 修复了响应处理导致的栈溢出问题
- ⚡️ 优化了脚本整体性能
- 🐛 修复了一些已知问题

### v1.0.1 (2024-12-02) 
- 🐛 修复了部分浏览器中脚本无效果的问题，增强兼容性。
- 💻 优化脚本性能

### v1.0.0 (2024-11-30)
- ✨ 首次发布
- 🎭 支持会员身份模拟
- 🚀 突破下载限制
- 🎨 个性化设置
- 🔧 其他功能

## 💡 常见问题

**Q: 设置不生效怎么办？**  
A: 请尝试刷新页面或重新登录

**Q: 下载还是有限制？**  
A: 请确保已正确开启会员模拟功能

**Q: 支持批量下载吗？**  
A: 不支持，可以选择多个文件后单个下载

**Q: 秒传链接是什么？**  
A: 秒传链接是基于文件哈希值的快速分享方式，接收方可以在不实际传输文件内容的情况下，直接将文件添加到自己的网盘中

**Q: 秒传功能无法使用？**  
A: 请确保：
- 已在文件列表页面（不是分享页面）
- 网络连接正常
- 文件选择正确

**Q: 保存秒传文件失败？**  
A: 可能原因：
- 源文件已被删除
- 网络连接问题
- 请查看详细错误信息并重试

## 🤝 交流反馈

- [GitHub Issues](https://github.com/QingJ01/123pan_unlock/issues): 提交问题反馈
- [QQ交流群](https://qm.qq.com/cgi-bin/qm/qr?k=7j_1SXC6SUlOKqHfqVk2YMPrWSdf5Js7&jump_from=webapi&authKey=ih1vlkxMeQc9CxE18GjR2WN0x85OQoP7jB78/3UzeJ4hvXw3+eSUNeRMjHjS24lT): 加入用户交流群
- 公众号：极客氢云

![公众号](https://jiashu.1win.eu.org/https://raw.githubusercontent.com/QingJ01/123pan_unlock/refs/heads/main/gongzhonghao.png)

## 📝 开源协议

本项目基于 Apache Licence 2.0 协议开源，使用请注明出处。

## ⚠️ 免责声明

- 本脚本仅供学习交流使用
- 请勿用于任何商业用途
- 使用本脚本产生的任何后果由用户自行承担

## 🙏 鸣谢

- 感谢 [Baoqing](https://github.com/Bao-qing/)、[Chaofan2685](https://github.com/chaofan2685)、[lipkiat](https://github.com/lipkiat) - 提供123FastLink秒传功能核心代码
- 感谢 [hmjz100](https://github.com/hmjz100/123panYouthMember/) - 提供新版解决方案和适配代码参考
- 感谢所有提供建议和反馈的用户

---

<div align="center">
    <b>如果觉得脚本好用，欢迎点个 ⭐ Star 支持一下！</b>
    <br><br>
    <a href="https://github.com/QingJ01/123pan_unlock">
        <img src="https://img.shields.io/badge/GitHub-项目主页-brightgreen?style=for-the-badge&logo=github" alt="GitHub">
    </a>
    <a href="https://greasyfork.org/zh-CN/scripts/519353-123%E4%BA%91%E7%9B%98%E8%A7%A3%E9%94%81">
        <img src="https://img.shields.io/badge/GreasyFork-脚本安装-orange?style=for-the-badge&logo=tampermonkey" alt="GreasyFork">
    </a>
</div>

