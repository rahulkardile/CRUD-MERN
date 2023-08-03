import{ useState } from 'react'
import { useNavigate } from "react-router-dom"

export const Create = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate();
    
    const handleSubmit = async (e)=> {
        e.preventDefault();
        const addUser = {name, email, age}

        const response = await fetch("http://localhost:5000", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers:{
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        if(!response.ok){
            console.log(result.error);
            setError("Error Found Cant Inset Data");
        }
        if(response.ok){
            console.log(result);
            setError("");
            setName("");
            setEmail("");
            setAge("");
            navigate("/all")
        }
    }

    console.log(name, email, age);
    return (
        <div className='container my-2'>
        {error && <div className="alert alert-danger">{error}</div>}
            <h2 className='text-center'>Enter Data</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" value={age} onChange={(e)=> setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
