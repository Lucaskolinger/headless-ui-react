import TabExample from "comp/TabExample";
import DataTest from "comp/DataTest";

export default function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-start bg-gradient-to-r from-red-500 to-red-700 ">
      <TabExample />
      {/* <DataTest /> */}
    </div>
  );
}
