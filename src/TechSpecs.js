import React from 'react';
import './App.css';

function TechSpecs () {
    return(
        <div className="extraSpace">
            <ul className="infoGeneral">
                  <li>React</li>
                  <ul>
                    <li>Component</li>
                    <ul>
                      <li>Functional</li>
                      <ul>
                        <li>Hooks</li>
                        <ul>
                          <li>useState</li>
                          <li>useEffect</li>
                          <li>useLayoutEffect</li>
                        </ul>
                      </ul>
                      <li>Classes</li>
                      <ul>
                        <li>Constructor</li>
                        <li>Lifecycle methods</li>
                        <ul>
                          <li>componentDidMount</li>
                        </ul>
                      </ul>
                    </ul>
                  </ul>
                  <li>React Native</li>
                  <ul>
                    <li>React Navigation</li>
                    <ul>
                      <li>NavigationContainer</li>
                      <li>CreateStackNavigator</li>
                      <ul>
                        <li>Stack.Navigator</li>
                        <li>Stack.Screen</li>
                      </ul>
                      <li>CommonActions</li>
                      <ul>
                        <li>reset</li>
                      </ul>
                      <li>SetOptions</li>
                    </ul>
                    <li>FlatList</li>
                      <ul>
                        <li>listHeaderComponent</li>
                        <li>renderItem</li>
                      </ul>
                    <li>View, Stylesheet, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button</li>
                    <li>React Native Elements</li>
                  </ul>
                  <li>Expo.io</li>
                  <li>Firebase</li>
                  <ul>
                    <li>Firestore Database</li>
                    <li>Authentication</li>
                    <ul>
                      <li>Google</li>
                    </ul>
                  </ul>
                </ul>
        </div>
    )
}

export default TechSpecs;