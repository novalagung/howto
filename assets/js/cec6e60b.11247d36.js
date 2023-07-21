"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[966],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9076:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){return a.createElement("iframe",{src:"https://novalagung.substack.com/embed",width:"100%",height:"320",style:{border:"1px solid #EEE",background:"white"},frameborder:"0",scrolling:"no"})}},2600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),i=t(9076);const r={title:"How to Setup Oracle Instant Client",sidebar_label:"Setup Oracle Instant Client",description:"How to Setup Oracle Instant Client",keywords:["oracle","instantclient","oracle linux","linux","database"]},o=void 0,s={unversionedId:"setup-oracle-instantclient",id:"setup-oracle-instantclient",title:"How to Setup Oracle Instant Client",description:"How to Setup Oracle Instant Client",source:"@site/docs/setup-oracle-instantclient.md",sourceDirName:".",slug:"/setup-oracle-instantclient",permalink:"/setup-oracle-instantclient",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Setup Oracle Instant Client",sidebar_label:"Setup Oracle Instant Client",description:"How to Setup Oracle Instant Client",keywords:["oracle","instantclient","oracle linux","linux","database"]},sidebar:"tutorialSidebar",previous:{title:"Deploy App to Minikube Cluster using Deployment controller, Service, and HPA",permalink:"/kubernetes-minikube-deployment-service-horizontal-autoscale"},next:{title:"Setup Oracle XE Database Server",permalink:"/setup-oracle-xe-database-server"}},c={},p=[{value:"1. Setup Oracle Instant Client on Linux (Ubuntu 16.04)",id:"1-setup-oracle-instant-client-on-linux-ubuntu-1604",level:2},{value:"2. Setup Oracle Instant Client on Windows 10",id:"2-setup-oracle-instant-client-on-windows-10",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this post, we are going to learn how to setup Oracle instant client on Linux, Windows, and MacOS."),(0,l.kt)("h2",{id:"1-setup-oracle-instant-client-on-linux-ubuntu-1604"},"1. Setup Oracle Instant Client on Linux (Ubuntu 16.04)"),(0,l.kt)("p",null,"First of all, download these three files from ",(0,l.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html"},"https://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instantclient-basic-linux.x64-12.2.0.1.0.zip"),(0,l.kt)("li",{parentName:"ul"},"instantclient-sdk-linux.x64-12.2.0.1.0.zip"),(0,l.kt)("li",{parentName:"ul"},"instantclient-sqlplus-linux.x64-12.2.0.1.0.zip")),(0,l.kt)("p",null,"Then update os package repository, continue with install the required essentials tools/"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install build-essential libaio1 unzip git pkg-config\n")),(0,l.kt)("p",null,"Next, we shall setup the oracle client."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /home/novalagung/oracle && cd /home/novalagung/oracle\ncp /where/instantclient-*.zip .\n\nunzip instantclient-basic-linux.x64-12.2.0.1.0.zip\nunzip instantclient-sdk-linux.x64-12.2.0.1.0.zip\nunzip instantclient-sqlplus-linux.x64-12.2.0.1.0.zip\nrm -rf instantclient-*.zip\n\necho 'export ORACLE_HOME=/home/novalagung/oracle/instantclient_12_2' >> /home/novalagung/.bashrc\necho 'export PATH=$PATH:$ORACLE_HOME' >> /home/novalagung/.bashrc\nsource /home/novalagung/.bashrc\n\ncd /home/novalagung/oracle/instantclient_12_2\nln -s libclntsh.so.12.1 libclntsh.so\nln -s libocci.so.12.1 libocci.so\n\nsudo sh -c 'echo '/home/novalagung/oracle/instantclient_12_2' >> /etc/ld.so.conf.d/oracle-instantclient.conf'\n\necho 'export DYLD_LIBRARY_PATH=$ORACLE_HOME' >> /home/novalagung/.bashrc\necho 'export LD_LIBRARY_PATH=$ORACLE_HOME' >> /home/novalagung/.bashrc\n\nsudo ldconfig\n")),(0,l.kt)("p",null,"Next, create ",(0,l.kt)("inlineCode",{parentName:"p"},"oci8.pc")," file. This file is required later by go oracle driver to be able to communicate with the oracle database server. If you plan only to connect to the oracle database server by using ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlplus")," only, then the file is not necessarily required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /usr/lib/pkgconfig/oci8.pc\n")),(0,l.kt)("p",null,"Fill it with this content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"instantclient=/home/novalagung/oracle/instantclient_12_2\nlibdir=${instantclient}\nincludedir=${instantclient}/sdk/include/\n\nName: oci8\nDescription: oci8 library\nVersion: 12.1\nLibs: -L${libdir} -lclntsh\nCflags: -I${includedir}\n")),(0,l.kt)("p",null,"Last, try to connect to the oracle db server using ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlplus"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sqlplus SYSTEM/MANAGER@//localhost:1521/XE\n\n# SQL*Plus: Release 11.2.0.4.0 Production on Wed Oct 3 06:48:54 2018\n# Copyright (c) 1982, 2013, Oracle.  All rights reserved.\n# \n# Connected to:\n# Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\n")),(0,l.kt)("p",null,"The result is: ",(0,l.kt)("strong",{parentName:"p"},"connected"),". Try to perform a simple query like getting the database version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"SQL> SELECT * FROM V$VERSION;\n\nBANNER\n--------------------------------------------------------------------------------\nOracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\nPL/SQL Release 11.2.0.2.0 - Production\nCORE    11.2.0.2.0  Production\nTNS for Linux: Version 11.2.0.2.0 - Production\nNLSRTL Version 11.2.0.2.0 - Production\n")),(0,l.kt)("h2",{id:"2-setup-oracle-instant-client-on-windows-10"},"2. Setup Oracle Instant Client on Windows 10"),(0,l.kt)("p",null,"First of all, download these three files from ",(0,l.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/topics/winx64soft-089540.html"},"https://www.oracle.com/technetwork/topics/winx64soft-089540.html"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instantclient-basic-windows.x64-12.2.0.1.0.zip"),(0,l.kt)("li",{parentName:"ul"},"instantclient-sdk-windows.x64-12.2.0.1.0.zip"),(0,l.kt)("li",{parentName:"ul"},"instantclient-sqlplus-windows.x64-12.2.0.1.0.zip")),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"Oracle")," folder at ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Oracle"),", put all downloaded archives into this folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd \\\nmkdir Oracle\n")),(0,l.kt)("p",null,"Then extract zip files, all of them. By default it'll be extracted into ",(0,l.kt)("inlineCode",{parentName:"p"},"instantclient_12_2")," folder under ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Oracle"),", and let it be."),(0,l.kt)("p",null,"Append the ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Oracle\\instantclient_12_2")," path into ",(0,l.kt)("inlineCode",{parentName:"p"},"%PATH%")," variable."),(0,l.kt)("p",null,"Next, set these CGO_ variables."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'setx CGO_CFLAGS "-IC:\\OtherPrograms\\Oracle\\instantclient_12_2\\sdk\\include"\nsetx CGO_LDFLAGS "-LC:\\OtherPrograms\\Oracle\\instantclient_12_2 -loci"\n')),(0,l.kt)("p",null,"Now we need to install ",(0,l.kt)("strong",{parentName:"p"},"GCC"),", and in this tutorial we'll use MSYS2 64bit. Download the installer ",(0,l.kt)("inlineCode",{parentName:"p"},"msys2-x86_64-*.exe")," from ",(0,l.kt)("a",{parentName:"p",href:"https://www.msys2.org."},"https://www.msys2.org.")," After download process finished, run the installer. Pick any directory path you want, but make sure to remember it. In my place, I install it here."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\msys64\n")),(0,l.kt)("p",null,"Next, run the ",(0,l.kt)("strong",{parentName:"p"},"MSYS2 MinGW 64-bit")," application. Then execute these commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Update pacman\npacman -Su\n# Install pkg-config and gcc\npacman -S mingw64/mingw-w64-x86_64-pkg-config mingw64/mingw-w64-x86_64-gcc\n")),(0,l.kt)("p",null,"Now, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"PKG_CONFIG_PATH")," variable to points to the oci8.pc file inside msys64 (mingw64) pkgconfig folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'setx PKG_CONFIG_PATH "C:\\msys64\\mingw64\\lib\\pkgconfig\\oci8.pc"\n')),(0,l.kt)("p",null,"Then add msys64 (mingw64) binary path into ",(0,l.kt)("inlineCode",{parentName:"p"},"%PATH%")," variable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\msys64\\mingw64\\bin\n")),(0,l.kt)("p",null,"Next create the ",(0,l.kt)("inlineCode",{parentName:"p"},"oci8.pc")," file on inside msys64 (mingw64) pkgconfig folder. This file is required later by go oracle driver to be able to communicate with the oracle database server. If you plan only to connect to the oracle database server by using ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlplus")," only, then the file is not necessarily required."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\msys64\\mingw64\\lib\\pkgconfig\\oci8.pc\n")),(0,l.kt)("p",null,"Below is the content of the file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'oralib="C:/Oracle/instantclient_12_2/sdk/lib/msvc"\norainclude="C:/Oracle/instantclient_12_2/sdk/include"\ngcclib="C:/msys64/mingw64/lib"\ngccinclude="C:/msys64/mingw64/include"\n\nName: oci8\nVersion: 12.2\nDescription: oci8 library\nLibs: -L${oralib} -L${gcclib} -loci\nLibs.private:\nCflags: -I${orainclude} -I${gccinclude}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"REMINDER:")," You need to adjust the ",(0,l.kt)("inlineCode",{parentName:"p"},"oralib"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"orainclude"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gcclib"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"gccinclude")," value to match your settings. And also replace the backslash (",(0,l.kt)("inlineCode",{parentName:"p"},"\\"),") into slash (",(0,l.kt)("inlineCode",{parentName:"p"},"/"),")."),(0,l.kt)("p",null,"OK, the oracle client setup is done. Last step, try to connect to the oracle db server using ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlplus"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sqlplus SYSTEM/MANAGER@//localhost:1521/XE\n\n# SQL*Plus: Release 11.2.0.4.0 Production on Wed Oct 3 06:48:54 2018\n# Copyright (c) 1982, 2013, Oracle.  All rights reserved.\n# \n# Connected to:\n# Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\n")),(0,l.kt)("p",null,"The result is: ",(0,l.kt)("strong",{parentName:"p"},"connected"),". Try to perform a simple query like getting the database version."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"SQL> SELECT * FROM V$VERSION;\n\nBANNER\n--------------------------------------------------------------------------------\nOracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\nPL/SQL Release 11.2.0.2.0 - Production\nCORE    11.2.0.2.0  Production\nTNS for Linux: Version 11.2.0.2.0 - Production\nNLSRTL Version 11.2.0.2.0 - Production\n")),(0,l.kt)("hr",null),(0,l.kt)(i.Z,{mdxType:"Substack"}))}d.isMDXComponent=!0}}]);