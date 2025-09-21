# 123云盘解锁

<div align="center">
    <img src="https://raw.gitmirror.com/QingJ01/123pan_unlock/refs/heads/main/icon.ico" width="128px" style="border-radius: 10px"/>
    <br>
    <img src="https://img.shields.io/badge/version-1.1.1-blue?style=flat-square" alt="version">
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

### 🎨 个性化
- **用户名称**: 自定义显示昵称
- **头像设置**: 自定义头像图片
- **界面美化**: 精心设计的设置面板
- **便捷操作**: 快速切换各项功能

## 🌈 界面预览

<div align="center">
    <img src="https://raw.gitmirror.com/QingJ01/123pan_unlock/refs/heads/main/PanelView.png" width="350px" style="border-radius: 10px"/>
    <p><i>设置面板界面 - 简洁而强大</i></p>
</div>

## 📦 安装使用

### 安装步骤
1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击 [安装脚本](https://greasyfork.org/zh-CN/scripts/519353-123%E4%BA%91%E7%9B%98%E8%A7%A3%E9%94%81) 跳转至 Greasy Fork
3. 点击安装按钮完成安装

### 使用方法
1. 访问 [123云盘](https://www.123pan.com) 网站
2. 点击右下角 `设置面板` 按钮
3. 在面板中配置所需功能:
   - 开启/关闭会员模拟
   - 切换会员等级显示
   - 自定义用户信息
   - 调整其他设置项

## 🔄 更新日志
### v1.1.5 (2025-09-21)
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
- ​🚀 核心重构：对脚本代码进行了大规模的重构，使其更加模块化和易于维护
- 💻 增强了广告拦截功能，屏蔽了更多的统计和数据收集请求

### v1.1.0 (2025-09-16)
- 🔧 重置下载逻辑，适配新版123云盘分享页面
- ⚡️ 优化代码结构，重写部分不合理的函数
- ​🚀 更新了版本号为1.1.0
- 💻 重构控制面板GUI，适配移动端，更美观和简洁

### v1.0.6 (2025-05-21)
- 🔧 用户报告信息同步: 确保用户报告信息与脚本设置的保持一致
- ⚡️ 增加“长期会员”选项 用户可设置为长期会员状态
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
  - 可切换普通/超级会员显示
  - 自定义会员等级(最高128级)
  - 自定义过期时间
- 🚀 突破下载限制
  - 解除1GB下载上限
  - 支持个人网盘下载
  - 支持分享页面下载
  - 支持大空间告诉下载
- 🎨 个性化设置
  - 精美设置面板
  - 自定义用户名称
  - 自定义头像图片
  - 一键关闭广告
- 🔧 其他功能
  - 支持调试模式
  - 数据本地存储

## 💡 常见问题

**Q: 设置不生效怎么办？**  
A: 请尝试刷新页面或重新登录

**Q: 下载还是有限制？**  
A: 请确保已正确开启会员模拟功能

**Q: 支持批量下载吗？**  
A: 不支持，可以选择多个文件后单个下载

## 🤝 交流反馈

- [GitHub Issues](https://github.com/QingJ01/123pan_unlock/issues): 提交问题反馈
- [QQ交流群](https://qm.qq.com/cgi-bin/qm/qr?k=7j_1SXC6SUlOKqHfqVk2YMPrWSdf5Js7&jump_from=webapi&authKey=ih1vlkxMeQc9CxE18GjR2WN0x85OQoP7jB78/3UzeJ4hvXw3+eSUNeRMjHjS24lT): 加入用户交流群
- 公众号：极客氢云![公众号](https://jiashu.1win.eu.org/https://raw.githubusercontent.com/QingJ01/123pan_unlock/refs/heads/main/gongzhonghao.png)

## 📝 开源协议

本项目基于 Apache Licence 2.0 协议开源，使用请注明出处。

## ⚠️ 免责声明

- 本脚本仅供学习交流使用
- 请勿用于任何商业用途
- 使用本脚本产生的任何后果由用户自行承担

## 🙏 鸣谢

- 本项目 CDN 加速及安全防护由 Tencent EdgeOne 赞助
- ![EdgeOne](https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png)
- [亚洲最佳CDN、边缘和安全解决方案 - Tencent EdgeOne](https://edgeone.ai/zh?from=github.com/QingJ01)
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
