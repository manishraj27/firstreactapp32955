export default function TestFunction1(props)
{
    return (
        <div>
            <h3>props demo1 using Functional Component</h3>
            ID: {props.id}<br/>
            NAME: {props.name}<br/>
            AGE: {props.age}<br/>
        </div>
    )
}