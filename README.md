# Refactoring_Scrooge_Server

- 기존 사용 스택: javaScript, nodejs, express, sequelize, mysql

### 리팩토링 사용 스택:

#### Server Stacks: 
  * Skeleton: typeScript, javaScript, nodejs, express, typeORM, typedi, mysql
  * Testing: jest
  * Vaildation: joi
  * Logging: winston, morgan
  * API Documents: postman
  * Code Convention: eslint, prettier

#### DevOps: 
  * Docker
  * AWS(IAM, ACM, S3, Route53, ELB, EC2, RDS, CodeBuild, CodeDeploy, CodePipeline, ECS(fargate), ECR) + VPC 보안그룹

#### Tools: VScode, Git, GitHub 

### 리팩토링 목적
- OOP, FP를 적극 활용
- Docker, Docker-compose(Server, DB) 사용
- CI / CD 적용 (CodeCommit, CodeBuild, CodeDeploy, Pipeline)
- DNS, 고정 IP주소 적용(ACM, Route53, ELB, EC2)
- MySQL RDS 사용
- VPC 생성 및 EC2, RDS 적용 및 인바운드 규칙 생성
- git flow에 따라 개발하여 CLI 명령어에 익숙해진다. 
  - Branch: master, hotfix, release, dev, feature
  - revert, reset, .. 
  - Sourcetree
- TypeScript 적용 실습
- RESTful API를 적용하여 서버의 라우팅을 적용
- 서버의 파일 구조
- ESlint, Prettier 적용(형식 통일)
