export default function TestFunction3(props)
{
    return(
        <div>
            <h3>props demo3 using Functional Component</h3>
            
            {/* {
                
                props.mycities.map( (city) => (
                    <p>{city}</p>
                ) )
            } */}

            <ol>
                {
                    props.mycities.map( (city,index) => (
                        <li key={index}>{city}</li>
                    ))
                }
            </ol>


        </div>
    )
}