import { StyleSheet, ImageBackground } from 'react-native';
import FeedPage from "./src/pages/FeedPage";

const image = {uri: 'https://png.pngtree.com/background/20220727/original/pngtree-topographic-map-background-of-mountain-terrain-picture-image_1831709.jpg'};

export default function App() {
  return (
    <ImageBackground style={styles.container} source={image}>
      <FeedPage/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
