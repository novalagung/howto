"use strict";(self.webpackChunkhowto=self.webpackChunkhowto||[]).push([[200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",sidebar_label:"Automate Setup of AWS EC2 with IGW and SSH Access enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",keywords:["aws","ec2","alb","terraform","serverless","automation"]},o=void 0,s={unversionedId:"terraform-aws-ec2-internet-gateway-ssh",id:"terraform-aws-ec2-internet-gateway-ssh",title:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",source:"@site/docs/terraform-aws-ec2-internet-gateway-ssh.md",sourceDirName:".",slug:"/terraform-aws-ec2-internet-gateway-ssh",permalink:"/terraform-aws-ec2-internet-gateway-ssh",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",sidebar_label:"Automate Setup of AWS EC2 with IGW and SSH Access enabled using Terraform",description:"How to Automate Setup of AWS EC2 with Internet Gateway and SSH Access enabled using Terraform",keywords:["aws","ec2","alb","terraform","serverless","automation"]},sidebar:"tutorialSidebar",previous:{title:"Setup WireGuard VPN Server + UI",permalink:"/setup-wireguard-vpn-server"},next:{title:"Automate Setup of AWS EC2 with ALB and Auto Scaling enabled using Terraform",permalink:"/terraform-aws-load-balancer-auto-scaling"}},l={},c=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"1.1. Terraform CLI",id:"11-terraform-cli",level:3},{value:"1.2. Individual AWS IAM user",id:"12-individual-aws-iam-user",level:3},{value:"1.3. <code>ssh-keygen</code> and <code>ssh</code> commands",id:"13-ssh-keygen-and-ssh-commands",level:3},{value:"2. Preparation",id:"2-preparation",level:2},{value:"3. Infrastructure Code",id:"3-infrastructure-code",level:2},{value:"3.1. Define AWS provider",id:"31-define-aws-provider",level:3},{value:"3.2. Generate new key pair then upload to AWS",id:"32-generate-new-key-pair-then-upload-to-aws",level:3},{value:"3.3. Create a new EC2 instance",id:"33-create-a-new-ec2-instance",level:3},{value:"3.4. Allocate a VPC resource with a security group attached to it",id:"34-allocate-a-vpc-resource-with-a-security-group-attached-to-it",level:3},{value:"3.5. Allocate new public subnet to VPC",id:"35-allocate-new-public-subnet-to-vpc",level:3},{value:"3.6. Create an internet gateway and route table association",id:"36-create-an-internet-gateway-and-route-table-association",level:3},{value:"4. Run Terraform",id:"4-run-terraform",level:2},{value:"4.1. Terraform initialization",id:"41-terraform-initialization",level:3},{value:"4.2. Terraform plan",id:"42-terraform-plan",level:3},{value:"4.3. Terraform apply",id:"43-terraform-apply",level:3},{value:"5. Test Instance",id:"5-test-instance",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, we are going to learn about the usage of Terraform to automate the setup of AWS EC2 instance with internet gateway and ssh access enabled."),(0,r.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,r.kt)("h3",{id:"11-terraform-cli"},"1.1. Terraform CLI"),(0,r.kt)("p",null,"Ensure terraform CLI is available. If not, then do install it first."),(0,r.kt)("h3",{id:"12-individual-aws-iam-user"},"1.2. Individual AWS IAM user"),(0,r.kt)("p",null,"Prepare a new individual IAM user with programmatic access key enabled and have access to EC2 management. We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," on this tutorial. If you haven't created the IAM user, then follow the guide on ",(0,r.kt)("a",{parentName:"p",href:"/aws-create-iam-user-access-credentials"},"How to Create IAM User Access Credentials in AWS"),"."),(0,r.kt)("h3",{id:"13-ssh-keygen-and-ssh-commands"},"1.3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh-keygen")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh")," commands"),(0,r.kt)("p",null,"Ensure both ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," command are available."),(0,r.kt)("h2",{id:"2-preparation"},"2. Preparation"),(0,r.kt)("p",null,"Create a new folder contains a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf"),". We will use the file as the infrastructure code. Every resource setup will be written in HCL language inside the file, including: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uploading key pair (for ssh access to the instance)."),(0,r.kt)("li",{parentName:"ul"},"Creating EC2 instance."),(0,r.kt)("li",{parentName:"ul"},"Adding security group to VPC (where the instance will be created)."),(0,r.kt)("li",{parentName:"ul"},"Creating a public subnet."),(0,r.kt)("li",{parentName:"ul"},"Creating an internet gateway and associate it to the subnet.")),(0,r.kt)("p",null,"Ok, let's back to the tutorial. Now create the infrastructure file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir terraform-automate-aws-ec2-instance\ncd terraform-automate-aws-ec2-instance\ntouch infrastructure.tf\n")),(0,r.kt)("p",null,"Next, create a new public-key cryptography using ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command below. This will generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," public key and ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa")," private key. Later we will upload the public key into AWS and use the private key to perform ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," access into the newly created EC2 instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nssh-keygen -t rsa -f ./id_rsa\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Internet Gateway and SSH Access enabled - generate key pair",src:a(3072).Z,width:"993",height:"365"})),(0,r.kt)("h2",{id:"3-infrastructure-code"},"3. Infrastructure Code"),(0,r.kt)("p",null,"Now we shall start writing the infrastructure config. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf")," in any editor."),(0,r.kt)("h3",{id:"31-define-aws-provider"},"3.1. Define AWS provider"),(0,r.kt)("p",null,"Define the provider block with ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/index.html"},"AWS as chosen cloud provider"),". Also define these properties: ",(0,r.kt)("inlineCode",{parentName:"p"},"region"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),"; with values derived from the created IAM user."),(0,r.kt)("p",null,"Write a block of code below into ",(0,r.kt)("inlineCode",{parentName:"p"},"infrastructure.tf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'provider "aws" {\n    region = "ap-southeast-1"\n    access_key = "AKIAWLTS5CSXP7E3YLWG"\n    secret_key = "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"\n}\n')),(0,r.kt)("h3",{id:"32-generate-new-key-pair-then-upload-to-aws"},"3.2. Generate new key pair then upload to AWS"),(0,r.kt)("p",null,"Define new ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/key_pair.html"},(0,r.kt)("inlineCode",{parentName:"a"},"aws_key_pair")," resource")," block with local name: ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance_key_pair"),". Put the previously generated ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," public key inside the block to upload it to AWS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'resource "aws_key_pair" "my_instance_key_pair" {\n    key_name = "terraform_learning_key_1"\n    public_key = file("id_rsa.pub")\n}\n')),(0,r.kt)("h3",{id:"33-create-a-new-ec2-instance"},"3.3. Create a new EC2 instance"),(0,r.kt)("p",null,"Define another resource block, but this one will be the ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/instance.html"},(0,r.kt)("inlineCode",{parentName:"a"},"aws_instance")," resource"),". Name the EC2 instance as ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance"),", then specify the values of VPC, instance type, key pair, security group, subnet, and public IP within the block."),(0,r.kt)("p",null,"Each part of the code below is self-explanatory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create a new AWS ec2 instance.\nresource "aws_instance" "my_instance" {\n\n    # ami => Amazon Linux 2 AMI (HVM), SSD Volume Type (ami-0f02b24005e4aec36).\n    ami = "ami-0f02b24005e4aec36"\n\n    # instance type => t2.micro.\n    instance_type = "t2.micro"\n\n    # key pair: terraform_learning_key_1.\n    key_name = aws_key_pair.my_instance_key_pair.key_name\n\n    # vpc security groups: my_vpc_security_group.\n    vpc_security_group_ids = [aws_security_group.my_vpc_security_group.id]\n\n    # public subnet: my_public_subnet.\n    # this subnet is used as the gateway of the internet.\n    subnet_id = aws_subnet.my_public_subnet.id\n\n    # associate one public IP address to this particular instance.\n    associate_public_ip_address = true\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," property filled with a value coming from the ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance_key_pair")," that we defined previously. Statement ",(0,r.kt)("inlineCode",{parentName:"p"},"aws_key_pair.my_instance_key_pair.key_name")," return the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name")," of the particular key pair, in this example it is ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform_learning_key_1"),"."),(0,r.kt)("p",null,"For both ",(0,r.kt)("inlineCode",{parentName:"p"},"vpc_security_group_ids")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet_id"),", the values are taken from another resource block, similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_name"),". However, for these two properties, we haven't defined the resource block yet."),(0,r.kt)("p",null,"Btw, property ",(0,r.kt)("inlineCode",{parentName:"p"},"vpc_security_group_ids")," accept an array of string as the value, so that's why it's wrapped inside ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". Even it is only one security group, the value needs to be in an array format."),(0,r.kt)("h3",{id:"34-allocate-a-vpc-resource-with-a-security-group-attached-to-it"},"3.4. Allocate a VPC resource with a security group attached to it"),(0,r.kt)("p",null,"Allocate ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/vpc.html"},"a VPC resource")," block, and then define ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/security_group.html"},"a security group resource")," within the VPC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# allocate a VPC named my_vpc.\nresource "aws_vpc" "my_vpc" {\n    cidr_block = "10.0.0.0/16"\n    enable_dns_hostnames = true\n}\n\n# create a security group for my_vpc.\nresource "aws_security_group" "my_vpc_security_group" {\n\n    # tag this security group to my_vpc.\n    vpc_id = aws_vpc.my_vpc.id\n\n    # define the inbound rule, allow TCP/SSH access from anywhere.\n    ingress {\n        from_port = 22\n        to_port = 22\n        protocol = "tcp"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n\n    # define the inbound rule, allow TCP/HTTP access on port 80 from anywhere.\n    ingress {\n        from_port = 80\n        to_port = 80\n        protocol = "tcp"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n\n    # define the outbound rule, allow all kinds of accesses from anywhere.\n    egress {\n        from_port = 0\n        to_port = 0\n        protocol = "-1"\n        cidr_blocks = ["0.0.0.0/0"]\n    }\n}\n')),(0,r.kt)("p",null,"Above security group is created for ",(0,r.kt)("inlineCode",{parentName:"p"},"my_vpc")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"vpc_id = aws_vpc.my_vpc.id"),"). This particular VPC has three inbound/outbound rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow ssh access from anywhere. Later we need to remotely connect to the instance to see whether it's properly set up or not."),(0,r.kt)("li",{parentName:"ul"},"Allow incoming access through port ",(0,r.kt)("inlineCode",{parentName:"li"},"80"),". This might be required, so we can perform any tools/dependency installations, etc."),(0,r.kt)("li",{parentName:"ul"},"Allow all kinds of outgoing accesses from anywhere. By doing this we will be able to perform remote access, download, etc to anywhere from the instance.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ingress is equivalent to inbound, and egress for outbound")),(0,r.kt)("h3",{id:"35-allocate-new-public-subnet-to-vpc"},"3.5. Allocate new public subnet to VPC"),(0,r.kt)("p",null,"We have defined a VPC ",(0,r.kt)("inlineCode",{parentName:"p"},"my_vpc")," with CIDR block ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0/16")," allocated. Now we shall create a ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/subnet.html"},"subnet")," (for public access) with CIDR block slightly smaller, ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0/24"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create a subnet for my_vpc.\nresource "aws_subnet" "my_public_subnet" {\n    vpc_id = aws_vpc.my_vpc.id\n    cidr_block = "10.0.0.0/24"\n}\n')),(0,r.kt)("p",null,"If we go back to the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance")," block above, this particular subnet is attached there."),(0,r.kt)("h3",{id:"36-create-an-internet-gateway-and-route-table-association"},"3.6. Create an internet gateway and route table association"),(0,r.kt)("p",null,"Now create an ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/internet_gateway.html"},"internet gateway")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"my_vpc"),". Then attach it to a new ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/route_table.html"},"route table")," for public access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create an internet gateway, tag it to my_vpc.\nresource "aws_internet_gateway" "my_internet_gateway" {\n    vpc_id = aws_vpc.my_vpc.id\n}\n\n# create a new route table for attaching my_internet_gateway into my_vpc.\nresource "aws_route_table" "my_public_route_table" {\n    vpc_id = aws_vpc.my_vpc.id\n    route {\n        cidr_block = "0.0.0.0/0"\n        gateway_id = aws_internet_gateway.my_internet_gateway.id\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/providers/aws/r/route_table_association.html"},"Associate the public route table")," above into ",(0,r.kt)("inlineCode",{parentName:"p"},"my_public_subnet"),", so then we will get an internet access on ",(0,r.kt)("inlineCode",{parentName:"p"},"my_instance")," instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# create a route table association to connect my_public_subnet with my_public_route_table.\nresource "aws_route_table_association" "my_public_route_table_association" {\n  subnet_id = aws_subnet.my_public_subnet.id\n  route_table_id = aws_route_table.my_public_route_table.id\n}\n')),(0,r.kt)("p",null,"Pretty much everything is done, except we need to show the DNS or public IP of newly created instance, so then we can test it using ssh access. use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/configuration/outputs.html"},(0,r.kt)("inlineCode",{parentName:"a"},"output")," block")," to print both public DNS and IP of the instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'output "public-dns" {\n    value = aws_instance.my_instance.*.public_dns[0]\n}\noutput "public-ip" {\n    value = aws_instance.my_instance.public_ip\n}\n')),(0,r.kt)("p",null,"The infra file is ready. Now we shall perform the terraforming process."),(0,r.kt)("h2",{id:"4-run-terraform"},"4. Run Terraform"),(0,r.kt)("h3",{id:"41-terraform-initialization"},"4.1. Terraform initialization"),(0,r.kt)("p",null,"First, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform init")," command. This command will do some setup/initialization, certain dependencies (like AWS provider that we used) will be downloaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nterraform init\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Internet Gateway and SSH Access enabled - terraform init",src:a(4566).Z,width:"994",height:"499"})),(0,r.kt)("h3",{id:"42-terraform-plan"},"4.2. Terraform plan"),(0,r.kt)("p",null,"Next, run ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform plan"),", to see the plan of our infrastructure. This step is optional, however, might be useful for us to see the outcome from the infra file."),(0,r.kt)("h3",{id:"43-terraform-apply"},"4.3. Terraform apply"),(0,r.kt)("p",null,"Last, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply")," command to execute the infrastructure plan."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd terraform-automate-aws-ec2-instance\nterraform apply -auto-approve\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-auto-approve")," flag is optional, it will skip the confirmation prompt during execution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Internet Gateway and SSH Access enabled - terraform apply",src:a(3443).Z,width:"1000",height:"378"})),(0,r.kt)("p",null,"In the infra file, we defined two outputs, DNS and public IP, it shows up after the terraforming process is done."),(0,r.kt)("h2",{id:"5-test-instance"},"5. Test Instance"),(0,r.kt)("p",null,"Now we shall test the instance. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," command to remotely connect to a particular instance. Either DNS or public IP can be used, just pick one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i id_rsa ec2-user@ec2-18-140-245-218.ap-southeast-1.compute.amazonaws.com\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terraform - Automate setup of AWS EC2 with Internet Gateway and SSH Access enabled - ssh to ec2 instance",src:a(889).Z,width:"996",height:"537"})),(0,r.kt)("p",null,"We can see from the image above that we can connect to ec2 instance via SSH, and the instance is connected to the internet."))}u.isMDXComponent=!0},3072:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-ec2-internet-gateway-ssh-1-ba5e025e427d681d2c7f18acf09d0573.png"},4566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-ec2-internet-gateway-ssh-2-777afab892a2b3209580769454596288.png"},3443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-ec2-internet-gateway-ssh-3-c7983b038c685c7841ab2bb43c4cb952.png"},889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/terraform-aws-ec2-internet-gateway-ssh-4-ca6155740423786b0549baf02ae22c47.png"}}]);