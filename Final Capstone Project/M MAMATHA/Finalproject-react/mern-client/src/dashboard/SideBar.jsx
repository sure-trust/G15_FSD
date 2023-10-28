import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profile1.png";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <Sidebar aria-label="Sidebar with content separator example">
       <Sidebar.Logo
        href="#"
        img={user?.photoURL}
        imgAlt="Flowbite logo"
      >
        <p>
          {
         user?.displayName || "Demo users"
          }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            <p>
              UpLoad Book
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
          >
            <p>
              Manage Books
            </p>
          </Sidebar.Item>
          
         
          <Sidebar.Item
            href="/login"
            icon={HiArrowSmRight}
          > 
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/logout"
            icon={HiTable}
          >
            <p>
              Log Out
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar