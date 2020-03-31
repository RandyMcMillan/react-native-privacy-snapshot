import { NativeModules, Platform } from "react-native";
let { PrivacySnapshot } = NativeModules;
const show = () => Platform.OS === "ios" && PrivacySnapshot._show(true);
const hide = () => Platform.OS === "ios" && PrivacySnapshot._show(false);
const enabled = enable =>
  Platform.OS === "ios" && PrivacySnapshot.enabled(enable);
export { show, hide, enabled };
