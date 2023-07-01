import  '../stylesheets/homepage.css'
import IconTextHeader from './HeadersHomePage';

const HomePage = ()=>{
    return (
       <>
        <div className='header'>
           <IconTextHeader text={"Article"} imageName='linkedIn' margin = '10px'/>
           <IconTextHeader text={"People"} imageName='linkedIn' margin = '10px'/>
           <IconTextHeader text={"Learning"} imageName='linkedIn' margin = '10px'/>
           <IconTextHeader text={"Jobs"} imageName='linkedIn' margin = '10px'/>

        </div>
        <div>

        </div>
       </>
    );
}


export default HomePage