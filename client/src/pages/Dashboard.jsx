import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";

function Dashboard() {
  const loacation = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(loacation.search);
    const tabFromUrl = urlParams.get("tab");
    // console.log(tabFromUrl);
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [loacation.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSideBar />
      </div>
      <div className="">
      {
        tab === 'profile' &&  <DashProfile />
      }
      </div>
    </div>
  );
}

export default Dashboard;
