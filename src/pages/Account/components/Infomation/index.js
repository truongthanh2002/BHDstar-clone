import "./style.css";
import InfomationTop from "../InfomationTop";
import InfomationBottom from "../InfomationBottom";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Infomation = ({users, isLogin }) => {
  const [user ,setUser] =useState({})

  useEffect(()=>{
    const handleFetchUserLogin = ()=>{
      const token = Cookies.get("token")
      const userLogin = users.find(user => user.code === token)
      if (!!userLogin){
        setUser(userLogin)
      }
      
    }
    handleFetchUserLogin()
  },[users])
  
  return (
    <div className="infomation">
      <InfomationTop user={user} isLogin={isLogin}/>
      <InfomationBottom user={user}/>
    </div>
  );
};

export default Infomation;
