# React Native App
<h2> Installation dependencies </h2> <br />
1. Node <br />
2. Java Development Kit (JDK) <br />
3. Android studio <br />

<h3> Node  </h3> <br />
Follow the installation instructions to install Node  <br />

<code> curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash - </code>  <br />
<code> sudo apt-get install -y nodejs </code>  <br />

<h3> Java Development Kit </h3> <br />
React Native requires version 8 of the Java SE Development Kit (JDK). <br />
Go through the link given below to install JDK.  <br />
https://www.javahelps.com/2015/03/install-oracle-jdk-in-ubuntu.html

<h3> Android development environment </h3>  <br />
1.Download Android studio from https://developer.android.com/studio/index.html   <br />

  Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are    checked: <br />
  * Android SDK
  * Android SDK Platform
  * Android Virtual Device 
<br />
2.Download Android SDK   <br />

  React native app requires the Android 9 (Pie) SDK <br />

  "Welcome to Android Studio" screen -> Configure -> SDK Manager -> SDK Platforms ->  check Show Package Details <br />
  
  Check the box and install following things <br />
  - Android SDK Platform 28
  - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image <br />

3.Configure the ANDROID_HOME environment variable    <br />
Add the following lines to your .bashrc config file:
* export ANDROID_HOME=$HOME/Android/Sdk <br /> 
* export PATH=$PATH:$ANDROID_HOME/emulator <br />
* export PATH=$PATH:$ANDROID_HOME/tools <br />
* export PATH=$PATH:$ANDROID_HOME/tools/bin <br />
* export PATH=$PATH:$ANDROID_HOME/platform-tools  <br />


<h3>  Create new project </h3>  <br />
 <code> npx react-native init ProjectName </code> <br />
 
 
 Prepare the Android device using https://facebook.github.io/react-native/docs/running-on-device  <br />
 
<h3> Run the project </h3> <br />
<code> cd ProjectName </code> <br />
<code> npx react-native run-android </code>  <br />



