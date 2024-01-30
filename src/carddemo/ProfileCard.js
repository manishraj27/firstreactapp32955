import './style.css'
import profile from './manish.jpeg'

// export default function ProfileCard()
// {
//     const gender = <h4>Gender: Male</h4>  //react element
//     return (
//         <div className="card">
//             <img src={profile} alt="profile" width="50%"/>
//             <h3>ID: 2200032955</h3>
//             <h3>Name: Manish Raj</h3>
//             {gender}
//             <p style={{fontSize:"15pt",color:"red"}}>DEPARTMENT: CSE(HONORS)</p>
//             <p style={{fontWeight:"bold"}}>YEAR: 2</p>
//             <i>manish__raj@outlook.com</i><br/>
//             <i>9430144469</i><br/>
//         </div>
//     )
// }

export default function ProfileCard() {
    const gender = <h4>Gender: Male</h4>; //react element
    return (
        <div className="card">
            <div className="image-container">
                <img src={profile} alt="profile" />
            </div>
            <div className="details-container">
                <h3>ID: 2200032955</h3>
                <h3>Name: Manish Raj</h3>
                {gender}
                <p style={{ fontSize: "15pt", color: "red" }}>DEPARTMENT: CSE(HONORS)</p>
                <p style={{ fontWeight: "bold" }}>YEAR: 2</p>
                <i>manish__raj@outlook.com</i>
                <br />
                <i>9430144469</i>
                <br />
            </div>
        </div>
    );
}
