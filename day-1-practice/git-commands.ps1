# Week 1 Day 1 - Git Practice Commands

# Check current branch and working tree
git status

# View recent commits
git log --oneline -10

# View available branches
git branch

# Create and switch to a feature branch
git switch -c feature-practice

# Create a practice file
Set-Content .\practice.txt -Value "Git practice"

# Stage and commit
git add .\practice.txt
git commit -m "Add Git practice file"

# Switch back to main
git switch main

# Merge the feature branch
git merge feature-practice

# Check final status
git status

# View commit history
git log --oneline -5
