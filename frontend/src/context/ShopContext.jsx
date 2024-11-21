import { createContext, useRef, useState } from "react";
export const ShopContext = createContext();
import gsap from 'gsap';
import { assets } from "../assets/assets";
const ShopContextProvider = (props)=>{

    const header = useRef();
    const bodyPop = useRef();
    const [profileData, setProfileData] = useState({});
    const [showUserProfile, setShowUserProfile] = useState("hidden right-[150%]");
    const [name,setName] = useState("******************");
    const [email,setEmail] = useState("******************");
    const [password,setPassword] = useState("******************");
    const [AccDate, setAccDate] = useState('*************');
    const [currentPass, setCurrentPass] = useState('');
    const [disableDetailsBtn, setDisableDetailsBtn] = useState("bg-transparent text-black");
    const [disable, setDisable] = useState(false);
    const toastAnim = useRef();
    
    const [notifi , setNotifi] = useState([]);

    let Prodata = null
    let notification;

    const ShowProfile = (type)=>{

        switch(type){

            case "Huzaifa":
                Prodata = {
                    name:"Muhammad Huzaifa",
                    skill:"Web developer",
                    img:assets.Huzaifa_small,
                    email:"huzaifaktk0905@gmail.com",
                    number:"+92 323 5709342",
                    location:"Attock Kamra",
                    certificate:assets.HuzaifaCertificate,
                    certificate2:assets.HCertificate2,
                    certificate3:assets.HCertificate3
                };
                break;

            case "Maaz":
                Prodata = {
                    name:"Muhammad Maaz",
                    skill:"3d Artist",
                    img:assets.Maazi,
                    email:"maazktk2004@gmail.com",
                    number:"+92 323 5709342",
                    location:"Attock Kamra",
                    certificate:assets.MaaziCertificate
                };
                break;

            case "Umer":
                Prodata = {
                    name:"Umer Abbasi",
                    skill:"Graphic Designer",
                    img:assets.Umer,
                    email:"umerabbasi@gmail.com",
                    number:"+92 315 5410809",
                    location:"Attock Kamra",
                    certificate:assets.UmerCertificate,
                };
                break;
            
            case "Daniyal":
                Prodata = {
                    name:"Daniyal Baloch",
                    skill:"Video Editor",
                    img:assets.Daniyal,
                    email:"daniyalbaloch220@gmail.com",
                    number:"+92 324 0963112",
                    location:"Attock Kamra",
                    certificate:assets.DaniyalCertificate
                };
                break;    

            default:
                Prodata = {result:"no data found"} 
        }
        setProfileData(Prodata)
        gsap.fromTo(bodyPop.current,{display:"none",opacity:0},{display:"flex",opacity:1,duration:0.8});
    }
    const HideProfile = ()=>{
        gsap.fromTo(bodyPop.current,{display:"flex",opacity:1},{display:"none",opacity:0,duration:0.8})
    }

    const ShowNotification = async(type,error)=>{
        const userName = await JSON.parse(localStorage.getItem("user"))
        switch(type){
            case "registerError":
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:error,
                    color:"text-red-800"
                };
                break;
            case "registered":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-check",
                    msg:"Account registered! please login",
                    color:"text-green-800"
                };
                break;

            case "LoginError":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:error,
                    color:"text-red-800"
                };
                break;
            case "LoginUser":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-check",
                    msg:`Welcome! ${userName}`,
                    color:"text-green-800"
                };
                break;
            case "LogoutUser":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:`You are Logged out!`,
                    color:"text-red-800"
                };
                break;

            case "forgetPass":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-triangle-exclamation",
                    msg:`This feature is not available right now !`,
                    color:"text-yellow-600"
                };
                break;

            case "EmailSent":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-check",
                    msg:error,
                    color:"text-green-800"
                };
                break;
            
            case "EmailError":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-check",
                    msg:error,
                    color:"text-green-800"
                };
                break;

            case "emailEmpty":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-triangle-exclamation",
                    msg:"Please fill the form correctly!",
                    color:"text-yellow-600"
                };
                break;

            case "emailLoginError":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:"Please login to continue!",
                    color:"text-red-800"
                };
                break;

            case "accountFind":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-check",
                    msg:"Correct password you can see you details!",
                    color:"text-green-800"
                };
                break;

            case "tryAgain":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:`Incorrect password! Please enter correct password `,
                    color:"text-red-800"
                };
                break;

            case "securityLogout":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-circle-xmark",
                    msg:`You are logged out because of security purpose! please login again`,
                    color:"text-red-800"
                };
                break;

            case "opps":   
                notification = {
                    id:notifi.length+1,
                    icon:"fa-triangle-exclamation",
                    msg:`Opp's something went wrong! please login again`,
                    color:"text-yellow-600"
                };
                break;
            }
            setNotifi([...notifi,notification])
            // gsap.to(toastAnim.current,{left:"0%",opacity:1,ease:"bounce.out",duration:0.8})
    }

    const DisplayUserProfile = ()=>{
        setShowUserProfile("block right-[0%]")
    }

    const HideUserProfile = ()=>{
        setShowUserProfile("hidden right-[100%]");
        setName("******************");
        setEmail("******************");
        setPassword("******************");
        setAccDate('*************');
        setCurrentPass("");
        setDisableDetailsBtn("bg-transparent text-black");
        setDisable(false)
    }

    const value = {
        header,
        bodyPop,
        ShowProfile,
        HideProfile,
        profileData,
        ShowNotification,
        notifi,
        toastAnim,
        setNotifi,
        showUserProfile,
        DisplayUserProfile,
        HideUserProfile,
        name,setName,
        email,setEmail,
        password,setPassword,
        currentPass, setCurrentPass,
        disableDetailsBtn, setDisableDetailsBtn,
        disable, setDisable,
        AccDate, setAccDate
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;