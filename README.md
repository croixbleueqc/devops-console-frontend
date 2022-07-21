# Devops Console Frontend Components
TODO

# Quick start


To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```
TODO


# How to contribuate
### Requirements

 - A Bit account
 - Be member of croixbleue organization in Bit (CroixBleue DevOps team is owner of croixbleueqc account [owner of the organisation])

### Create a new component

Create a component with Bit : https://bit.dev/docs/getting-started/composing/creating-components

If needed, update Netlify example App with new component : TBD

Publish component on Bit with a soft tag : TBD


# How to use in project
How to use croixbleue Bit components in your project ?
https://bit.dev/docs/components/installing-components
TODO

# Bit scaffold details

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the React env. However you can create other components and apply other envs to them such as node, html, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.


This removes the components from the bitmap as well as removes the files.


- **.gitignore**

Ignoring any files from version control
