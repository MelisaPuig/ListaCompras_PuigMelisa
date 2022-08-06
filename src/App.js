import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaViewBase,
} from "react-native";
import { CustomInput, CustomModal, AddItem } from "./components/index";

export default function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const inputvalue = item.trim();

  const onChangeText = (HOLA) => {
    setItem(HOLA);
  };

  const addItem = () => {
    if (inputvalue) {
      setItemList([
        ...itemList,
        {
          id: itemList.length + 1,
          value: item,
        },
      ]);
      setItem("");
    }
  };

  const onDeleteItem = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => (
    <AddItem item={item} onHandlerModal={onHandlerModal} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        item={item}
        onChangeText={onChangeText}
        placeholder="Enter item"
        onPressButton={addItem}
        inputvalue={inputvalue}
      />
      <View style={styles.itemList}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style
        />
      </View>
      ¡<CustomModal animationType="slide" visible={modalVisible}></CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  itemList: {
    backgroundColor: "#fff",
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },

  modalContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 14,
  },
  modalItem: {
    fontSize: 15,
    color: "#7D8CC4",
    fontWeight: "bold",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
