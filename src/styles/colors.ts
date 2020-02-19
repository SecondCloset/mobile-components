interface Colors {
  APPLE_BLUE: string;
  BLACK: string;
  BLUE: string;
  CHARCOAL: string;
  ORANGE: string;
  GREEN: string;
  LIME_GREEN: string;
  GREY: string;
  GREY_LIGHT: string;
  GREY_MID: string;
  RED: string;
  YELLOW: string;
  YELLOW_LIGHT: string;
  WHITE: string;
  TRANSPARENT: string;
  TRANSPARENT_GREY: string;
  APP_BACKGROUND: string;
  [index: string]: string;
}

const colors: Colors = {
  APPLE_BLUE: "#007AFF",
  BLACK: "#000000",
  BLUE: "#4A90E2",
  CHARCOAL: "#404041",
  ORANGE: "#F5A623",
  GREEN: "#37BC9B",
  LIME_GREEN: "#49DB86",
  GREY: "#9B9B9B",
  GREY_LIGHT: "#EEEEEE",
  GREY_MID: "#D5D5D5",
  RED: "#FF3A52",
  YELLOW: "#FFD33D",
  YELLOW_LIGHT: "#FFECAD",
  WHITE: "#FFFFFF",
  TRANSPARENT: "transparent",
  TRANSPARENT_GREY: "rgba(0,0,0,0.25)",
  APP_BACKGROUND: "#FBFBFB",
};

export default colors;
