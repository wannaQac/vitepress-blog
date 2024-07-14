import{_ as e,c as a,o as i,a1 as s}from"./chunks/framework.CB-_N9GX.js";const u=JSON.parse('{"title":"新特性","description":"","frontmatter":{},"headers":[],"relativePath":"code/vue3/index.md","filePath":"code/vue3/index.md"}'),t={name:"code/vue3/index.md"},l=s(`<h1 id="新特性" tabindex="-1">新特性 <a class="header-anchor" href="#新特性" aria-label="Permalink to &quot;新特性&quot;">​</a></h1><h2 id="重写数据双向绑定" tabindex="-1">重写数据双向绑定 <a class="header-anchor" href="#重写数据双向绑定" aria-label="Permalink to &quot;重写数据双向绑定&quot;">​</a></h2><p><code>vue2</code> 采用 <code>Object.defineProperty()</code>，<code>vue3</code> 基于 <code>Proxy</code></p><p>为什么这么做？</p><ul><li><code>defineProperty()</code> 对数组支持不友好，需要重写数组的方法，并且直接修改数组的 <code>length</code> 是不被监听的</li><li>代码更简化，可以监听动态新增的属性和删除的属性</li></ul><h2 id="vdom性能提升" tabindex="-1">VDOM性能提升 <a class="header-anchor" href="#vdom性能提升" aria-label="Permalink to &quot;VDOM性能提升&quot;">​</a></h2><p><code>vue2</code> 中每次 <code>diff</code> 都是全量对比，<code>vue3</code> 则区分了哪些是动态的添加标记，哪些是静态的则没有标记，只对带有标记的进行对比，提升了性能</p><h2 id="fragments" tabindex="-1">Fragments <a class="header-anchor" href="#fragments" aria-label="Permalink to &quot;Fragments&quot;">​</a></h2><ul><li><code>vue3</code> 中 <code>&lt;template&gt;&lt;/template&gt;</code> 中可以写多个同级节点了，但是 <code>vue2</code> 只能有一个节点</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- vue3 举例 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>支持 <code>JSX</code> 语法</li><li>新增组件 <code>Suspense</code> 和 <code>teleport</code></li></ul><h2 id="tree-shaking" tabindex="-1">Tree-Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree-Shaking&quot;">​</a></h2><p><code>vue3</code> 可以在保持代码运行结果不变的前提下，去掉无用的代码，也就是按需引入</p><h2 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-label="Permalink to &quot;Composition API&quot;">​</a></h2><ul><li><code>Setup</code> 语法糖编程，例如 <code>ref</code>, <code>reactive</code>, <code>watch</code> 等</li></ul>`,15),n=[l];function o(d,h,c,p,r,k){return i(),a("div",null,n)}const g=e(t,[["render",o]]);export{u as __pageData,g as default};
