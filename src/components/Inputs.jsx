import './Profile.css'
export default function Inputs({label, type, onChange}){



    return(
        <div>
            <label>{label}</label>
            <input type={type} onChange={onChange}/>
        </div>
    )
}