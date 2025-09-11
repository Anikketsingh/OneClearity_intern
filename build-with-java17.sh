#!/bin/bash

# Build APK script using Java 17
echo "🚀 Building APK with Java 17..."

# Check if Java 17 is available
if command -v java17 &> /dev/null; then
    echo "✅ Java 17 found"
    export JAVA_HOME=$(java17 -XshowSettings:properties -version 2>&1 | grep "java.home" | cut -d'=' -f2 | tr -d ' ')
elif [ -d "/opt/homebrew/opt/openjdk@17" ]; then
    echo "✅ Java 17 found in Homebrew"
    export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
elif [ -d "/usr/lib/jvm/java-17-openjdk" ]; then
    echo "✅ Java 17 found in system"
    export JAVA_HOME="/usr/lib/jvm/java-17-openjdk"
else
    echo "❌ Java 17 not found. Please install it first:"
    echo "   brew install openjdk@17"
    exit 1
fi

export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools
export NODE_ENV=development

echo "📱 Using Java version:"
java -version

echo "🔨 Building APK..."
cd android

./gradlew clean
./gradlew assembleDebug

if [ $? -eq 0 ]; then
    echo "✅ APK build successful!"
    echo "📁 APK location: android/app/build/outputs/apk/debug/app-debug.apk"
    ls -la app/build/outputs/apk/debug/
else
    echo "❌ APK build failed with Java 17"
    echo "💡 Try using EAS Build instead: eas build --platform android --profile preview"
fi
