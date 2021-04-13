import React from "react";
import {View, Text, Button, ScrollView} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

const Chessboard = () => {
    return(
        <View style={{flex:1, 
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center",
                    alignItems: "center"}}>
            <Text style={{color: "#847876", 
                        fontSize: 25, fontWeight: "bold", 
                        textDecorationLine: "underline",
                        textTransform: "uppercase", 
                        marginVertical: 40}}>
                            Chess Board
            </Text>
            <View style={{
                        borderWidth: 4,
                        borderColor: "#20232a",
                        borderRadius: 6,}}>
                            {renderChessMap()}
            </View>
            <Text style={{color: "#FF745C", 
                        fontSize: 15, fontWeight: "bold",
                        fontStyle: "italic",
                        marginVertical: 40}}>
                            By: Jhon Rhay Parreño
            </Text>
        </View>
        
    );
};
const renderChessMap = () => {
    let boardMap = [];
    let num = 1;
    var hasChangeColor = true;
    for (let i = 1; i <= 8; i++) {
        var children = [];
        for (let j = 1; j <= 8; j++) {
            children.push(
                    <View key={num++} style={{backgroundColor:hasChangeColor ? "white" : "black", width: 40, height:40}}></View>
            );
            hasChangeColor = !hasChangeColor;
        }
        if (i % 2 == 0){
            children = children.reverse();
        }
        boardMap.push(
            <View key={i} style={{flexDirection: "row"}}>
                {children}
            </View>
        );
    }
    return boardMap;
}
export default Chessboard;