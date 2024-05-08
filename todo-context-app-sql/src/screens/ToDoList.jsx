import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import ListItems from "../components/containers/ListItems";
import CustomButton from "../components/CustomButton";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Layout from "../components/Layout";
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";



export default function ToDoList({ route, navigation }) {

    const handleSaveButtonPress = () => {
        navigation.navigate('Add New Task')
    }

    const handleGoBackPress = () => {
        navigation.navigate('Home Screen')
    }

    return (
        <Layout>
            <Header onPress={handleGoBackPress} svgIcon={'ArrowLeftIcon'} route={route} height={222} />

            <ListItems />
            <CustomButton onPress={handleSaveButtonPress} buttonText={'Add New Task'} />
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
