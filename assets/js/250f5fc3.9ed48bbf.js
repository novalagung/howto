"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),h=i,c=g["".concat(s,".").concat(h)]||g[h]||b[h]||a;return n?o.createElement(c,r(r({ref:t},u),{},{components:n})):o.createElement(c,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const a={title:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",sidebar_label:"Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",description:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",keywords:["serverless","ebook","github","pipeline","calibre"]},r=void 0,l={unversionedId:"cicd-serverless-ebook-gitbook-github-pages-actions-calibre",id:"cicd-serverless-ebook-gitbook-github-pages-actions-calibre",title:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",description:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",source:"@site/docs/cicd-serverless-ebook-gitbook-github-pages-actions-calibre.md",sourceDirName:".",slug:"/cicd-serverless-ebook-gitbook-github-pages-actions-calibre",permalink:"/cicd-serverless-ebook-gitbook-github-pages-actions-calibre",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",sidebar_label:"Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",description:"How to Setup Serverless Ebook using Gitbook CLI, Github Pages, Github Actions CI/CD, and Calibre",keywords:["serverless","ebook","github","pipeline","calibre"]},sidebar:"tutorialSidebar",previous:{title:"Create IAM User Access Credentials in AWS",permalink:"/aws-create-iam-user-access-credentials"},next:{title:"Push Docker Image to Docker Hub",permalink:"/docker-push-image-to-hub"}},s={},p=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"1.1. Gitbook CLI",id:"11-gitbook-cli",level:3},{value:"1.2. Github account",id:"12-github-account",level:3},{value:"1.3. Git client",id:"13-git-client",level:3},{value:"2. Guide",id:"2-guide",level:2},{value:"2.1. Create a Github repo",id:"21-create-a-github-repo",level:3},{value:"2.2. Create a new Gitbook project",id:"22-create-a-new-gitbook-project",level:3},{value:"2.3. Prepare ssh Github deploy key",id:"23-prepare-ssh-github-deploy-key",level:3},{value:"2.4. Create Github workflow CI/CD file for generating the web version of the ebook",id:"24-create-github-workflow-cicd-file-for-generating-the-web-version-of-the-ebook",level:3},{value:"2.5. Push project to Github repo",id:"25-push-project-to-github-repo",level:3},{value:"2.6. Modify the workflow file to be able to generate the ebook files",id:"26-modify-the-workflow-file-to-be-able-to-generate-the-ebook-files",level:3},{value:"2.7. Add custom domain",id:"27-add-custom-domain",level:3},{value:"2.8. Enable <code>SSL/HTTPS</code> to our Github Pages",id:"28-enable-sslhttps-to-our-github-pages",level:3}],u={toc:p};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial we are going to create an ebook instance using Github, then publish it to the Github pages in an automated manner (on every push to upstream) managed by Github Actions, and it will not deploy only the web version, but the ebook files as wall (in ",(0,i.kt)("inlineCode",{parentName:"p"},".pdf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".epub"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".mobi")," format)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The very example of this tutorial is ... this website \ud83d\ude0a ",(0,i.kt)("a",{parentName:"p",href:"https://devops.novalagung.com/en/"},"https://devops.novalagung.com/en/"))),(0,i.kt)("p",null,"For every incoming push to the upstream, Github Actions (CI/CD) will trigger certain processes (like compiling and generating the ebook), then the result will be pushed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch, make it publicly accessible."),(0,i.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,i.kt)("h3",{id:"11-gitbook-cli"},"1.1. Gitbook CLI"),(0,i.kt)("p",null,"Install gitbook CLI (if you haven't). Do follow the guide on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GitbookIO/gitbook-cli"},"https://github.com/GitbookIO/gitbook-cli"),"."),(0,i.kt)("h3",{id:"12-github-account"},"1.2. Github account"),(0,i.kt)("p",null,"Ensure you have a Github account."),(0,i.kt)("h3",{id:"13-git-client"},"1.3. Git client"),(0,i.kt)("p",null,"Ensure you have Git client installed in your local machine."),(0,i.kt)("h2",{id:"2-guide"},"2. Guide"),(0,i.kt)("h3",{id:"21-create-a-github-repo"},"2.1. Create a Github repo"),(0,i.kt)("p",null,"First, create a new repo in your Github account, it can be a private one or public, doesn't matter. Just for the sake of this tutorial, I am going to pick ",(0,i.kt)("inlineCode",{parentName:"p"},"softwareengineering")," as the repo name."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/diIHwxE.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - create Github repo"})),(0,i.kt)("h3",{id:"22-create-a-new-gitbook-project"},"2.2. Create a new Gitbook project"),(0,i.kt)("p",null,"Next, use ",(0,i.kt)("inlineCode",{parentName:"p"},"gitbook")," command line to initialize a new project, name it anyhing. Here I'll use ",(0,i.kt)("inlineCode",{parentName:"p"},"softwareengineering"),", the same one as the git repo name."),(0,i.kt)("p",null,"After the project setup is finished, try to test it locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gitbook init softwareengineering\ncd softwareengineering\ngitbook serve\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/99Q5kvv.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - Gitbook init project"})),(0,i.kt)("p",null,"As we can see from image above, the web version of the book is running up."),(0,i.kt)("h3",{id:"23-prepare-ssh-github-deploy-key"},"2.3. Prepare ssh Github deploy key"),(0,i.kt)("p",null,"Next, we are going to use Github Action plugin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/peaceiris/actions-gh-pages"},"peaceiris/actions-gh-pages")," to automate pushing resources from git repo server to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages"),"."),(0,i.kt)("p",null,"To make this scenario happen, first, generate new key pair using ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command below. We will use the keys as Github deploy key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""\n# You will get 2 files:\n#   gh-pages.pub (public key)\n#   gh-pages     (private key)\n')),(0,i.kt)("p",null,"The above command generates two files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages.pub")," file as the public key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages")," file as the private key")),(0,i.kt)("p",null,"Upload these two files into repo's project keys and secret menu respectively. To do that, open the repo, click ",(0,i.kt)("strong",{parentName:"p"},"Settings"),", then do follow the steps below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/t8RVwN7.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - prepare Github deploy key"})),(0,i.kt)("h3",{id:"24-create-github-workflow-cicd-file-for-generating-the-web-version-of-the-ebook"},"2.4. Create Github workflow CI/CD file for generating the web version of the ebook"),(0,i.kt)("p",null,"Now we are going to make Github able to automatically deploy the web version of the ebook on every push. And we want that to be applied into the first push as well."),(0,i.kt)("p",null,"Create a new workflow file named ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml"),", place it in ",(0,i.kt)("inlineCode",{parentName:"p"},"<yourproject>/.github/workflows"),", then fill it with the configuration below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# file ./softwareengineering/.github/workflow/deploy.yml\n\nname: 'deploy website and ebooks'\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  job_deploy_website:\n    name: 'deploy website'\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v1\n    - uses: actions/setup-node@v1\n      with:\n        node-version: '10.x'\n    - name: 'Installing gitbook cli'\n      run: npm install -g gitbook-cli\n    - name: 'Generating distributable files'\n      run: |\n        gitbook install\n        gitbook build\n    - uses: peaceiris/actions-gh-pages@v2.5.0\n      env:\n        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}\n        PUBLISH_BRANCH: gh-pages\n        PUBLISH_DIR: ./_book\n")),(0,i.kt)("p",null,"In summary, the workflow above will do these things sequentially:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trigger this workflow on every push happens on ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"nodejs"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"gitbook")," CLI."),(0,i.kt)("li",{parentName:"ul"},"Build the project."),(0,i.kt)("li",{parentName:"ul"},"use ",(0,i.kt)("inlineCode",{parentName:"li"},"peaceiris/actions-gh-pages")," plugin to deploy the built result to ",(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch. The Github deploy key that we just uploaded is used by this plugin.")),(0,i.kt)("h3",{id:"25-push-project-to-github-repo"},"2.5. Push project to Github repo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd softwareengineering\n\n# ignore certain directory\ntouch .gitignore\necho '_book' >> .gitignore\n\n# init git repo\ngit init\ngit add .\ngit commit -m \"init\"\ngit remote add origin git@github.com:novalagung/softwareengineering.git\n\n# push\ngit push origin master\n")),(0,i.kt)("p",null,"Navigate to browser, open your Github repo, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"),", watch a workflow process that currently is running."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/SZfwqZs.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - Github workflow"})),(0,i.kt)("p",null,"After the workflow is complete, then try to open in the browser the following URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# https://<github-username>.github.io/<repo-name>\nhttps://novalagung.github.io/softwareengineering/\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/HzCygaX.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - open web version of the book"})),(0,i.kt)("p",null,"If you are still not sure about what is the valid URL, open ",(0,i.kt)("strong",{parentName:"p"},"Settings")," menu of your Github repo then scrolls down a little bit until ",(0,i.kt)("strong",{parentName:"p"},"Github Pages")," section appears. The Github Pages URL will appear there."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/eD5BmPv.jpg",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - Github pages url"})),(0,i.kt)("h3",{id:"26-modify-the-workflow-file-to-be-able-to-generate-the-ebook-files"},"2.6. Modify the workflow file to be able to generate the ebook files"),(0,i.kt)("p",null,"Ok, now we will modify the workflow so it will be able to generate the ebook files (",(0,i.kt)("inlineCode",{parentName:"p"},".pdf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".epub"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".mobi"),"), not just the web version."),(0,i.kt)("p",null,"Do open the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file, add a new job called ",(0,i.kt)("inlineCode",{parentName:"p"},"job_deploy_ebooks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# file ./softwareengineering/.github/workflow/deploy.yml\n\nname: 'deploy website and ebooks'\n\non:\n  push:\n    branches:\n      - master\n\nenv:\n  ebook_name: 'softwareengineeringtutorial'\n\njobs:\n  job_deploy_website:\n    # ...\n  job_deploy_ebooks:\n    name: 'deploy ebooks'\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v1\n    - uses: actions/setup-node@v1\n      with:\n        node-version: '10.x'\n    - name: 'Installing gitbook cli'\n      run: npm install -g gitbook-cli\n    - name: 'Installing calibre'\n      run: |\n        sudo -v\n        wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sudo sh /dev/stdin\n    - name: 'Preparing for ebooks generations'\n      run: |\n        gitbook install\n        mkdir _book\n    - name: 'Generating ebook in pdf'\n      run: gitbook pdf ./ ./_book/${{ env.ebook_name }}.pdf\n    - name: 'Generating ebook in epub'\n      run: gitbook epub ./ ./_book/${{ env.ebook_name }}.epub\n    - name: 'Generating ebook in mobi'\n      run: gitbook mobi ./ ./_book/${{ env.ebook_name }}.mobi\n    - uses: peaceiris/actions-gh-pages@v2.5.0\n      env:\n        ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}\n        PUBLISH_BRANCH: ebooks\n        PUBLISH_DIR: ./_book\n")),(0,i.kt)("p",null,"The previous ",(0,i.kt)("inlineCode",{parentName:"p"},"job_deploy_website")," is responsible for generating the web-based version of the ebook. This newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"job_deploy_ebooks")," has different purpose, which is to generate the files version of the ebook (",(0,i.kt)("inlineCode",{parentName:"p"},".pdf"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".epub"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".mobi"),"). The generated files later will be pushed to a branch named ",(0,i.kt)("inlineCode",{parentName:"p"},"ebooks"),". The processes will be done by ",(0,i.kt)("strong",{parentName:"p"},"Calibre"),"."),(0,i.kt)("p",null,"Ok, now let's push recent changes into upstream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "update"\ngit push origin master\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/iXd7bnr.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - workflow to generate ebook files"})),(0,i.kt)("p",null,"After the process complete, the ebooks will be available for download in these following URLs. Please adjust it to follow your Github profile and repo name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/novalagung/softwareengineering/raw/ebooks/softwareengineeringtutorial.pdf\nhttps://github.com/novalagung/softwareengineering/raw/ebooks/softwareengineeringtutorial.epub\nhttps://github.com/novalagung/softwareengineering/raw/ebooks/softwareengineeringtutorial.mobi\n")),(0,i.kt)("p",null,"FYI! Since the ebook files are accessible through Github direct link, this means the visibility of the repo needs to be public (not private). If you want the repo to be in private but keep the files accessible, then do push the files into ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."),(0,i.kt)("h3",{id:"27-add-custom-domain"},"2.7. Add custom domain"),(0,i.kt)("p",null,"This one is optional, but probably important. We are going to apply custom domain to our Github Page."),(0,i.kt)("p",null,"Let's do it. Navigate to your domain control panel, add a new ",(0,i.kt)("strong",{parentName:"p"},"CNAME")," record that points to your Github page domain ",(0,i.kt)("inlineCode",{parentName:"p"},"<github-username>.github.io"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/a1vF2Xk.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - custom domain Github pages"})),(0,i.kt)("p",null,"FYI, In this example, we pick subdomain ",(0,i.kt)("inlineCode",{parentName:"p"},"softwareengineering.novalagung.com"),". So for every incoming request to this domain, it will be directed to our Github Pages."),(0,i.kt)("p",null,"Next, in the Gitbook project, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"CNAME")," then fill it with the domain/subdomain URL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'softwareengineering.novalagung.com' > CNAME\n")),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"CNAME")," file needs to be copied into the ",(0,i.kt)("inlineCode",{parentName:"p"},"_book")," directory during the build process, it is because that folder is the one that will be pushed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch."),(0,i.kt)("p",null,"Ok, now let's put a little addition in the workflow file. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Generating distributable files")," block, add the copy statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  job_deploy_website:\n    # ...\n    - name: 'Generating distributable files'\n      run: |\n        gitbook install\n        gitbook build\n        cp ./CNAME _book/CNAME\n")),(0,i.kt)("p",null,"Now push the update into upstream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "update"\ngit push origin master\n')),(0,i.kt)("p",null,"Watch the workflow progress in the repo ",(0,i.kt)("strong",{parentName:"p"},"Actions")," menu. After it is finished, try to test the custom domain."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/9GBMruL.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - custom domain"})),(0,i.kt)("h3",{id:"28-enable-sslhttps-to-our-github-pages"},"2.8. Enable ",(0,i.kt)("inlineCode",{parentName:"h3"},"SSL/HTTPS")," to our Github Pages"),(0,i.kt)("p",null,"Lastly, before we end this tutorial, let's enable ",(0,i.kt)("inlineCode",{parentName:"p"},"SSL/HTTPS")," into our page. No need to generate a SSL certificate file and etc, since Github will handle the setup. We just need to navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," menu on the the repo, then scroll down a little bit until ",(0,i.kt)("strong",{parentName:"p"},"GitHub Pages")," section appears. Do check the ",(0,i.kt)("strong",{parentName:"p"},"Enforce HTTPS")," option. After that, wait for a few minutes, then try the custom domain again."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/r5ca0Qw.png",alt:"Serverless Ebook using Gitbook, Github Pages, Github Actions, and Calibre - enforce https to Github pages"})),(0,i.kt)("p",null,"Have a go! ",(0,i.kt)("a",{parentName:"p",href:"https://softwareengineering.novalagung.com"},"https://softwareengineering.novalagung.com")))}b.isMDXComponent=!0}}]);