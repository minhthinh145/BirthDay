#!/bin/bash

# Navigate to project directory
cd /d/BIRTHDAY/BirthDay

# Add new remote
git remote add new-origin https://github.com/minhthinh145/Birthhhhhhh.git

# Stage all changes
git add .

# Commit changes
git commit -m "Simplified to only Final component with confetti effects"

# Push to new repository
git push new-origin main

# Navigate to birthday subfolder
cd birthday

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy

echo "Deployment completed! Your site should be available at: https://minhthinh145.github.io/Birthhhhhhh"
