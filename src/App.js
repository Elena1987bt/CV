import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="w-[1024px] mx-auto shadow-lg rounded h-auto min-h-screen my-10 rounded">
      <div className="flex rounded ">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
