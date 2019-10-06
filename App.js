import React from "react";
import { StyleSheet, View, Image, Linking } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Footer,
  FooterTab,
  Button,
  Text,
  Body
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem header>
            <Image
              source={require("./assets/header-text.png")}
              style={{ height: 75, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                <Image
                  source={require("./assets/React.jpg")}
                  style={{ height: 150, width: 325, flex: 1 }}
                />
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>React Native</Text>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={() => Linking.openURL("https://gmail.com")}>
            <Icon name="google" />
          </Button>
          <Button onPress={() => Linking.openURL("https://facebook.com")}>
            <Icon name="facebook" />
          </Button>
          <Button onPress={() => Linking.openURL("googlemaps://")}>
            <Icon name="map-pin" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
