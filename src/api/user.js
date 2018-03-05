import http from "./http";

export default function getUser() {
  // fetch user data

  return http({
    url: "/user",
    method: "get"
  });
}
