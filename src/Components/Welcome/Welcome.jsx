import './Welcome.css'
import main_image from '../../assets/choice-worker-concept-illustrated.png'
const Welcome = () => {
    return (
        <div className="Welcome">
            <div className="left">
                <h1>Just three simple steps</h1>
                <ul className="steps">
                    <li><span className='list-numbered'>1</span><p><b>Select</b> a template from the library of our professional designs.</p></li>
                    <li><span className='list-numbered'>2</span><p><b>Build</b> your resume with our industry-specific bullet points</p></li>
                    <li><span className='list-numbered'>3</span><p><b>Customize</b> the details and wrap it up. You’re ready to send!</p></li>
                </ul>
            </div>
            <div className="right">
                <img className="welcome-image" src={main_image} alt=""/>
                <button className="btn">Next</button>
            </div>
        </div>
    )
}

export default Welcome;