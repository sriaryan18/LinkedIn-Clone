import getImage from "../utils/GetImage";
const IconTextHeader = ({imageName,text,margin})=>{

    const onClick = ()=>{
        console.log("I am clicked")
    }
  const pic = getImage(imageName);
    return(
        <div onClick = {onClick}style={{margin,cursor:'pointer'}}>
         <img src={pic}/>
         <h3>{text}</h3>
        </div>
       
    )
}

export default IconTextHeader;  