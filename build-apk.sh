#!/bin/bash

# Build APK script for OneClarityDashboard
# This script attempts to build the APK with various workarounds for CMake issues

echo "🚀 Starting APK build process..."

# Set environment variables
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools
export NODE_ENV=development

# Navigate to android directory
cd android

echo "📱 Building APK with CMake workarounds..."

# Try to build with various workarounds
./gradlew assembleDebug \
  --no-daemon \
  --stacktrace \
  -Dorg.gradle.jvmargs="-Xmx2048m -XX:MaxMetaspaceSize=512m --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.text=ALL-UNNAMED --add-opens=java.desktop/java.awt.font=ALL-UNNAMED" \
  -Dandroid.enableJetifier=true \
  -Dandroid.useAndroidX=true \
  --warning-mode all

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ APK build successful!"
    echo "📁 APK location: android/app/build/outputs/apk/debug/app-debug.apk"
    ls -la app/build/outputs/apk/debug/
else
    echo "❌ APK build failed. Trying alternative approach..."
    
    # Try building without CMake tasks
    echo "🔄 Attempting build without CMake tasks..."
    ./gradlew assembleDebug \
      --no-daemon \
      -x :expo-modules-core:configureCMakeDebug \
      -x :react-native-screens:configureCMakeDebug \
      -x :react-native-worklets:configureCMakeDebug \
      -Dorg.gradle.jvmargs="-Xmx2048m -XX:MaxMetaspaceSize=512m --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.text=ALL-UNNAMED --add-opens=java.desktop/java.awt.font=ALL-UNNAMED"
    
    if [ $? -eq 0 ]; then
        echo "✅ APK build successful (without CMake tasks)!"
        echo "📁 APK location: android/app/build/outputs/apk/debug/app-debug.apk"
        ls -la app/build/outputs/apk/debug/
    else
        echo "❌ All build attempts failed."
        echo "💡 Suggestions:"
        echo "   1. Try using Java 17 or Java 21 instead of Java 24"
        echo "   2. Update Android Gradle Plugin version"
        echo "   3. Use EAS Build (cloud build) instead"
        echo "   4. Remove problematic native dependencies temporarily"
    fi
fi
