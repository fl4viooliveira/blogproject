---
date: "2022-06-05"
title: "Git: What is it, Why was it created, and the main commands."
url: "https://fl4v.io/blog/Git-What-is-it-why-was-it-created-and-the-main-commands" # add original post url, to adding on canonical tag.
author: "fl4viooliveira" # add the GitHub user
intro: "Git is the most famous and used version control system used on the world. It’s an open-source project developed in 2005 for Linus Torvalds – the Linux kernel creator."
category:
  - Dev Tools
tags:
  - git
  - github
  - webdev
---

Git is the most famous and used version control system used on the world. It’s an open-source project developed in 2005 for Linus Torvalds – the Linux kernel creator.

Before Git had all this power, it was tough handling your development versions. If more the one person was working on the same project, that could be a nightmare. For example, sharing your code and asking for one review is not an easy task how is nowadays.

# Content:

1. What is Git?
2. How the version control system Git, was created? A bit of History.
3. Where can I use it?
4. Witch advantages and disadvantages to using Git?
5. What are the repository, commits and branches?
6. What’s the difference between Git and GitHub?
7. 3 good practices for using Git.
8. Conclusion.

# What is Git?

Git is the most used open-source version control system! Git is used to control the changes history of files, mainly for software development projects. It allows more flexibility in workflow, security and performance.

## What is a version control system?

A version control system is a tool to help teams and individual developers to administrate changes on the code base through one timeline. The version control system keeps the register of all code versions, and I mean, it registers all changes on the codebase.

In a real-world example, the control version system helps a lot in the development of an application. When some new feature is applied and breaks the application, it is easy to come back to the version that the code was working and compare it to the new broken version to easy find the error.

# How was the version control system Git created? A bit of History.

**Linus Torvalds, _the Linux kernel creator_**, created Git in 2005.

Everything happened because the Linux kernel community broke the relationship with the BitKeeper, the version control system used on the kernel project. With this break, the BitKeeper start charging to use the tool services.

In this scenario, Linus Torvalds decided to develop one version control system with better performance and use his experience using BitKeeper to create Git, then pass to be the most used version control system globally.

**_Linus had as the main target for this project:_**

- performance;
- no-linear development support;
- open-source;
- attend big projects in an efficient way.

# Where can I use Git?

You can use Git on all projects that have files, no matter what type of files. It can be a code, text, images, videos, audio, wherever. The main target is to allow control of the version history of these projects, help with teamwork workflow, and offer a safe environment for your files.

# Which the advantages and disadvantages of using Git?

You could see some advantages at this point of the post, but let’s jump on it with more details:

## Performance

You can tell that Git is the best control version system when the fact is a performance. On the core philosophy of the project, we have performance and practicality. Being an open-source project brings more agility to the development to archive the necessities of developers around the world.

## Flexibility

One significant advantage of Git is that you can adapt no linear project formats and still track each brand of the project individually, no matter the size of your project.

## Security

The integrity of one project codebase is one priority on Git. All content, versions, and commits are protected by SHA1. It’s a cryptography hash algorithm that then adds more security against accidental changes or no-accidental ones 😏. Remember that all changes are visible on track.

## Disadvantage

Git also has an essential disadvantage that we have to talk about in this post.

## More complexity

Git can be more complex to understand initially because the workflow can have many possibilities on the combination and code branches.

![](https://fl4v.io/wp-content/uploads/2022/07/git-flow.png)

Another point is that the developer has to understand more how Git works, and it has a considerable learning curve. The developer and the teams have to invest some effort in the learning process because, after it, Git give back on agility and productivity.

# What are repositories, commits and branches?

## Repository

A repository is one directory where you stock your project files, remembering that these files can be code, images, audio, videos, or any files of your project. 
This directory can keep your computer on a local repository or in one remote repository using services like [__GitHub__](https://github.com/), [__BitBucket__](https://bitbucket.org/) or [__GitLab__](https://about.gitlab.com/).

## Branches

To explain branches, it is necessary an example. Imagine that your code is working correctly on production, and you need to develop a new feature. It’s not a good idea to make changes directly in the production environment.

Let’s understand what the branch is for. In the case above, a good option is to create a new branch getting the actual state of that code, creating a new development environment where you can work on your feature without putting de production at risk.

![](https://fl4v.io/wp-content/uploads/2022/07/git-branches-merge.png)

## Commits

A commit is a group of changes that you made on the project, and it marks one version of your code. A commit store files changes, who made these changes and one message to describe these changes.

Each commit has a SHA1 hash that can follow all changes done on the project, creating one timeline. You can come back to any point of this timeline and fix or rewrite your code from there.

# What’s the difference between Git and GitHub?

GitHub is an online platform used to administrate, host code files, and make it easy to create a shared environment between developers. GitHub uses the version control system, Git, making it easy to use Git daily.

Git, as we saw above, is a local version control system to help develop and organize the version history on the project timeline.

# 3 good practices to use Git.

## 1. Make small commits

Don’t wait to commit only when you finish everything. It is a good practice to commit small changes that keep the code working, and it will avoid losing time trying to find an error after writing tons of code.

## 2. Write good commit messages.

The message must be clear and helpful. Therefore, write messages that well describe the changes in your code. Remember that it can help your team or yourself when you return to read or refactor your code months or years later.

## 3. Use .gitignore

It is on file that you create on the roots of your project, using the name **.gitignore**. You can add all folders and files that you want to be ignored by Git on this file. The ignored files and folders added not will be tracked anywhere on your Git timeline.

### .gitignore example:

``` git
# compiled output
/dist
/tmp
/out-tsc

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# IDEs and editors
.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# misc
.sass-cache
connect.lock
typings

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*


# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# next.js build output
.next

# Lerna
lerna-debug.log

# System Files
.DS_Store
Thumbs.db
```

# Conclusion

Git is an essential tool in the dev world nowadays! You can think that is quite tricky on begin, but you will notice that it is much more trick without Git. Besides all this, you don’t need to worry about losing your code if something is getting wrong and you do not figure out how to fix it.

That’s it for now, thank you for reading.
