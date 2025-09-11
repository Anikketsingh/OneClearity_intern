#!/bin/bash

# Script to temporarily remove problematic native dependencies
echo "🔧 Temporarily removing problematic native dependencies..."

# Backup package.json
cp package.json package.json.backup

# Remove problematic dependencies
npm uninstall react-native-worklets react-native-reanimated

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install

echo "✅ Dependencies removed. You can now try building:"
echo "   cd android && ./gradlew assembleDebug"
echo ""
echo "To restore dependencies later:"
echo "   mv package.json.backup package.json && npm install"
