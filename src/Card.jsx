import profilePic from './assets/profile_pic.jpg'

function Card(){
    return(
    <div className="card">
        <img className='card-img' src={profilePic} alt="Profile picture"></img>
        <h2 className='card-title'>August</h2>
        <p className='card-text'>Studying and skateboarding</p>
    </div>
    );
}

export default Card