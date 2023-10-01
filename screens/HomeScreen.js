import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import {
  ModalPortal,
  BottomModal,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from "react-native-modals";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  console.log(selectedDates);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "HLBooking.vn",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        containerStyle={{ width: "80%", marginHorizontal: "3%" }}
        titleStyle={{ fontSize: 20 }}
        title="Select"
      />
    );
  };
  return (
    <>
      <View>
        <Header />
        <ScrollView
          style={{
            margin: 20,
            borderColor: "#FFC72C",
            borderRadius: 3,
            borderWidth: 6,
          }}
        >
          <View>
            <Pressable
              style={{
                flexDirection: "row",
                alignContent: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              {/*Destination*/}
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder="Enter your Hotel Favourite" />
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignContent: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              {/*Selected Date */}
              <Feather name="calendar" size={24} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectedBgColor="#0047AB"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false}
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
                mode={"range"}
              />
            </Pressable>
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)} //
              style={{
                flexDirection: "row",
                alignContent: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              {/*Rooms and Guests*/}
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput placeholder="1 room * 2 adults * 0 children" />
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#2352BE",
              }}
            >
              {/* Search Button*/}
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirections={["up", "down"]}
        footer={<ModalFooter></ModalFooter>}
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}></ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
