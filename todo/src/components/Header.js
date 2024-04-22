import { Pressable, StyleSheet, View } from "react-native";
import Typography from "./Typography";

function Header({ icon: Icon, text, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.icon}>
        <Icon style={styles.icon} />
      </Pressable>
      <View style={styles.textContainer}>
        <Typography
          text={text}
          color={"#FFFFFF"}
          fontWeight={600}
          fontSize={16}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    marginVertical: 24,
    paddingRight: 48,
  },
  icon: {
    height: 48,
    width: 48,
  },
  textContainer: {
    flex: 1,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default Header;
