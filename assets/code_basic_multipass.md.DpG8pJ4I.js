import{_ as a,c as s,o as t,a1 as e,a7 as i,a8 as o,a9 as r}from"./chunks/framework.CaBQSRqq.js";const w=JSON.parse('{"title":"Multipass 配置流程","description":"","frontmatter":{},"headers":[],"relativePath":"code/basic/multipass.md","filePath":"code/basic/multipass.md"}'),l={name:"code/basic/multipass.md"},n=e('<h1 id="multipass-配置流程" tabindex="-1">Multipass 配置流程 <a class="header-anchor" href="#multipass-配置流程" aria-label="Permalink to &quot;Multipass 配置流程&quot;">​</a></h1><h2 id="_1-multipass-是什么" tabindex="-1">1.Multipass 是什么 <a class="header-anchor" href="#_1-multipass-是什么" aria-label="Permalink to &quot;1.Multipass 是什么&quot;">​</a></h2><p>Multipass 是一个轻量虚拟机管理器，是由 Ubuntu 运营公司 Canonical 所推出的开源项目。运行环境支持 Linux、Windows、macOS。在不同的操作系统上，使用的是不同的虚拟化技术。</p><h2 id="_2-windows-配置-multipass-流程" tabindex="-1">2.Windows 配置 Multipass 流程 <a class="header-anchor" href="#_2-windows-配置-multipass-流程" aria-label="Permalink to &quot;2.Windows 配置 Multipass 流程&quot;">​</a></h2><h3 id="_2-1-确保电脑开启了虚拟化" tabindex="-1">2.1 确保电脑开启了虚拟化 <a class="header-anchor" href="#_2-1-确保电脑开启了虚拟化" aria-label="Permalink to &quot;2.1 确保电脑开启了虚拟化&quot;">​</a></h3><p>在任务管理器中可以看到，具体开启的方法各家BIOS都不一样，自己搜吧 <img src="'+i+'" alt="virtualization"></p><h3 id="_2-2-确保电脑启动了-hyper-v" tabindex="-1">2.2 确保电脑启动了 hyper-v <a class="header-anchor" href="#_2-2-确保电脑启动了-hyper-v" aria-label="Permalink to &quot;2.2 确保电脑启动了 hyper-v&quot;">​</a></h3><p><code>Windows</code> 要支持 <code>hyper-v</code>，我的是win11专业版，如果是win10/11的家庭版，tb自己10块钱买一个升级一下，启动方法为控制面板-程序-启动或关闭windows功能-Hyper-V，勾选后等待系统配置，会提醒你重启 <img src="'+o+'" alt="hyperv"></p><h3 id="_2-3-安装-multipass" tabindex="-1">2.3 安装 Multipass <a class="header-anchor" href="#_2-3-安装-multipass" aria-label="Permalink to &quot;2.3 安装 Multipass&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Note: You need Windows 10 Pro/Enterprise/Education v 1803 or later, or any Windows 10 with VirtualBox</p></div><p><a href="https://multipass.run/install" target="_blank" rel="noreferrer">Install link</a></p><p>推荐使用 <code>hyper-v</code>, 其他的一路点下来即可 <img src="'+r+'" alt="installselect"></p>',12),p=[n];function c(d,u,h,_,m,b){return t(),s("div",null,p)}const v=a(l,[["render",c]]);export{w as __pageData,v as default};
