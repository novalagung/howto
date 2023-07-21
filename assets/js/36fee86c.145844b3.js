"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[318],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",sidebar_label:"Automate Setup of AWS EC2 with ALB and Auto Scaling enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",keywords:["aws","ec2","alb","terraform","serverless","automation"]},o=void 0,l={unversionedId:"terraform-aws-load-balancer-auto-scaling",id:"terraform-aws-load-balancer-auto-scaling",title:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",source:"@site/docs/terraform-aws-load-balancer-auto-scaling.md",sourceDirName:".",slug:"/terraform-aws-load-balancer-auto-scaling",permalink:"/terraform-aws-load-balancer-auto-scaling",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",sidebar_label:"Automate Setup of AWS EC2 with ALB and Auto Scaling enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Application Load Balancer and Auto Scaling enabled using Terraform",keywords:["aws","ec2","alb","terraform","serverless","automation"]},sidebar:"tutorialSidebar",previous:{title:"Automate Setup of AWS EC2 with IGW and SSH Access enabled using Terraform",permalink:"/terraform-aws-ec2-internet-gateway-ssh"}},s={},p=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"1.1. Terraform CLI",id:"11-terraform-cli",level:3},{value:"1.2. Individual AWS IAM user",id:"12-individual-aws-iam-user",level:3},{value:"1.3. <code>ssh-keygen</code> and <code>ssh</code> commands",id:"13-ssh-keygen-and-ssh-commands",level:3},{value:"2. Preparation",id:"2-preparation",level:2},{value:"3. Infrastructure Code",id:"3-infrastructure-code",level:2},{value:"3.1. Define AWS provider",id:"31-define-aws-provider",level:3},{value:"3.2. Generate new key pair then upload to AWS",id:"32-generate-new-key-pair-then-upload-to-aws",level:3},{value:"3.3. Book a VPC, and enable internet gateway on it",id:"33-book-a-vpc-and-enable-internet-gateway-on-it",level:3},{value:"3.4. Allocate two different subnets on two different availability zones (within the same region)",id:"34-allocate-two-different-subnets-on-two-different-availability-zones-within-the-same-region",level:3},{value:"3.5. Define ALB resource block, listener, security group, and target group",id:"35-define-alb-resource-block-listener-security-group-and-target-group",level:3},{value:"3.6. Define launch config (and it&#39;s required dependencies) for auto-scaling",id:"36-define-launch-config-and-its-required-dependencies-for-auto-scaling",level:3},{value:"3.7. Print the ALB public DNS",id:"37-print-the-alb-public-dns",level:3},{value:"4. App Deployment Script",id:"4-app-deployment-script",level:2},{value:"5. Run Terraform",id:"5-run-terraform",level:2},{value:"5.1. Terraform initialization",id:"51-terraform-initialization",level:3},{value:"5.2. Terraform plan",id:"52-terraform-plan",level:3},{value:"5.3. Terraform apply",id:"53-terraform-apply",level:3},{value:"6. Test Instance",id:"6-test-instance",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, we are going to learn about the usage of Terraform to automate the setup of AWS EC2 instance in an auto-scaling environment with an Application Load Balancer applied."),(0,r.kt)("p",null,"Since we will be using the auto-scaling feature, then the app within the instance needs to be deployed in an automated manner."),(0,r.kt)("p",null,"The application is a simple go app, currently hosted on Github in a private repo. We will clone the app using Github token, we will talk about it in details in some part of this tutorial."),(0,r.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,r.kt)("h3",{id:"11-terraform-cli"},"1.1. Terraform CLI"),(0,r.kt)("p",null,"Ensure terraform CLI is available. If not, then do install it first."),(0,r.kt)("h3",{id:"12-individual-aws-iam-user"},"1.2. Individual AWS IAM user"),(0,r.kt)("p",null,"Prepare a new individual IAM user with programmatic access key enabled and have access to EC2 management. We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," on this tutorial. If you haven't created the IAM user, then follow a guide on ",(0,r.kt)("a",{parentName:"p",href:"/aws-create-iam-user-access-credentials"},"How to Create IAM User Access Credentials in AWS"),"."),(0,r.kt)("h3",{id:"13-ssh-keygen-and-ssh-commands"},"1.3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh-keygen")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh")," commands"),(0,r.kt)("p",null,"Ensure both ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," command are available."),(0,r.kt)("h2",{id:"2-preparation"},"2. Preparation"),(0,r.kt)("p",null,"Create a new folder contains a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf"),". We will use the file as the infrastructure code. Every resource setup will be written in HCL language inside the file, including: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uploading key pair (for ssh access to the instance)."),(0,r.kt)("li",{parentName:"ul"},"Subnetting on two different availability zones (within the same region)."),(0,r.kt)("li",{parentName:"ul"},"Defining Application Load Balancer, it's listener, security group, and target group."),(0,r.kt)("li",{parentName:"ul"},"Defining Auto-scaling and it's launch config.")),(0,r.kt)("p",null,"Ok, let's back to the tutorial. Now create the infrastructure file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir terraform-automate-aws-ec2-instance\ncd terraform-automate-aws-ec2-instance\ntouch infrastructure.tf\n")),(0,r.kt)("p",null,"Next, create a public-key cryptography using ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command below. This will generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," public key and ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa")," private key. Later we will upload the public key into AWS and use the private key to perform ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," access into the newly created EC2 instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nssh-keygen -t rsa -f ./id_rsa\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Load Balancer and Auto Scaling enabled - generate key pair",src:a(7657).Z,width:"993",height:"365"})),(0,r.kt)("h2",{id:"3-infrastructure-code"},"3. Infrastructure Code"),(0,r.kt)("p",null,"Now we shall start writing the infrastructure config. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf")," in any editor."),(0,r.kt)("h3",{id:"31-define-aws-provider"},"3.1. Define AWS provider"),(0,r.kt)("p",null,"Define the provider block with ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/index.html"},"AWS as chosen cloud provider"),". Also define these properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"region"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),"; with values derived from the created IAM user."),(0,r.kt)("p",null,"Write a block of code below into ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'provider "aws" {\n    region = "ap-southeast-1"\n    access_key = "AKIAWLTS5CSXP7E3YLWG"\n    secret_key = "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"\n}\n')),(0,r.kt)("h3",{id:"32-generate-new-key-pair-then-upload-to-aws"},"3.2. Generate new key pair then upload to AWS"),(0,r.kt)("p",null,"Define new ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/key_pair.html"},(0,r.kt)("inlineCode",{parentName:"a"},"aws_key_pair")," resource")," block with local name: ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance_key_pair"),". Put the previously generated ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," public key inside the block to upload it to AWS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'resource "aws_key_pair" "my_instance_key_pair" {\n    key_name = "terraform_learning_key_1"\n    public_key = file("id_rsa.pub")\n}\n')),(0,r.kt)("h3",{id:"33-book-a-vpc-and-enable-internet-gateway-on-it"},"3.3. Book a VPC, and enable internet gateway on it"),(0,r.kt)("p",null,"Book a VPC, name it ",(0,r.kt)("inlineCode",{parentName:"p"},"my_vpc"),". Then enable internet gateway on it. Each part of the code below is self-explanatory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# allocate a vpc named my_vpc.\nresource "aws_vpc" "my_vpc" {\n    cidr_block = "10.0.0.0/16"\n    enable_dns_hostnames = true\n}\n\n# setup internet gateway for my_vpc.\nresource "aws_internet_gateway" "my_vpc_igw" {\n    vpc_id = aws_vpc.my_vpc.id\n}\n\n# attach the internet gateway my_vpc_igw into my_vpc.\nresource "aws_route_table" "my_public_route_table" {\n    vpc_id = aws_vpc.my_vpc.id\n    route {\n        cidr_block = "0.0.0.0/0"\n        gateway_id = aws_internet_gateway.my_vpc_igw.id\n    }\n}\n')),(0,r.kt)("h3",{id:"34-allocate-two-different-subnets-on-two-different-availability-zones-within-the-same-region"},"3.4. Allocate two different subnets on two different availability zones (within the same region)"),(0,r.kt)("p",null,"Application Load Balancer or ALB requires two subnets setup on two availability zones (within the same region)."),(0,r.kt)("p",null,"In this example, the region we used is ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-southeast-1"),", as defined in the provider block above (see 3.1). There are two zones available within this region, ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-southeast-1a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-southeast-1b"),". The ALB (not classic network load balancer) requires at least to be enabled on two different zones, so we will use those two."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# prepare a subnet for availability zone ap-southeast-1a.\nresource "aws_subnet" "my_subnet_public_southeast_1a" {\n    vpc_id = aws_vpc.my_vpc.id\n    cidr_block = "10.0.0.0/24"\n    availability_zone = "ap-southeast-1a"\n}\n# associate the internet gateway into newly created subnet for ap-southeast-1a\nresource "aws_route_table_association" "my_public_route_association_for_southeast_1a" {\n    subnet_id = aws_subnet.my_subnet_public_southeast_1a.id\n    route_table_id = aws_route_table.my_public_route_table.id\n}\n\n# prepare a subnet for availability zone ap-southeast-1b\nresource "aws_subnet" "my_subnet_public_southeast_1b" {\n    vpc_id = aws_vpc.my_vpc.id\n    cidr_block = "10.0.1.0/24"\n    availability_zone = "ap-southeast-1b"\n}\n# associate the internet gateway into newly created subnet for ap-southeast-1b\nresource "aws_route_table_association" "my_public_route_association_for_southeast_1b" {\n    subnet_id = aws_subnet.my_subnet_public_southeast_1b.id\n    route_table_id = aws_route_table.my_public_route_table.id\n}\n')),(0,r.kt)("p",null,"The internet gateway associated with two zones that we just created. In this example, it is required for the application hosted within instances on these zones to be able to connect to the internet."),(0,r.kt)("h3",{id:"35-define-alb-resource-block-listener-security-group-and-target-group"},"3.5. Define ALB resource block, listener, security group, and target group"),(0,r.kt)("p",null,"The ALB will be created with two subnets attached (subnets from ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-southeast-1a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-southeast-1b"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create an Application Load Balancer.\n# attach the previous availability zones\' subnets into this load balancer.\nresource "aws_lb" "my_alb" {\n    name = "my-alb"\n    internal = false # set lb for public access\n    load_balancer_type = "application" # use Application Load Balancer\n    security_groups = [aws_security_group.my_alb_security_group.id]\n    subnets = [ # attach the availability zones\' subnets.\n        aws_subnet.my_subnet_public_southeast_1a.id,\n        aws_subnet.my_subnet_public_southeast_1b.id \n    ]\n}\n')),(0,r.kt)("p",null,"The security group for our load balancer has only two rules."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow only incoming TCP/HTTP request on port ",(0,r.kt)("inlineCode",{parentName:"li"},"80"),"."),(0,r.kt)("li",{parentName:"ul"},"Allow every kind of outgoing request.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# prepare a security group for our load balancer my_alb.\nresource "aws_security_group" "my_alb_security_group" {\n    vpc_id = aws_vpc.my_vpc.id\n    ingress {\n        from_port = 80\n        to_port = 80\n        protocol = "tcp"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n    egress {\n        from_port = 0\n        to_port = 0\n        protocol = "-1"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n}\n')),(0,r.kt)("p",null,"Next, we shall prepare the ALB listener. The load balancer will listen for every incoming request to port ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),", and then the particular request will be directed towards port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," on the instance."),(0,r.kt)("p",null,"Port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," is chosen here because the application (that will be deployed later) will listen to this port."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create an alb listener for my_alb.\n# forward rule: only accept incoming HTTP request on port 80,\n# then it\'ll be forwarded to port target:8080.\nresource "aws_lb_listener" "my_alb_listener" {  \n    load_balancer_arn = aws_lb.my_alb.arn\n    port = 80  \n    protocol = "HTTP"\n    default_action {    \n        target_group_arn = aws_lb_target_group.my_alb_target_group.arn\n        type = "forward"  \n    }\n}\n\n# my_alb will forward the request to a particular app,\n# that listen on 8080 within instances on my_vpc.\nresource "aws_lb_target_group" "my_alb_target_group" {\n    port = 8080\n    protocol = "HTTP"\n    vpc_id = aws_vpc.my_vpc.id\n}\n')),(0,r.kt)("h3",{id:"36-define-launch-config-and-its-required-dependencies-for-auto-scaling"},"3.6. Define launch config (and it's required dependencies) for auto-scaling"),(0,r.kt)("p",null,"We are not going to simply create an instance then deploy the application into it. Instead, the instance creation and app deployment will be automated using AWS auto-scaling feature."),(0,r.kt)("p",null,"In the resource block below, we will set up the launch configuration for the auto-scaling. This launch config is the one that decides how the instance will be created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"Amazon Linux 2 AMI t2.micro")," is used here."),(0,r.kt)("li",{parentName:"ul"},"The launched instance will have a public IP attached, this is better to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", but in here we might need it for testing purposes."),(0,r.kt)("li",{parentName:"ul"},"The previously allocated key pair will also be used on the instance, to make it accessible through SSH access. This part is also for testing purposes.")),(0,r.kt)("p",null,"Other than that, there is one point left that is very important, the ",(0,r.kt)("inlineCode",{parentName:"p"},"user_data"),". The user data is a block of bash script that will be executed during instance bootstrap. We will use this to automate the deployment of our application. The whole script is stored in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.sh"),", we will prepare it later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# setup launch configuration for the auto-scaling.\nresource "aws_launch_configuration" "my_launch_configuration" {\n\n    # Amazon Linux 2 AMI (HVM), SSD Volume Type (ami-0f02b24005e4aec36).\n    image_id = "ami-0f02b24005e4aec36"\n\n    instance_type = "t2.micro"\n    key_name = aws_key_pair.my_instance_key_pair.key_name # terraform_learning_key_2\n    security_groups = [aws_security_group.my_launch_config_security_group.id]\n\n    # set to false on prod stage.\n    # otherwise true, because ssh access might be needed to the instance.\n    associate_public_ip_address = true\n    lifecycle {\n        # ensure the new instance is only created before the other one is destroyed.\n        create_before_destroy = true\n    }\n\n    # execute bash scripts inside deployment.sh on instance\'s bootstrap.\n    # what the bash scripts going to do in summary:\n    # fetch a hello world app from Github repo, then deploy it in the instance.\n    user_data = file("deployment.sh")\n}\n')),(0,r.kt)("p",null,"Below is the launch config security group. In this block, we define the security group specifically for the instances that will be created by the auto scale launch config. Three rules defined here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow incoming ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP/SSH")," access on port ",(0,r.kt)("inlineCode",{parentName:"li"},"22"),"."),(0,r.kt)("li",{parentName:"ul"},"Allow ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP/HTTP")," access on port ",(0,r.kt)("inlineCode",{parentName:"li"},"8080"),"."),(0,r.kt)("li",{parentName:"ul"},"Allow every kind of outgoing requests.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# security group for launch config my_launch_configuration.\nresource "aws_security_group" "my_launch_config_security_group" {\n    vpc_id = aws_vpc.my_vpc.id\n    ingress {\n        from_port = 22\n        to_port = 22\n        protocol = "tcp"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n    ingress {\n        from_port = 8080\n        to_port = 8080\n        protocol = "tcp"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n    egress {\n        from_port = 0\n        to_port = 0\n        protocol = "-1"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n}\n')),(0,r.kt)("p",null,"Ok, the autoscale launch config is ready, now we shall attach it into our ALB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create an autoscaling then attach it into my_alb_target_group.\nresource "aws_autoscaling_attachment" "my_aws_autoscaling_attachment" {\n    alb_target_group_arn = aws_lb_target_group.my_alb_target_group.arn\n    autoscaling_group_name = aws_autoscaling_group.my_autoscaling_group.id\n}\n')),(0,r.kt)("p",null,"Next, we shall prepare the auto-scaling group config. This resource is used to determine when or on what condition the scaling process run."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As per the below config, the auto-scaling will have a minimum of 2 instances alive, and 5 max."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ELB")," health check is enabled."),(0,r.kt)("li",{parentName:"ul"},"The previous two subnets on ",(0,r.kt)("inlineCode",{parentName:"li"},"ap-southeast-1a")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ap-southeast-1b")," are applied.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# define the autoscaling group.\n# attach my_launch_configuration into this newly created autoscaling group below.\nresource "aws_autoscaling_group" "my_autoscaling_group" {\n    name = "my-autoscaling-group"\n    desired_capacity = 2 # ideal number of instance alive\n    min_size = 2 # min number of instance alive\n    max_size = 5 # max number of instance alive\n    health_check_type = "ELB"\n\n    # allows deleting the autoscaling group without waiting\n    # for all instances in the pool to terminate\n    force_delete = true\n\n    launch_configuration = aws_launch_configuration.my_launch_configuration.id\n    vpc_zone_identifier = [\n        aws_subnet.my_subnet_public_southeast_1a.id,\n        aws_subnet.my_subnet_public_southeast_1b.id \n    ]\n    timeouts {\n        delete = "15m" # timeout duration for instances\n    }\n    lifecycle {\n        # ensure the new instance is only created before the other one is destroyed.\n        create_before_destroy = true\n    }\n}\n')),(0,r.kt)("h3",{id:"37-print-the-alb-public-dns"},"3.7. Print the ALB public DNS"),(0,r.kt)("p",null,"Everything is pretty much done, except we need to print the ALB public DNS, so then we can do the testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# print load balancer\'s DNS, test it using curl.\n#\n# curl my-alb-625362998.ap-southeast-1.elb.amazonaws.com\noutput "alb-url" {\n    value = aws_lb.my_alb.dns_name\n}\n')),(0,r.kt)("h2",{id:"4-app-deployment-script"},"4. App Deployment Script"),(0,r.kt)("p",null,"We have done with the infrastructure code, next prepare the deployment script."),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.sh")," in the same directory where the infra code is placed. It will contain bash scripts for automating app deployment. This file will be used by auto-scaling launcher to automate app setup during instance bootstrap."),(0,r.kt)("p",null,"The application is written in Go, and the AMI ",(0,r.kt)("em",{parentName:"p"},"Amazon Linux 2 AMI t2.micro")," that used here does not have any Go tools ready, that's why we need to set it up."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Deploying app")," means that the app is ready (has been built into binary), so what we need is simply just run the binary.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"However to make our learning process better, in this example, we are going to fetch the app source code and perform the build and deploy processes within the instance.")),(0,r.kt)("p",null,"Ok, here we go, the bash script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# install git\nsudo yum -y install git\n\n# download go, then install it\nwget https://dl.google.com/go/go1.14.linux-amd64.tar.gz\nsudo tar -C /usr/local -xzf go1.14.linux-amd64.tar.gz\n\n# clone the hello world app.\n# The app is hosted on private repo,\n# that\'s why the github token is used on cloning the repo\ngithub_token=30542dd8874ba3745c55203a091c345340c18b7a\ngit clone https://$github_token:x-oauth-basic@github.com/novalagung/hello-world.git \\\n    && echo "cloned" \\\n    || echo "clone failed"\n\n# export certain variables required by go\nexport GO111MODULE=on\nexport GOROOT=/usr/local/go\nexport GOCACHE=~/gocache\nmkdir -p $GOCACHE\nexport GOPATH=~/goapp\nmkdir -p $GOPATH\n\n# create local vars specifically for the app\nexport PORT=8080\nexport INSTANCE_ID=`curl -s http://169.254.169.254/latest/meta-data/instance-id`\n\n# build the app\ncd hello-world\n/usr/local/go/bin/go env\n/usr/local/go/bin/go mod tidy\n/usr/local/go/bin/go build -o binary\n\n# run the app with nohup\nnohup ./binary &\n')),(0,r.kt)("h2",{id:"5-run-terraform"},"5. Run Terraform"),(0,r.kt)("h3",{id:"51-terraform-initialization"},"5.1. Terraform initialization"),(0,r.kt)("p",null,"First, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," command. This command will do some setup/initialization, certain dependencies (like AWS provider that we used) will be downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nterraform init\n")),(0,r.kt)("h3",{id:"52-terraform-plan"},"5.2. Terraform plan"),(0,r.kt)("p",null,"Next, run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform plan"),", to see the plan of our infrastructure. This step is optional, however, might be useful for us to see the outcome from the infra file."),(0,r.kt)("h3",{id:"53-terraform-apply"},"5.3. Terraform apply"),(0,r.kt)("p",null,"Last, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," command to execute the infrastructure plan."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nterraform apply -auto-approve\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-auto-approve")," flag is optional, it will skip the confirmation prompt during execution."),(0,r.kt)("p",null,"After the process is done, public DNS shall appear. Next, we shall test the instance. "),(0,r.kt)("h2",{id:"6-test-instance"},"6. Test Instance"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to make an HTTP request to the ALB public DNS instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET my-alb-613171058.ap-southeast-1.elb.amazonaws.com\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Load Balancer and Auto Scaling enabled - curl to load balancer",src:a(8527).Z,width:"1236",height:"603"})),(0,r.kt)("p",null,"We can see from the image above, the HTTP response is different from one another across those multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," commands. The load balancer manages the traffic, sometimes we will get the instance A, B, etc."),(0,r.kt)("p",null,"In the AWS console, the instances that up and running are visible."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Load Balancer and Auto Scaling enabled - aws console",src:a(8367).Z,width:"1635",height:"332"})))}c.isMDXComponent=!0},7657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-load-balancer-auto-scaling-1-ba5e025e427d681d2c7f18acf09d0573.png"},8527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-load-balancer-auto-scaling-2-f63deaa8977d1d53ea32e0ad7efb8f11.png"},8367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-load-balancer-auto-scaling-3-1faa9fdb7d85034776ed019fa19665e9.png"}}]);