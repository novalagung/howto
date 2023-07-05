"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9076:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function a(e){return n.createElement("iframe",{src:"https://novalagung.substack.com/embed",width:"100%",height:"320",style:{border:"1px solid #EEE",background:"white"},frameborder:"0",scrolling:"no"})}},5730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(9076);const l={title:"Setup WireGuard VPN Server",sidebar_label:"Setup WireGuard VPN Server",description:"How to set up WireGuard VPN Server on Linux using wireguard-install or wireguard docker image",keywords:["wireguard","vpn","docker","linux","amazon linux","aws","digital ocean"]},o=void 0,u={unversionedId:"setup-wireguard-vpn-server",id:"setup-wireguard-vpn-server",title:"Setup WireGuard VPN Server",description:"How to set up WireGuard VPN Server on Linux using wireguard-install or wireguard docker image",source:"@site/docs/setup-wireguard-vpn-server.md",sourceDirName:".",slug:"/setup-wireguard-vpn-server",permalink:"/setup-wireguard-vpn-server",draft:!1,tags:[],version:"current",frontMatter:{title:"Setup WireGuard VPN Server",sidebar_label:"Setup WireGuard VPN Server",description:"How to set up WireGuard VPN Server on Linux using wireguard-install or wireguard docker image",keywords:["wireguard","vpn","docker","linux","amazon linux","aws","digital ocean"]},sidebar:"tutorialSidebar",previous:{title:"Homepage",permalink:"/"}},s={},p=[{value:"1. WireGuard in a nutshell",id:"1-wireguard-in-a-nutshell",level:2},{value:"2. Client application",id:"2-client-application",level:2},{value:"3. WireGuard server set up",id:"3-wireguard-server-set-up",level:2},{value:"\u25c9 Using <code>wireguard-install</code>",id:"-using-wireguard-install",level:3},{value:"Using <code>linuxserver/wireguard</code> Docker Image",id:"using-linuxserverwireguard-docker-image",level:3},{value:"\u25c9 Whitelist the UDP port",id:"-whitelist-the-udp-port",level:3},{value:"4. Connect to WireGuard <code>linuxserver/wireguard</code> Docker Image",id:"4-connect-to-wireguard-linuxserverwireguard-docker-image",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several way to install WireGuard on Linux, and two of them are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/angristan/wireguard-install"},"wireguard-install")),(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/linuxserver/wireguard"},"linuxserver/wireguard")," Docker Image")),(0,a.kt)("p",null,"We are going to learn both approach in this post."),(0,a.kt)("h2",{id:"1-wireguard-in-a-nutshell"},"1. WireGuard in a nutshell"),(0,a.kt)("p",null,"WireGuard is an open-source communication protocol that implements encrypted virtual private networks (VPNs) over UDP. It is very easy to use and secure. WireGuard aims to have better performance compared to IPSec and OpenVPN."),(0,a.kt)("h2",{id:"2-client-application"},"2. Client application"),(0,a.kt)("p",null,"WireGuard do supports many operating system. Download the installer via the following link:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"https://www.wireguard.com/install/"))),(0,a.kt)("h2",{id:"3-wireguard-server-set-up"},"3. WireGuard server set up"),(0,a.kt)("h3",{id:"-using-wireguard-install"},"\u25c9 Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"wireguard-install")),(0,a.kt)("p",null,"The easiest way to install WireGuard server is via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angristan/wireguard-install"},"wireguard-install"),". They provide an executable shell script to automate the installation on several linux distro, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AlmaLinux"),(0,a.kt)("li",{parentName:"ul"},"Arch Linux system"),(0,a.kt)("li",{parentName:"ul"},"CentOS"),(0,a.kt)("li",{parentName:"ul"},"Debian"),(0,a.kt)("li",{parentName:"ul"},"Fedora"),(0,a.kt)("li",{parentName:"ul"},"Oracle"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu")),(0,a.kt)("p",null,"Ok, let us get to the point. To start the installation, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh\nchmod +x wireguard-install.sh\n./wireguard-install.sh\n")),(0,a.kt)("p",null,"You will be asked to confirm several configuration. The pre-defined value for each prompt should be sufficient, except for the ",(0,a.kt)("inlineCode",{parentName:"p"},"IPv4 or IPv6 public address"),", for that specific prompt please ensure to have correct public IP address entered."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you are using AWS or other cloud provider, there is a chance that the default IP address value is not the public IP, but the private IP. So please keep in mind, always use the public IP there.")),(0,a.kt)("p",null,"Then the response below will appear:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Welcome to the WireGuard installer!\nThe git repository is available at: https://github.com/angristan/wireguard-install\n\nI need to ask you a few questions before starting the setup.\nYou can keep the default options and just press enter if you are ok with them.\n\nIPv4 or IPv6 public address: 11.234.5.181\nPublic interface: eth0\nWireGuard interface name: wg0\nServer WireGuard IPv4: 10.66.66.1\nServer WireGuard IPv6: fd42:42:42::1\nServer WireGuard port [1-65535]: 51820\nFirst DNS resolver to use for the clients: 1.1.1.1\nSecond DNS resolver to use for the clients (optional): 1.0.0.1\n\nOkay, that was all I needed. We are ready to setup your WireGuard server now.\nYou will be able to generate a client at the end of the installation.\n\nPress any key to continue...\n")),(0,a.kt)("p",null,"Press enter or any key to continue the installation process. Next you will be prompted to enter the several configuration for the client."),(0,a.kt)("p",null,"Feel free to pick any name for ",(0,a.kt)("inlineCode",{parentName:"p"},"Client name")," and let the other fields to be filled with the predefined value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Client configuration\n\nThe client name must consist of alphanumeric character(s).\nIt may also include underscores or dashes and can't exceed 15 chars.\n\nClient name: noval\nClient WireGuard IPv4: 10.66.66.2\nClient WireGuard IPv6: fd42:42:42::2\n")),(0,a.kt)("p",null,"Keep pressing enter until you see the output in below. At this point the set up is pretty much completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Here is your client config file as a QR Code:\n\n...\n\nYour client config file is in /home/ubuntu/wg0-client-noval.conf\nIf you want to add more clients, you simply need to run this script another time!\n\nWireGuard is running.\nYou can check the status of WireGuard with: systemctl status wg-quick@wg0\n\nIf you don't have internet connectivity from your client, try to reboot the server.\n")),(0,a.kt)("p",null,"From that output you can tell where the client config file is located, it is in ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/ubuntu/wg0-client-noval.conf"),". Save the content on that file somewhere, it will be used on the client side to connect to the WireGuard server."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angristan/wireguard-install"},"https://github.com/angristan/wireguard-install"))),(0,a.kt)("h3",{id:"using-linuxserverwireguard-docker-image"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"linuxserver/wireguard")," Docker Image"),(0,a.kt)("p",null,"The first step is to install docker engine. Then create the VPN server by starting a new container using ",(0,a.kt)("inlineCode",{parentName:"p"},"linuxserver/wireguard:latest")," using the following command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For plain Docker:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n  --name=wireguard \\\n  --cap-add=NET_ADMIN \\\n  --cap-add=SYS_MODULE \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Asia/Jakarta \\\n  -e SERVERURL=123.456.78.9 \\\n  -e SERVERPORT=51820 \\\n  -e PEERS=1 \\\n  -e PEERDNS=1.1.1.1 \\\n  -e INTERNAL_SUBNET=10.13.13.0 \\\n  -e ALLOWEDIPS=0.0.0.0/0,::/0 \\\n  -e PERSISTENTKEEPALIVE_PEERS=all \\\n  -e LOG_CONFS=true \\\n  -p 51820:51820/udp \\\n  -v /home/ec2-user/workspace/wireguard/config:/config \\\n  -v /lib/modules:/lib/modules \\\n  --sysctl="net.ipv4.conf.all.src_valid_mark=1" \\\n  --restart unless-stopped \\\n  lscr.io/linuxserver/wireguard:latest\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.7'\nservices:\n  wireguard:\n    image: lscr.io/linuxserver/wireguard:latest\n    container_name: wireguard\n    cap_add:\n      - NET_ADMIN\n      - SYS_MODULE\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Asia/Jakarta\n      - SERVERURL=123.456.78.9\n      - SERVERPORT=51820\n      - PEERS=1\n      - PEERDNS=1.1.1.1\n      - INTERNAL_SUBNET=10.13.13.0\n      - ALLOWEDIPS=0.0.0.0/0,::/0\n      - PERSISTENTKEEPALIVE_PEERS=all\n      - LOG_CONFS=true\n    volumes:\n      - /home/ec2-user/workspace/wireguard/config:/config\n      - /lib/modules:/lib/modules\n    ports:\n      - 51820:51820/udp\n    sysctls:\n      - net.ipv4.conf.all.src_valid_mark=1\n    restart: always\n")))),(0,a.kt)("p",null,"Ensure to adjust the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"env var")," below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUID")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"PGID")," \u2192 use command ",(0,a.kt)("inlineCode",{parentName:"li"},"id <your-linux-username>")," to get the correct number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TZ")," \u2192 specify the timezone of your location. example: ",(0,a.kt)("inlineCode",{parentName:"li"},"Asia/Jakarta")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Etc/UTC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVERURL")," \u2192 public IP of your linux instance")),(0,a.kt)("p",null,"Not to forget, map the ",(0,a.kt)("inlineCode",{parentName:"p"},"/config")," path within container to correct path in host. In the example I use ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/ec2-user/workspace/wireguard/config:/config"),"."),(0,a.kt)("p",null,"Create the container, wait for a few seconds, then check the container logs to see the result. Then go to the path where it's pointing to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/config"),". Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"peers")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/ec2-user/workspace/wireguard/config\ncd peer1\ncat peer1.conf\n")),(0,a.kt)("p",null,"Save the content on that ",(0,a.kt)("inlineCode",{parentName:"p"},"peer1.conf")," file somewhere, it will be used on the client side to connect to the WireGuard server."),(0,a.kt)("h3",{id:"-whitelist-the-udp-port"},"\u25c9 Whitelist the UDP port"),(0,a.kt)("p",null,"If you are using cloud provider such as AWS where by default not all ports are public, an additional is required, which is whitelisting the inbound traffict directed to the WireGuard port (in this example, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"51820"),"). Ensure to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"UDP")," protocol because WireGuard uses ",(0,a.kt)("inlineCode",{parentName:"p"},"UDP"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WireGuard VPN connect",src:r(3481).Z,width:"1250",height:"222"})),(0,a.kt)("h2",{id:"4-connect-to-wireguard-linuxserverwireguard-docker-image"},"4. Connect to WireGuard ",(0,a.kt)("inlineCode",{parentName:"h2"},"linuxserver/wireguard")," Docker Image"),(0,a.kt)("p",null,"The content of the ",(0,a.kt)("inlineCode",{parentName:"p"},".conf")," file is something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[Interface]\nPrivateKey = YDqQfiR6+VdaS3xqgSWW5CHAxhH0=\nAddress = 10.66.66.1/32,fd42:42:42::1/128\nDNS = 1.1.1.1,1.0.0.1\n\n[Peer]\nPublicKey = ByhoL4uTt2QzQb3dsadwereQzQbufXw=\nPresharedKey = aJDPFsuKvrE8TQM3RaQykrNP9os3ms=\nEndpoint = 123.456.78.9:50194\nAllowedIPs = 0.0.0.0/0,::/0\n")),(0,a.kt)("p",null,"Now open up the WireGuard client application, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add tunnel"),", then locate the ",(0,a.kt)("inlineCode",{parentName:"p"},".conf")," file. Next, click ",(0,a.kt)("inlineCode",{parentName:"p"},"activate")," to start the VPN peering connection."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WireGuard VPN connect",src:r(5910).Z,width:"684",height:"543"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/linuxserver/docker-wireguard"},"https://github.com/linuxserver/docker-wireguard"))),(0,a.kt)("hr",null),(0,a.kt)(i.Z,{mdxType:"Substack"}))}d.isMDXComponent=!0},5910:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setup-wireguard-vpn-server-1-94ca952e02bad1f466db4ad039b70407.png"},3481:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/setup-wireguard-vpn-server-2-ce6086822e74ec119b413d567d50ef12.png"}}]);