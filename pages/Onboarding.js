import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#191919", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/img_intro_first.png"),
    title: require("../assets/img_title_intro_first.png"),
  },
  {
    id: "2",
    image: require("../assets/img_intro_second.png"),
    title: require("../assets/img_title_intro_second.png"),
  },
  {
    id: "3",
    image: require("../assets/img_intro_third.png"),
    title: require("../assets/img_title_intro_third.png"),
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", backgroundColor: COLORS.primary }}>
      <Image
        source={item?.image}
        style={{ height: "75%", width, resizeMode: "contain", marginTop: 40 }}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
        }}
      >
        <Image source={item?.title} style={styles.title} />
      </View>
    </View>
  );
};

const Onboarding = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 40,
          backgroundColor: COLORS.primary,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 5,
                  height: 20,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("/")}
                style={styles.btn}
              >
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/icons/ic_intro_next.png")}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("../assets/icons/ic_intro_next.png")}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.btn,
          {
            backgroundColor: "transparent",
            position: "absolute",
            top: 30,
            left: 30,
            zIndex: 10,
          },
        ]}
        onPress={skip}
      >
        <Text
          style={{
            fontSize: 14,
            color: COLORS.white,
          }}
        >
          SKIP
        </Text>
      </TouchableOpacity>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 350,
    resizeMode: "contain",
    height: 80,
    marginTop: 40,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    width: 5,
    height: 20,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Onboarding;
