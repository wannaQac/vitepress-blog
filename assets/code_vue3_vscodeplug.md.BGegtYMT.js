import{_ as a,c as s,o as t,a1 as n}from"./chunks/framework.DvkhmZaR.js";const v=JSON.parse('{"title":"Vscode 配置","description":"","frontmatter":{},"headers":[],"relativePath":"code/vue3/vscodeplug.md","filePath":"code/vue3/vscodeplug.md"}'),e={name:"code/vue3/vscodeplug.md"},o=n(`<h1 id="vscode-配置" tabindex="-1">Vscode 配置 <a class="header-anchor" href="#vscode-配置" aria-label="Permalink to &quot;Vscode 配置&quot;">​</a></h1><h2 id="vscode-vue-插件" tabindex="-1">Vscode Vue 插件 <a class="header-anchor" href="#vscode-vue-插件" aria-label="Permalink to &quot;Vscode Vue 插件&quot;">​</a></h2><h3 id="vue2" tabindex="-1">Vue2 <a class="header-anchor" href="#vue2" aria-label="Permalink to &quot;Vue2&quot;">​</a></h3><ul><li>Vetur</li></ul><h3 id="vue3" tabindex="-1">Vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;Vue3&quot;">​</a></h3><ul><li>Vue - Official</li></ul><h2 id="代码片段设置" tabindex="-1">代码片段设置 <a class="header-anchor" href="#代码片段设置" aria-label="Permalink to &quot;代码片段设置&quot;">​</a></h2><p><code>Vscode</code> 左下角设置-代码片段-搜索或者键入 <code>vue</code> 进行 <code>vue.json</code> 的设置，参考内容如下，这允许你在某个 <code>.vue</code> 后缀的空文件中输入 <code>vue3</code> 的时候默认生成 <code>body</code> 中的内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>	&quot;Print to console&quot;: {</span></span>
<span class="line"><span>		&quot;prefix&quot;: &quot;vue3&quot;,</span></span>
<span class="line"><span>		&quot;body&quot;: [</span></span>
<span class="line"><span>			&quot;&lt;template&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&quot;,</span></span>
<span class="line"><span>			&quot;  &lt;div&gt;&lt;/div&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/template&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;script setup lang=&#39;ts&#39;&gt;&quot;,</span></span>
<span class="line"><span>			&quot;import { ref, reactive } from &#39;vue&#39;&quot;,</span></span>
<span class="line"><span>			&quot;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/script&gt;&quot;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			&quot;&lt;style scoped&gt;&quot;,</span></span>
<span class="line"><span>			&quot;&quot;,</span></span>
<span class="line"><span>			&quot;&lt;/style&gt;&quot;,</span></span>
<span class="line"><span>		],</span></span>
<span class="line"><span>		&quot;description&quot;: &quot;Log output&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9),p=[o];function l(c,u,i,d,r,q){return t(),s("div",null,p)}const _=a(e,[["render",l]]);export{v as __pageData,_ as default};
