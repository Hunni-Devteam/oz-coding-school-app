import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World!</Text>
      <Link href={"/calendar"} style={styles.link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#25292e'
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})