# Devops Console Frontend

DevOps Console Frontend is the source of components used to build the UI of DevOps Console Backend (https://github.com/croixbleueqc/devops-console-backend). It is based on Bit open-source toolchain (https://bit.dev/).
> DevOps Console Backend
>> <cite>The main purpose is to provide a service (splitted in multiple services in the future) that will be able to communicate with all "DevOps" systems. It will be the entrypoint for a DevOps Console UI but not restrictive to this only concern.</cite>


# Requirements

 - (Optional but strongly recommaned) use WSL or Unix system.
 - Node.js
 - Bit (https://bit.dev/docs/getting-started/installing-bit/installing-bit)

# Quick start

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

To know more about Bit: https://bit.dev/


# How to contribuate

Like explain later in document, it is the CI that export (publish) components, so you not need to have a Bit account to contribute.\
But if in sme special case you need to deal directly with Bit Cloud from your local machine, you need the following stuff:
 - A Bit account
 - Be member of croixbleue organization in Bit (CroixBleue DevOps team is owner of croixbleueqc account [owner of the organisation])

> Note: remember to login -> https://bit.dev/docs/reference/cli-reference#login


## Create a new component

Create a component with Bit : https://bit.dev/docs/getting-started/composing/creating-components


### Export component

In Bit export a component is like publishing on Bit Cloud. In the current project, the developers do not have to export component, the CI have the responsibility to do it for them.\
 > Also, normaly the developers have not rigth to export their component in Bit croixbleue organization.

So, the solution for export a new version of a component is to use a soft tag and push your feature branch with the code on Github. When your pull request will be accepted and your branch merged on the master branch, a workflow in Github CI will automaticlly persiste yyour tag and export the news versions of app and components on Bit Cloud.\
Soft tag command: 
```bash
bit tag --soft <component-id> <new-version> -m <message>
```

(source: https://bit.dev/docs/getting-started/collaborate/setup-ci, https://dev.to/giteden/how-to-collaborate-on-components-across-projects-with-bit-29c3 and https://bit.dev/docs/components/tags)

Full example: 
```bash
git branch
* master

git switch -c feature/foo

bit create react devops-console/foo
bit tag --soft devops-console/foo -m "Add new Foo component"    # implicity tag v0.0.1 because of new component

git commit -am "Add new Foo component"
git push --set-upstream origin feature/foo
```


### Demo App

If needed, update Netlify ReactApp example with new component. The ReactApp under `devops\netlify\react-app` path is an example app used to demonstrate how to use Devops Console Frontend components.\
This app is automatically tagged and published on Netlify by the Github pipeline.

Link: https://bit.cloud/croixbleue/devops/netlify/react-app


# How to use in project

How to use croixbleue Bit components in your project ?


## Requirement - Configure npm

First, configuring npm to know about bit repository (https://bit.dev/docs/packages/npmrc).
```bash
npm config set '@croixbleue:registry' https://node.bit.cloud
```


## Install component

It possible to import and use bit components in to way:
 - "Usage mode": using components that are already published on Bit Cloud.
 - "Dev mode": using components that not published on Bit Cloud.


### Usage mode

To using components that are already published on Bit Cloud (https://bit.dev/docs/packages/importing-components). You just need to install the component:
```bash
npm install @croixbleue:component-name
```
The exact command can be found directly on component page, on https://bit.cloud/croixbleue/devops/.

Example:
```bash
npm i @croixbleue/devops.devops-console.header-bar
```


### Dev mode

To using components that not published on Bit Cloud, you need to link the in development component of your local Bit projet to your final local project.


### Compile or watch components

To generate an distribuable version of you component in development, you have to compile it:
```bash
bit compile
```
**Prefered method** > To recompile the component when it changes, you have to watch it:
```bash
bit watch
```


### Link component between project

link local Bit component to your projet:
```bash
npm link <path of bit project>/node_modules/<package name> --save
```

Example:
```bash
npm link ~/workspace/devops-console-frontend/node_modules/@croixbleue/devops.devops-console.foo --save
```
(source: https://docs.npmjs.com/cli/v8/commands/npm-link)

 > To find package name of your Bit component, use `bit show` command.

 > IMPORTANT NOTE: remember that link is temporary and not collaborative. When you have a stable version of your Bit component, you should publish it on Bit Cloud and reinstall it on your final project.


### Start your local projet

So now, you can add your in devleopment Bit component to your local final project and start it (in development mode). Example:
```bash
npm start
```
Each time you change your Bit component, it will be recompiled and automatically updated in your local final project.


### How to remove link

You can use `npm unlink` command to remove link between your local Bit component and your final local project. (it is an alias of `npm uninstall`). But this time you have to do in two time:
```bash
npm unlink <package name>
npm unlink -g <package name>
```


# Bit scaffold details


## What's included


- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.


- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


This removes the components from the bitmap as well as removes the files.


- **.gitignore**

Ignoring any files from version control
