"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"How to Setup Oracle XE Database Server",sidebar_label:"Setup Oracle XE Database Server",description:"How to Setup Oracle XE Database Server",keywords:["oracle","oracle xe","oracle linux","linux","database"],displayed_sidebar:"manualSidebar"},i=void 0,l={unversionedId:"setup-oracle-xe-database-server",id:"setup-oracle-xe-database-server",title:"How to Setup Oracle XE Database Server",description:"How to Setup Oracle XE Database Server",source:"@site/docs/setup-oracle-xe-database-server.md",sourceDirName:".",slug:"/setup-oracle-xe-database-server",permalink:"/setup-oracle-xe-database-server",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Setup Oracle XE Database Server",sidebar_label:"Setup Oracle XE Database Server",description:"How to Setup Oracle XE Database Server",keywords:["oracle","oracle xe","oracle linux","linux","database"],displayed_sidebar:"manualSidebar"},sidebar:"manualSidebar",previous:{title:"Setup Oracle Instant Client",permalink:"/setup-oracle-instantclient"},next:{title:"Setup Serverless Ebook/Webbook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",permalink:"/cicd-serverless-ebook-gitbook-github-pages-actions-calibre"}},s={},c=[{value:"1. Setup Oracle XE Database Server on CentOS 6 (Oracle Linux)",id:"1-setup-oracle-xe-database-server-on-centos-6-oracle-linux",level:2},{value:"1.1. Convert CentOS 6 into Oracle Linux",id:"11-convert-centos-6-into-oracle-linux",level:3},{value:"1.2. Setup Oracle XE Database Server on Oracle Linux",id:"12-setup-oracle-xe-database-server-on-oracle-linux",level:3},{value:"2. Setup Oracle XE Database Server using Docker",id:"2-setup-oracle-xe-database-server-using-docker",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, we are going to learn how to setup Oracle XE Database Server on CentOS, Oracle Linux, and using Docker Container."),(0,r.kt)("h2",{id:"1-setup-oracle-xe-database-server-on-centos-6-oracle-linux"},"1. Setup Oracle XE Database Server on CentOS 6 (Oracle Linux)"),(0,r.kt)("h3",{id:"11-convert-centos-6-into-oracle-linux"},"1.1. Convert CentOS 6 into Oracle Linux"),(0,r.kt)("p",null,"The easiest way to install Oracle Database Server is through ",(0,r.kt)("strong",{parentName:"p"},"Oracle Linux")," distribution. However, you can also use CentOS 6 and convert it into Oracle Linux, and the steps to do that will also be covered in this post."),(0,r.kt)("p",null,"Oracle Linux is a Linux distribution packaged and freely distributed by Oracle, available partially under the GNU General Public License since late 2006. It's free, we can easily get it from ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/linux/"},"Oracle Linux Download Page"),"."),(0,r.kt)("p",null,"There is also an alternative way to get the Oracle Linux, by converting CentOS into Oracle Linux. In this post we'll learn to do that."),(0,r.kt)("p",null,"OK let's start. First of all, update os package repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum update\n")),(0,r.kt)("p",null,"Oracle provides us capability to convert CentOS into Oracle Linux, and they make it to be so easy to use. For detailed information just take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://linux.oracle.com/switch/centos"},"https://linux.oracle.com/switch/centos"),"."),(0,r.kt)("p",null,"Ok, let's download the ",(0,r.kt)("inlineCode",{parentName:"p"},"centos2ol.sh")," file then execute it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://linux.oracle.com/switch/centos2ol.sh \nsudo sh centos2ol.sh\n\n# Checking for required packages...\n# Checking your distribution...\n# Checking for yum lock...\n# Looking for yumdownloader...\n# Finding your repository directory...\n# Downloading Oracle Linux yum repository file...\n# Backing up and removing old repository files...\n# Downloading Oracle Linux release package...\n# \n# ... will take sometime\n#\n# Dependency Updated:\n#   plymouth-core-libs.x86_64 0:0.8.3-29.0.1.el6\n# \n# Replaced:\n#   redhat-logos.noarch 0:60.0.14-12.el6.centos\n# \n# Finished Transaction\n# > Leaving Shell\n# Updating initrd...\n# Installation successful!\n# Run 'yum distro-sync' to synchronize your installed packages\n# with the Oracle Linux repository.\n")),(0,r.kt)("p",null,"Next, synchronize the installed packages to the Oracle Linux repository by using command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum distro-sync\n\n# Loaded plugins: fastestmirror, security\n# Setting up Distribution Synchronization Process\n# Loading mirror speeds from cached hostfile\n# Only Upgrade available on package: sysstat-9.0.4-33.el6_9.1.x86_64\n# Resolving Dependencies\n# --\x3e Running transaction check\n# ---\x3e Package acpid.x86_64 0:1.0.10-3.el6 will be updated\n# ---\x3e Package acpid.x86_64 0:2.0.19-6.0.1.el6 will be an update\n# \n# ...\n# \n# Updated:\n#   sos.noarch 0:3.2-63.0.1.el6_10.2\n#   system-config-network-tui.noarch 0:1.6.0.el6.3-4.0.1.el6\n#   systemtap-runtime.x86_64 0:2.9-9.0.1.el6\n#   yum-plugin-security.noarch 0:1.1.30-42.0.1.el6_10\n#   yum-utils.noarch 0:1.1.30-42.0.1.el6_10\n# \n# Complete!\n")),(0,r.kt)("p",null,"Just that, your Oracle Linux is ready."),(0,r.kt)("h3",{id:"12-setup-oracle-xe-database-server-on-oracle-linux"},"1.2. Setup Oracle XE Database Server on Oracle Linux"),(0,r.kt)("p",null,"You can get Oracle linux from ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/linux/"},"Oracle Linux download page"),", or by following the steps above."),(0,r.kt)("p",null,"Download the ",(0,r.kt)("strong",{parentName:"p"},"Oracle Database Express Edition 11g Release 2 for Linux x64")," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/xe-prior-releases-5172097.html"},"https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/xe-prior-releases-5172097.html"),". You might need to download it from the web browser since the download process require us to log in using oracle account (create one on the website if you haven't)."),(0,r.kt)("p",null,"Unzip the downloaded oracle xe installer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /home/novalagung/oracle-xe\ncd /home/novalagung/oracle-xe\ncp /path/to/file/oracle-xe-11.2.0-1.0.x86_64.rpm.zip .\nunzip oracle-xe-11.2.0-1.0.x86_64.rpm.zip\n\nsudo rpm -ivh Disk1/oracle-xe-11.2.0-1.0.x86_64.rpm\n")),(0,r.kt)("p",null,"Now the Oracle XE 11g is installed. Next we need to run the Oracle XE Configuration. In this step few prompts will appear asking certain information like port for Oracle Application Express and for database listener."),(0,r.kt)("p",null,"One default user will be created, it's ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM")," user. We'll need to put some password for this user (cannot left it empty). In this example we use ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGER")," as the password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo /etc/init.d/oracle-xe configure\n\n# Oracle Database 11g Express Edition Configuration\n# -------------------------------------------------\n# This will configure on-boot properties of Oracle Database 11g Express \n# Edition.  The following questions will determine whether the database should \n# be starting upon system boot, the ports it will use, and the passwords that \n# will be used for database accounts.  Press <Enter> to accept the defaults. \n# Ctrl-C will abort.\n# \n# Specify the HTTP port that will be used for Oracle Application Express [8080]:\n# \n# Specify a port that will be used for the database listener [1521]:\n# \n# Specify a password to be used for database accounts.  Note that the same\n# password will be used for SYS and SYSTEM.  Oracle recommends the use of \n# different passwords for each database account.  This can be done after \n# initial configuration: MANAGER\n# Confirm the password: MANAGER\n# \n# Do you want Oracle Database 11g Express Edition to be started on boot (y/n) [y]:y\n# \n# Starting Oracle Net Listener...Done\n# Configuring database...Done\n# Starting Oracle Database 11g Express Edition instance...Done\n# Installation completed successfully.\n")),(0,r.kt)("p",null,"Ok, now our Oracle XE is 100% ready. Next, we need to perform some tests, to make sure everything is working fine. We'll try to connect to the database server using default user ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGER"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sqlplus SYSTEM/MANAGER@//localhost:1521/xe\n\n# SQL*Plus: Release 11.2.0.4.0 Production on Wed Oct 3 06:48:54 2018\n# Copyright (c) 1982, 2013, Oracle.  All rights reserved.\n# \n# Connected to:\n# Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\n")),(0,r.kt)("p",null,"The result is: ",(0,r.kt)("strong",{parentName:"p"},"connected"),". Try to perform a simple query like getting the database version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SQL> SELECT * FROM V$VERSION;\n\nBANNER\n--------------------------------------------------------------------------------\nOracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\nPL/SQL Release 11.2.0.2.0 - Production\nCORE    11.2.0.2.0  Production\nTNS for Linux: Version 11.2.0.2.0 - Production\nNLSRTL Version 11.2.0.2.0 - Production\n")),(0,r.kt)("h2",{id:"2-setup-oracle-xe-database-server-using-docker"},"2. Setup Oracle XE Database Server using Docker"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This tutorial can be implemented in both Windows, Linux, or MacOS operating systems.")),(0,r.kt)("p",null,"Download the ",(0,r.kt)("strong",{parentName:"p"},"Oracle Database Express Edition 11g Release 2 for Linux x64")," from ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/xe-prior-releases-5172097.html"},"https://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/xe-prior-releases-5172097.html"),". You might need to download it from the web browser since the download process require us to log in using oracle account (create one on the website if you haven't)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"REMINDER: Even you perform this installation on Windows or MacOS, you must download the Linux x64 installer! not the windows version or the macos version.")),(0,r.kt)("p",null,"Then clone the official oracle docker images from their github."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/oracle/docker-images.git\n")),(0,r.kt)("p",null,"Move the downloaded oracle xe installer into this path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker-images/OracleDatabase/SingleInstance/dockerfiles\ncp oracle-xe-11.2.0-1.0.x86_64.rpm.zip /11.2.0.2/\n")),(0,r.kt)("p",null,"Next, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"./buildDockerImage.sh")," command with several arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-v 11.2.0.2")," to specify the oracle version (in this case it's 11.2.0.2). The choosen version must match with the installer version."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-x")," to pick the ",(0,r.kt)("strong",{parentName:"li"},"Express Edition")," image."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-i")," to skip the md5sum verification.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./buildDockerImage.sh -v 11.2.0.2 -x -i\n\n# Ignored MD5 checksum.\n# ==========================\n# DOCKER info:\n# Containers: 3\n#  Running: 0\n#  Paused: 0\n#  Stopped: 3\n# Images: 10\n# Server Version: 18.09.0\n# ...\n# \n# ==========================\n# Building image 'oracle/database:11.2.0.2-xe' ...\n# Sending build context to Docker daemon  631.8MB\n# Step 1/10 : FROM oraclelinux:7-slim\n# 7-slim: Pulling from library/oraclelinux\n# a8d84c1f755a: Pulling fs layer\n# a8d84c1f755a: Verifying Checksum\n# a8d84c1f755a: Download complete\n# ...\n# \n# Removing intermediate container 51a3bdde4e7e\n#  ---\x3e bf56ef57fe4c\n# Step 9/10 : HEALTHCHECK --interval=1m --start-period=5m    CMD \"$ORACLE_BASE/$CHECK_DB_FILE\" >/dev/null || exit 1\n#  ---\x3e Running in dcee11bca78e\n# Removing intermediate container dcee11bca78e\n#  ---\x3e 4fbcb8aec67f\n# Step 10/10 : CMD exec $ORACLE_BASE/$RUN_FILE\n#  ---\x3e Running in 253bd5706098\n# Removing intermediate container 253bd5706098\n#  ---\x3e 97fb5f2328d0\n# [Warning] One or more build-args [DB_EDITION] were not consumed\n# Successfully built 97fb5f2328d0\n# Successfully tagged oracle/database:11.2.0.2-xe\n# SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.\n# \n#   Oracle Database Docker Image for 'xe' version 11.2.0.2 is ready to be extended:\n# \n#     --\x3e oracle/database:11.2.0.2-xe\n# \n#   Build completed in 303 seconds.\n")),(0,r.kt)("p",null,"The process will take some time. In the end a new docker image called ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle/database")," will be created."),(0,r.kt)("p",null,"Next, start a new container using the ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle/database")," image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name my-oracle-db-server \\\n    -p 1521:1521 \\\n    -p 5500:5500 \\\n    -e ORACLE_SID=xe \\\n    -e ORACLE_PWD=MANAGER \\\n    -v oradata:/opt/oracle/oradata \\\n    --shm-size=2g \\\n    oracle/database:11.2.0.2-xe\n\n# ORACLE PASSWORD FOR SYS AND SYSTEM: MANAGER\n# \n# Oracle Database 11g Express Edition Configuration\n# -------------------------------------------------\n# This will configure on-boot properties of Oracle Database 11g Express\n# Edition.  The following questions will determine whether the database should\n# be starting upon system boot, the ports it will use, and the passwords that\n# will be used for database accounts.  Press <Enter> to accept the defaults.\n# Ctrl-C will abort.\n# \n# Specify the HTTP port that will be used for Oracle Application Express [8080]:\n# Specify a port that will be used for the database listener [1521]:\n# Specify a password to be used for database accounts.  Note that the same\n# password will be used for SYS and SYSTEM.  Oracle recommends the use of\n# different passwords for each database account.  This can be done after\n# initial configuration:\n# Confirm the password:\n# \n# Do you want Oracle Database 11g Express Edition to be started on boot (y/n) [y]:\n# Starting Oracle Net Listener...Done\n# Configuring database...\n# \n# ...\n# \n# #########################\n# DATABASE IS READY TO USE!\n# #########################\n# The following output is now a tail of the alert.log:\n# QMNC started with pid=24, OS id=685\n# Completed: ALTER DATABASE OPEN\n# Fri Feb 22 08:17:28 2019\n# db_recovery_file_dest_size of 10240 MB is 0.98% used. This is a\n# user-specified limit on the amount of space that will be used by this\n# database for recovery-related files, and does not reflect the amount of\n# space available in the underlying filesystem or ASM diskgroup.\n# Starting background process CJQ0\n# Fri Feb 22 08:17:28 2019\n# CJQ0 started with pid=25, OS id=699\n")),(0,r.kt)("p",null,"Few explanations about above command arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-p 1521:1521"),", export the oracle listener port."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-p 5500:5500"),", export the oem express port."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-e ORACLE_SID=xe"),", specify the oracle SID."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-e ORACLE_PWD=MANAGER"),", set the default password of ",(0,r.kt)("inlineCode",{parentName:"li"},"SYS"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"SYSTEM")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"PDB_ADMIN")," users."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"-v oradata:/opt/oracle/oradata"),", mirror the volume."),(0,r.kt)("li",{parentName:"ul"},"Flag ",(0,r.kt)("inlineCode",{parentName:"li"},"--shm-size=2g"),", allocate memory size for particular container.")),(0,r.kt)("p",null,"Ok, now lets try to connect to the database server using default user ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sqlplus SYSTEM/MANAGER@//localhost:1521/XE\n\n# SQL*Plus: Release 11.2.0.4.0 Production on Wed Oct 3 06:48:54 2018\n# Copyright (c) 1982, 2013, Oracle.  All rights reserved.\n# \n# Connected to:\n# Oracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\n")),(0,r.kt)("p",null,"The result is: ",(0,r.kt)("strong",{parentName:"p"},"connected"),". Try to perform a simple query like getting the database version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SQL> SELECT * FROM V$VERSION;\n\nBANNER\n--------------------------------------------------------------------------------\nOracle Database 11g Express Edition Release 11.2.0.2.0 - 64bit Production\nPL/SQL Release 11.2.0.2.0 - Production\nCORE    11.2.0.2.0  Production\nTNS for Linux: Version 11.2.0.2.0 - Production\nNLSRTL Version 11.2.0.2.0 - Production\n")),(0,r.kt)("p",null,"If you the container stopped, then you just need to start it. No need to create new container using same specification."))}u.isMDXComponent=!0}}]);