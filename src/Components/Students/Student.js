import './Student.css'

function Student(props){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.mobile}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}

export default Student;