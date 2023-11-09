import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="w-[1024px]  mx-auto md:my-10  shadow-2xl rounded h-auto min-h-screen  ">
      <div className="flex rounded  ">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
