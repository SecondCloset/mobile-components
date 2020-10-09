import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      "Mobile Components": "",
      NotFound: "*",
    },
  },
};
