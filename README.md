Git Rebase Sample Project
=========================

This repository contains a sample application that was written using chat-gpt.
However, the point of the repository is not about the application itself, it's about the git history and being able to leverage it to get the right code in the right place at the right time.

One of the key aspects of this repository is the ability to push the changes you make to a remote. For this reason, it's best to fork your own copy of this repository and clone that to your development environment.

## Excercises

1. **Remove the password.**
A password was committed into the history early on. Use git to remove the commit that added this password to make it look like that never happened in the first place. Whilst this doesn't remove the password from anyone elses copy of the repository (we should still consider this password compromised), it makes our history look cleaner.

1. **Move weather feature onto its own branch.**
Let's imagine the weather feature is something we don't want to release yet. Perhaps it relies on the 3rd party api that isn't completed. To remove risk of the weather module impacting any live code, we can move its entire implementation into a separate branch using git rebase.

1. **Merge in the scheduler**
The new scheduler feature has not been merged yet. You can practice with different ways of merging it. Merge with and without the weather feature. With and without a rebase. Etc.

## Problems

There are 2 main problems that will need to be addressed during these exercises.

1. **The bad rebase**
The logger function was rebased onto main before being merged. That rebase operation went wrong in a very common way. This issue will need to be addressed in one way or another for any of the history re-writing to be accomplished.

1. **The combined commit**
Whilst this wasn't a mistake or a problem when it was committed, if we want the weather module to live on its own branch, there is a commit that affects both the weather module and another module at the same time. This will need to be split before we can successfully isolate the feature onto its own branch.
