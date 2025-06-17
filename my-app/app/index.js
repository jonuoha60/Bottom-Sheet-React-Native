import { Text, View, StyleSheet, TouchableOpacity, } from "react-native";
import { Stack } from "expo-router";
import React, { useState } from "react";
import BottomSheet from '../components/BottomSheet.jsx'; // Adjust path if needed


const SheetContent = ({ close }) => {



  return(
  <View style={styles.sheetContent}>
    <Text style={styles.sheetTitle}>Hello this is the bottom sheet</Text>
      <TouchableOpacity key={user} style={styles.option} onPress={close}>
        <Text style={styles.optionText}>Close Sheet</Text>
      </TouchableOpacity>
  </View>
  )
};

export default function Index() {

  const [sheetHeight, setSheetHeight] = useState(420); // default height
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [sheetContent, setSheetContent] = useState(null);

 const openBottomSheet = (contentKey, height = 420) => {
    setSheetContent(contentKey);
    setSheetHeight(height);
    setIsSheetVisible(true);
  };

    const closeBottomSheet = () => {
    setIsSheetVisible(false);
    setSheetContent(null);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen name="index" options={{ headerShown: false }} />



<TouchableOpacity
                    onPress={(e) => {
                      e.stopPropagation();
                      openBottomSheet('sheet', 300);
                    }}
                  >      
                    <Text style={styles.linkText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

       <BottomSheet
          visible={isSheetVisible}
          height={sheetHeight}
          styles={styles}
          onClose={closeBottomSheet}
        >

           {sheetContent === 'sheet' && (
            <SheetContent close={closeBottomSheet} />
          )}
        </BottomSheet>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    backgroundColor: isDarkMode ? '#0a0908' : '#f7f9fc',
  },

});
