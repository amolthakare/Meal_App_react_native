import { FlatList, StyleSheet, View } from "react-native"
import { CATEGORIES } from "../data/dummyData"
import CategoriesGrid from "../components/CategoriesGrid"

function CategoriesScreen({navigation}){
    function categoryrender(elem){
        function pressHandler(){
            navigation.navigate('MealsOverview');
        }
        return (
            <CategoriesGrid onPress={pressHandler} title={elem.item.title} color={elem.item.color}/>
        )
    }
    return (
            <FlatList
                data={CATEGORIES}
                renderItem={categoryrender}
                keyExtractor={(elem)=> elem.id}
                numColumns={2}
            />
    )
}
export default CategoriesScreen

