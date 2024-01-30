export default function TestFunction2(props) 
{
    return(
        <div>
            <h3>props demo2 using Functional Component</h3>
            {props.location}<br/>
            <h4>Student Object</h4>
            ID: {props.student.id}<br/>
            Name: {props.student.name}<br/>
            STATUS: {props.student.status}<br/>
        </div>
    )
}