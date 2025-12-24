# Mihon JS Image Fix

A lightweight JavaScript bookmarklet and script for **Mihon** that rewrites image URLs from `//k` to `//n` and removes referrer info.

## Features
- Automatically updates images on Mihon pages
- Sets `referrerPolicy` to `no-referrer`
- Runs every 2 seconds to catch new images
- Only runs on Mihon domain

## Usage (Bookmarklet)
1. Copy the code from `bookmarklet/bookmarklet.js`
2. Create a new browser bookmark
3. Paste the code into the URL field
4. Click the bookmark while on a Mihon page

## Development
Readable source code is in: