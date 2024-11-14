import React from 'react'
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'

function DashSideBar() {
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
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab==='profile'} icon={HiUser} label={'User' } labelColor='dark'>
                    Profile
                </Sidebar.Item>

                </Link>
               
                <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'  >
                    Sign out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>


    </Sidebar>
  )
}

export default DashSideBar
