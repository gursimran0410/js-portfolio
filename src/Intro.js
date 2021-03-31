import { useState } from 'react'
import './Stylesheet/Intro.sass'
function Intro(){
    const [introImage,setUrl] = useState('https://firebasestorage.googleapis.com/v0/b/react-portfolio-e09cb.appspot.com/o/intro.jpg?alt=media&token=8f850377-6bc3-45a8-a5e6-dfc204fbed9a')
    return(
        <div className="intro-container">
            <div className="intro-image">
                <img src={introImage} alt="Intro Image" />
                <div className="intro-name">
                    <div><span className="bold-word">Gursimran</span> Singh</div>
                    <div className="intro-position">Software Engineer</div>
                </div>
            </div>
        </div>
    )
}
export default Intro