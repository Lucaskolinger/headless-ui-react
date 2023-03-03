import data from "assets/data.json";

export default function DataTest() {
  return data.map((e) => <li>{e.time}</li>);
}
