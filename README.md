# React Router v6 - Nested Route useParams Issue

This repository demonstrates a common error encountered when using nested routes with React Router v6's `useParams` hook.  The issue arises when a child route attempts to use `useParams` and incorrectly inherits parameters from its parent route rather than receiving its own route parameters.

## Problem
In nested routes, if a child component uses `useParams`, it might inadvertently access parameters from its parent route's URL instead of its own. This causes unexpected data or rendering issues. 

## Solution
The solution involves ensuring that each route component uses `useParams` to access only its own parameters.  This can often be achieved by carefully structuring the routes and ensuring parameter names are unique within the nesting hierarchy.