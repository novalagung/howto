"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[29],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={title:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",sidebar_label:"Deploy App to Minikube Cluster using Deployment controller, Service, and HPA",description:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",keywords:["k8s","kubernetes","minikube","pod autoscaler","microservices"],displayed_sidebar:"manualSidebar"},l=void 0,r={unversionedId:"kubernetes-minikube-deployment-service-horizontal-autoscale",id:"kubernetes-minikube-deployment-service-horizontal-autoscale",title:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",description:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",source:"@site/docs/kubernetes-minikube-deployment-service-horizontal-autoscale.md",sourceDirName:".",slug:"/kubernetes-minikube-deployment-service-horizontal-autoscale",permalink:"/kubernetes-minikube-deployment-service-horizontal-autoscale",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",sidebar_label:"Deploy App to Minikube Cluster using Deployment controller, Service, and HPA",description:"How to Deploy App to Minikube Cluster using Deployment controller, Service, and Horizontal Pod Autoscaler",keywords:["k8s","kubernetes","minikube","pod autoscaler","microservices"],displayed_sidebar:"manualSidebar"},sidebar:"manualSidebar",previous:{title:"Restrict App Access using Cloudflare Zero Trust and Terraform",permalink:"/terraform-cloudflare-zero-trust"},next:{title:"Setup Oracle Instant Client",permalink:"/setup-oracle-instantclient"}},s={},p=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"1.1. Docker engine",id:"11-docker-engine",level:3},{value:"1.2. Minikube",id:"12-minikube",level:3},{value:"1.3. Kubernetes CLI tool",id:"13-kubernetes-cli-tool",level:3},{value:"1.4. The <code>hey</code> tool (an HTTP load generator)",id:"14-the-hey-tool-an-http-load-generator",level:3},{value:"2. Preparation",id:"2-preparation",level:2},{value:"2.1. For Windows user only, run PowerShell with admin privilege",id:"21-for-windows-user-only-run-powershell-with-admin-privilege",level:3},{value:"2.2. Create the Kubernetes objects configuration file (in <code>.yaml</code> format)",id:"22-create-the-kubernetes-objects-configuration-file-in-yaml-format",level:3},{value:"3. Object Definitions",id:"3-object-definitions",level:2},{value:"3.1. Deployment Object",id:"31-deployment-object",level:3},{value:"3.1. Testing one of the pod",id:"31-testing-one-of-the-pod",level:3},{value:"3.2. Apply changes on the deployment object",id:"32-apply-changes-on-the-deployment-object",level:3},{value:"3.2. Service Object",id:"32-service-object",level:3},{value:"3.3. Horizontal Pod Auto Scaler (HPA) Object",id:"33-horizontal-pod-auto-scaler-hpa-object",level:3},{value:"3.3.1. Stress test on Horizontal Pod Auto scaler",id:"331-stress-test-on-horizontal-pod-auto-scaler",level:3}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this post, we are going to learn about how to deploy a containerized app into the Kubernetes (minikube) cluster, enable the horizontal autoscaling on it, and create a service that makes the application accessible from outside the cluster."),(0,a.kt)("p",null,"The application that we are going to use on the tutorial is a simple hello world app written in Go. The app is dockerized and the image is available on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/novalagung/hello-world"},"Docker Hub"),"."),(0,a.kt)("p",null,"You can also use your own app, make sure it is pushed to Docker Hub."),(0,a.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,a.kt)("h3",{id:"11-docker-engine"},"1.1. Docker engine"),(0,a.kt)("p",null,"Ensure the Docker engine is running. If you haven't installed it, then do install it first."),(0,a.kt)("h3",{id:"12-minikube"},"1.2. Minikube"),(0,a.kt)("p",null,"Ensure the Minikube is running. Run ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube start")," command on PowerShell (opened with an administrator privilege). If you haven't installed it, then do install it first."),(0,a.kt)("h3",{id:"13-kubernetes-cli-tool"},"1.3. Kubernetes CLI tool"),(0,a.kt)("p",null,"Ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command is available. If you haven't installed it, then do install it first."),(0,a.kt)("h3",{id:"14-the-hey-tool-an-http-load-generator"},"1.4. The ",(0,a.kt)("inlineCode",{parentName:"h3"},"hey")," tool (an HTTP load generator)"),(0,a.kt)("p",null,"Install this tool in your local machine ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rakyll/hey"},"https://github.com/rakyll/hey"),". It's similar to the Apache Benchmark tool. We are going to use this to perform the stress test to our app to check whether the auto-scaling capability is working or not."),(0,a.kt)("h2",{id:"2-preparation"},"2. Preparation"),(0,a.kt)("h3",{id:"21-for-windows-user-only-run-powershell-with-admin-privilege"},"2.1. For Windows user only, run PowerShell with admin privilege"),(0,a.kt)("p",null,"CMD won't be helpful here. Run the PowerShell as an administrator."),(0,a.kt)("h3",{id:"22-create-the-kubernetes-objects-configuration-file-in-yaml-format"},"2.2. Create the Kubernetes objects configuration file (in ",(0,a.kt)("inlineCode",{parentName:"h3"},".yaml")," format)"),(0,a.kt)("p",null,"We are going to create three Kubernetes objects: the deployment, horizontal pod auto scaler, and service. But to make things easier, we will do the creation by using the config file."),(0,a.kt)("p",null,"So the three objects mentioned above will be defined in a ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file. One object usually represented by one config file, however, in this tutorial, we will write all configs in a single file."),(0,a.kt)("p",null,"Now create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.yaml")," (or use another name, it is fine). Open the file using your favorite editor. Next, we shall begin the config definition."),(0,a.kt)("h2",{id:"3-object-definitions"},"3. Object Definitions"),(0,a.kt)("h3",{id:"31-deployment-object"},"3.1. Deployment Object"),(0,a.kt)("p",null,"Deployment is a controller used to manage both pod and replica sets. In this section, we are going to create the object."),(0,a.kt)("p",null,"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.yaml"),", write the following config below. Each part of the script has some remark that explains what it does."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n# there is a lot of APIs available in Kubernetes (try `kubectl api-versions` to see all of it).\n# for this block of deployment code, we will use `apps/v1`.\napiVersion: apps/v1\n\n# book this block of YAML for Deployment.\nkind: Deployment\n\n# name it `my-app-deployment`.\nmetadata:\n  name: my-app-deployment\n\n# specification of the desired behavior of the Deployment.\nspec:\n\n  # selector.matchLabels basically used to determine which pods are managed by the deployment.\n  # this deployment will manage all pods that have labels matching the selector.\n  selector:\n    matchLabels:\n      app: my-app\n\n  # template describes the pods that will be created.\n  template:\n\n    # put a label on the pods as `my-app`.\n    metadata:\n      labels:\n        app: my-app\n\n    # specification of the desired behavior of the `my-app` pod.\n    spec:\n\n      # list of containers belonging to the `my-app` pod.\n      containers:\n\n          # allocate a container, name it as `hello-world`.\n        - name: hello-world\n\n          # the container image is on docker hub repo `novalagung/hello-world`.\n          # if the particular image is not available locally, then it\'ll be pulled first.\n          image: novalagung/hello-world\n\n          # set the env vars during container build process.\n          # for more details take a look at\n          # https://hub.docker.com/repository/docker/novalagung/hello-world.\n          env:\n            - name: PORT\n              value: "8081"\n            - name: INSTANCE_ID\n              valueFrom:\n                fieldRef:\n                  fieldPath: metadata.name\n\n          # this pod only have one container (`hello-world`),\n          # and what this container does is start a webserver that listens to port `8081`.\n          # the port need to be exposed,\n          # to make it accessible between the pods within the cluster.\n          ports:\n            - containerPort: 8081\n\n          # compute resources required by this container `hello-world`.\n          resources:\n            limits:\n              cpu: 250m\n              memory: 32Mi\n')),(0,a.kt)("p",null,"In summary, the above deployment config will do these things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a deployment object called ",(0,a.kt)("inlineCode",{parentName:"li"},"my-app-deployment"),"."),(0,a.kt)("li",{parentName:"ul"},"The pod spec (within deployment object) defined with only one container."),(0,a.kt)("li",{parentName:"ul"},"The container is ",(0,a.kt)("inlineCode",{parentName:"li"},"hello-world")," and the image will be pulled from Docker Hub."),(0,a.kt)("li",{parentName:"ul"},"During the container build, port and instance ID specified. The port specifically used by the webserver within the container."),(0,a.kt)("li",{parentName:"ul"},"The web server listens to the port ",(0,a.kt)("inlineCode",{parentName:"li"},"8081")," and it is exposed. Meaning we will be able to access the web server from outside the particular port but within the cluster.")),(0,a.kt)("p",null,"Now, apply the config using the command below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# apply the config\nkubectl apply -f k8s.yaml\n\n# show all deployments\nkubectl get deployments\n\n# show all pods\nkubectl get pods\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(7067).Z,width:"577",height:"260"})),(0,a.kt)("h3",{id:"31-testing-one-of-the-pod"},"3.1. Testing one of the pod"),(0,a.kt)("p",null,"As we can see from the image above, the deployment is working and two pods are currently running."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Two pods automatically created. This is because we don't specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.replicas")," value. If we specify some value like ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),", then there will be 4 pods running. The default replicas value is ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),".")),(0,a.kt)("p",null,"Let's do some testing here. We will try to connect into one of the pods and then check whether the app is listening to port ",(0,a.kt)("inlineCode",{parentName:"p"},"8081")," or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# show all pods\nkubectl get pods\n\n# connect to specific pod\nkubectl exec -it <pod-name> -- /bin/sh\n\n# check for app that listen to port 8081\nnetstat -tulpn | grep :8081\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(1040).Z,width:"734",height:"199"})),(0,a.kt)("p",null,"It's clear from the image above that the app is running on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,a.kt)("h3",{id:"32-apply-changes-on-the-deployment-object"},"3.2. Apply changes on the deployment object"),(0,a.kt)("p",null,"Other than deployment, there are some other controllers available in k8s. What makes deployment controller special is whenever there is a change happen in the pod config within deployment resource, when we apply it then the pods will be updated by the controller seamlessly."),(0,a.kt)("p",null,"Ok, now let's prove the above statement by doing some changes on the deployment config. Do the following changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"containers.env.value")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," env to ",(0,a.kt)("inlineCode",{parentName:"li"},"8080"),". Previously it is ",(0,a.kt)("inlineCode",{parentName:"li"},"8081"),"."),(0,a.kt)("li",{parentName:"ul"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},"containers.ports.containerPort")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"8080"),". Previously it is ",(0,a.kt)("inlineCode",{parentName:"li"},"8081"),".")),(0,a.kt)("p",null,"Below is how the config will look like after the changes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app-deployment\nspec:\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n        - name: hello-world\n          image: novalagung/hello-world\n          env:\n            - name: PORT\n              value: "8080" # <--- change from 8081 to 8080\n            - name: INSTANCE_ID\n              valueFrom:\n                fieldRef:\n                  fieldPath: metadata.name\n          ports:\n            - containerPort: 8080 # <--- change from 8081 to 8080\n          resources:\n            limits:\n              cpu: 250m\n              memory: 32Mi\n')),(0,a.kt)("p",null,"Next, re-apply this config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# apply the config\nkubectl apply -f k8s.yaml\n\n# show all pods\nkubectl get pods\n\n# connect to specific pod\nkubectl exec -it <pod-name> -- /bin/sh\n\n# check for the app that listens to port 8080\nnetstat -tulpn | grep :8080\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(1374).Z,width:"713",height:"334"})),(0,a.kt)("p",null,"See, the changes that we made on the pod are applied in a controlled way. And the web server within the newly created pod is listening to port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),". This is nice!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips! Use the command below to see the error log on certain pods. Probably useful is something wrong going on, like the webserver not starting, etc.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe pod <pod-name>"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod-name>"))),(0,a.kt)("h3",{id:"32-service-object"},"3.2. Service Object"),(0,a.kt)("p",null,"In this section, we are going to create a new service. This service shall enable access between pod within the cluster, and also enable access for incoming request from external into the cluster pod."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort")," service type can be used in our situation as well, not just ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," type")),(0,a.kt)("p",null,"Let's append below config into the ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'---\n# pick API version `v1` for service.\napiVersion: v1\n\n# book this block of YAML for Service.\nkind: Service\n\n# name it `my-service`.\nmetadata:\n  name: my-service\n\n# spec of the desired behavior of service.\nspec:\n\n  # pick LoadBalancer as the type of the service.\n  # a LoadBalancer service is the standard way to expose a service to the internet.\n  # this will spin up a Network Load Balancer that will give you a single IP address\n  # that will forward all traffic to your service.\n  #\n  # on cloud provider this will generate an external IP for public access.\n  # in local usage (e.g. minikube), the service will be accessible through minikube exposed IP.\n  type: LoadBalancer\n\n  # route service traffic to pods with label keys and values matching this selector.\n  selector:\n    app: my-app\n\n  # the list of ports that are exposed by this service.\n  ports:\n\n      # expose the service to outside of cluster, make it publicily accessible\n      # via external IP or via cluster public IP (e.g minikube IP) using nodePort below.\n      #\n      # to get the exposed URL (with IP): `minikube service my-service --url`.\n      #   => http://<cluster-public-ip>:<nodePort>\n    - nodePort: 32199\n\n      # the incoming external request into nodePort will be directed towards port 80 of\n      # this particular service, within the cluster.\n      #\n      # to get the exposed URL (with IP): `kubectl describe service my-service | findstr "IP"`.\n      #   => http://<service-ip>:<port>\n      port: 80\n\n      # then from the service, it\'ll be directed to the available pods\n      # (in round-robin style), to pod IP with port 8080.\n      #   => http://<pod-ip>:<targetPort>\n      targetPort: 8080\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," is chosen as the type of the service. Load balancer service will accept requests from ",(0,a.kt)("inlineCode",{parentName:"p"},"<publicIP>:<nodePort>")," and direct it to port ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," in the service. And then the request on the port ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," will be directed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<pod>:<targetPort>")," in round-robin style (since it's load balancer after all)."),(0,a.kt)("p",null,"One important note here, since our cluster is within the Minikube environment, so the public IP here refers to the public IP of Minikube. To get the Minikube IP, use command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# show minikube public IP\nminikube ip\n")),(0,a.kt)("p",null,"Ok, let's apply our new ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.yaml")," file and test the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# apply the config\nkubectl apply -f k8s.yaml\n\n# show all services\nkubectl get services\n\n# show all pods\nkubectl get pods\n\n# test app using curl\ncurl <minikubeIP>:<nodePort>\ncurl <minikubeIP>:32199\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(4290).Z,width:"687",height:"459"})),(0,a.kt)("p",null,"As we can see from the image above, we did dispatch multiple HTTP requests to the service. The result from the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," is different from one another, this is because the service will direct incoming request into available pods in round-robin style (like what load balancer usually do)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tips! Rather than find the Service URL using ",(0,a.kt)("inlineCode",{parentName:"p"},"minikube ip")," and then concat it with node port from config, use command below:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"minikube service <service-name> --url"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"minikube service my-service --url"))),(0,a.kt)("h3",{id:"33-horizontal-pod-auto-scaler-hpa-object"},"3.3. Horizontal Pod Auto Scaler (HPA) Object"),(0,a.kt)("p",null,"In this section, we are going to make our pods (within deployment object) scalable in an automated manner. So in case, there is a spike in the total number of users that currently accessing the app, then we shall not be worried."),(0,a.kt)("p",null,"One way to make the pod scaled automatically is by adding HPA or Horizontal Pod Auto Scaler. The Horizontal Pod Autoscaler automatically scales the number of pods in a replication controller, deployment, replica set or stateful set based on observed CPU utilization (or, with custom metrics support, on some other application-provided metrics). "),(0,a.kt)("p",null,"Do append below configuration into ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# pick API version `autoscaling/v2beta2` for auto scaler.\napiVersion: autoscaling/v2beta2\n\n# book this block of yaml for HPA (HorizontalPodAutoscaler).\nkind: HorizontalPodAutoscaler\n\n# name it `my-auto-scaler`.\nmetadata:\n  name: my-auto-scaler\n\n# spec of the desired behavior of the auto scaler.\nspec:\n\n  # min replica allowed.\n  minReplicas: 3\n\n  # max replica allowed.\n  maxReplicas: 10\n\n  # the deployment that will be scalled is `my-app-deployment`.\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: my-app-deployment\n\n  # metrics contains the specifications for which to use to calculate the desired\n  # replica count (the maximum replica count across all metrics).\n  # the desired replica count is calculated multiplying the ratio between the\n  # target value and the current value by the current number of pods.\n  metrics:\n\n      # resource refers to a resource metric known to Kubernetes describing each pod\n      # in the current scale target (e.g. CPU or memory).\n      # in below we define the scaling criteria as, if CPU utilization is changed between\n      # the amount of 50% utilization, then scalling process shall happen.\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 50\n")),(0,a.kt)("p",null,"The remarks on each part of the config above are quite clear. In summary, an HPA will be created attached to ",(0,a.kt)("inlineCode",{parentName:"p"},"my-app-deployment"),", numbers on the replication rules are defined, with scaling criteria is focusing on CPU utilization when average utilization is between 50%."),(0,a.kt)("p",null,"Ok now let's re-apply our HPA."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# apply the config\nkubectl apply -f k8s.yaml\n\n# show all HPA\nkubectl get hpa\n\n# show describe HPA\nkubectl describe hpa <hpa-name>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(1402).Z,width:"719",height:"705"})),(0,a.kt)("p",null,"Previously we only have two pods running. After we apply the HPA, the new pod is created, so total there are three pods. This is because in our HPA the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.minReplicas")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,a.kt)("h3",{id:"331-stress-test-on-horizontal-pod-auto-scaler"},"3.3.1. Stress test on Horizontal Pod Auto scaler"),(0,a.kt)("p",null,"Ok, next let's do some stress test! Let's see how the HPA will handle very high traffic coming. The below command will trigger a concurrent 50 request to the service URL for 5 minutes. Run it on a new CMD/PowerShell window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# show service URL\nminikube service my-service --url\n\n# start the stress test\nhey -c 50 -z 5m <service-URL>\n")),(0,a.kt)("p",null,"And then back to our main PowerShell window, do regularly check the pods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# show all HPA and pods\nkubectl get hpa\nkubectl get pods\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deploy App into Minikube Cluster using Deployment controller, Service, and Horizontal Autoscaler - apply changes on deployment object",src:n(8278).Z,width:"757",height:"429"})),(0,a.kt)("p",null,"After a minute passed, suddenly a total of 6 pods created. This is happening because the CPU utilization is high enough, greater than the threshold that we defined in the config."),(0,a.kt)("p",null,"HPA is not only able to magically scale the pod during high traffic but on low traffic, the scaling process will happen as well. Do stop the stress test and wait for a few minutes, and check the HPA and pods again, you will see the number of pods reduced to ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.minReplicas")," again."),(0,a.kt)("p",null,"Ok, that's it."))}u.isMDXComponent=!0},7067:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-1-2359220a50053dcfeb108b78e0325dc8.png"},1040:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-2-816c0cf97a56e9d4f3ecc92654c35a6f.png"},1374:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-3-3b9ba83f5274cff031bf6670590c7f55.png"},4290:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-4-7e2c8d0e2ea748447b8c2b9008b37f57.jpg"},1402:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-5-65d16f8b9e8130798cd97b4a59a8e509.png"},8278:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kubernetes-minikube-deployment-service-horizontal-autoscale-6-84a29b635a64f862926b980210403595.png"}}]);