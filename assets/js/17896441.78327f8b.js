"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[918],{1970:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(2263),o=a(7916),l=a(1262);const m=()=>{const{siteConfig:e}=(0,r.Z)();return n.createElement(n.Fragment,null,n.createElement("iframe",{src:`https://${e.organizationName}.substack.com/embed`,width:"100%",height:"320",className:"substack-iframe",frameborder:"0",scrolling:"no"}))};function c(e){return n.createElement(n.Fragment,null,n.createElement(o.Z,e),n.createElement(l.Z,null,(()=>{var e,t;return"/"===(null==(e=window)||null==(t=e.location)?void 0:t.pathname)&&n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement(m,null))})))}},718:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(7294),r=a(2263),o=a(3944),l=a(8234),m=a(1262);const c=()=>{const{siteConfig:e}=(0,r.Z)();console.log("siteConfig",e.themeConfig.showContentFooterEbookWrapper);const t=[{id:"dasarpemrogramangolang",name:"Dasar Pemrograman Golang",src:"/img/cover ebook golang.png"},{id:"dasarpemrogramanpython",name:"Dasar Pemrograman Python",src:"/img/cover ebook python.png"},{id:"dasarpemrogramanrust",name:"Dasar Pemrograman Rust",src:"/img/cover ebook rust.png"}].sort(((t,a)=>{const n=t=>String(t.id===e.projectName?-1:1)+t.name;return n(t).localeCompare(n(a))}));return n.createElement(n.Fragment,null,n.createElement("div",{className:"ebook-wrapper"},n.createElement("h3",null,"Serial ebook/webbook ",n.createElement("span",{className:"underline"},"Dasar Pemrograman")," lainnya:"),t.map((t=>n.createElement("div",{className:"ebook "+(t.id===e.projectName?"ebook-current":""),key:t.id},n.createElement("a",{href:`https://${t.id}.novalagung.com/`,target:"_blank"},n.createElement("span",{className:"ebook-checkmark"},"\u2705"),n.createElement("img",{className:"ebook-img",src:t.src}),n.createElement("span",{className:"ebook-title"},"Ebook: ",t.name)))))))};function s(e){const{siteConfig:t}=(0,r.Z)(),{metadata:a}=e.content,{comments:s=!0}=a.frontMatter,i=`${t.title} - ${a.title.split(". ").reverse()[0]}`,g=`${t.url}${a.slug}`;return n.createElement(n.Fragment,null,n.createElement(l.Z,e),n.createElement(m.Z,null,(()=>t.themeConfig.showContentFooterEbookWrapper?n.createElement(c,null):n.createElement(n.Fragment,null))),n.createElement(m.Z,null,(()=>s&&n.createElement(n.Fragment,null,n.createElement("div",{className:"disqus-wrapper"},n.createElement(o.qw,{shortname:"dasarpemrogramangolang",config:{url:g,identifier:g,title:i}}))))))}}}]);