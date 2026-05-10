#!/bin/bash

# DRZ Web - Setup Script
# This script helps you set up the website with all required files

echo "🚀 DRZ Web - Setup Assistant"
echo "============================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the drzweb directory."
    exit 1
fi

echo "✅ Found index.html"

# Create assets directory if it doesn't exist
if [ ! -d "assets" ]; then
    echo "📁 Creating assets directory..."
    mkdir -p assets
else
    echo "✅ assets directory exists"
fi

# Check for required files
echo ""
echo "Checking for required media files:"
echo ""

if [ -f "drz.jpg" ]; then
    echo "✅ Found drz.jpg"
    cp drz.jpg assets/
    echo "   → Copied to assets/drz.jpg"
else
    echo "⚠️  Missing: drz.jpg (please add your profile image)"
fi

if [ -f "logo.png" ]; then
    echo "✅ Found logo.png"
    cp logo.png assets/
    echo "   → Copied to assets/logo.png"
else
    echo "⚠️  Missing: logo.png (please add your logo)"
fi

# Download hover sound
echo ""
echo "Setting up hover sound..."
if [ ! -f "assets/hover-sound.mp3" ]; then
    echo "📥 Downloading hover sound effect..."
    cd assets
    wget -q https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3 -O hover-sound.mp3 2>/dev/null
    if [ -f "hover-sound.mp3" ]; then
        echo "✅ Downloaded hover-sound.mp3"
    else
        echo "⚠️  Could not download sound. You can add it manually."
    fi
    cd ..
else
    echo "✅ hover-sound.mp3 exists"
fi

# Check file structure
echo ""
echo "File Structure:"
echo "==============";
tree -L 2 2>/dev/null || find . -maxdepth 2 -type f -o -type d | head -20

echo ""
echo "✨ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Test locally: python3 -m http.server 8000"
echo "2. Open: http://localhost:8000"
echo "3. Update URLs in index.html (replace example.com with your domain)"
echo ""
