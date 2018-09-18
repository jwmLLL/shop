import {
  appPost
} from "./request";
export const login = (code) => {
  return appPost('/login', {
    code: code
  });
}
