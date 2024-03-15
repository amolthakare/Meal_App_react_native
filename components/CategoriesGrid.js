import { Pressable, StyleSheet, Text, View } from "react-native";
function CategoriesGrid({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{color:'ccc'}}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
            <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow:'hidden',
  },
  button:{
    flex:1,
  },
  buttonPressed:{
    opacity:0.5,
  },
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  }
});
