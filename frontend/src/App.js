import {useState} from "react";
import axios from "axios";

function App() {
    const [value,setValue] = useState('');
    const [result, setResult] = useState({});

    const url = 'localhost:2000/generate';

    const onOdd = () => {
        axios.post(`${url}/odd`, {value})
            .then((res) => {
                if(res?.success) {
                    setResult(res?.data);
                }
                else {
                    setResult(res?.message);
                }
                console.log(res)
            })
            .catch((err) => {

            })
    }

    const onTriangle = () => {
        axios.post(`${url}/triangle`, {value})
            .then((res) => {
                if(res?.success) {
                    setResult(res?.data);
                }
                else {
                    setResult(res?.message);
                }
                console.log(res)
            })
            .catch((err) => {

            })
    }

    const onPrime = () => {
        axios.post(`${url}/prime`, {value})
            .then((res) => {
                if(res?.success) {
                    setResult(res?.data);
                }
                else {
                    setResult(res?.message);
                }
                console.log(res)
            })
            .catch((err) => {

            })
    }
    return (
        <>
                <div>
                    <label>
                        Masukan sebuah angka :
                    </label>
                    {/*Type text karena di validasi di frontend dan backend*/}
                    <input id="value" type="text" placeholder="Input Angka" onChange={(e) =>  setValue(e.target.value)}/>
                </div>
                <div className="button-area" >
                    <button onClick={onTriangle}>
                        Generate Segitiga
                    </button>
                    <button onClick={onOdd}>
                        Generate Bilangan Ganjil
                    </button>
                    <button onClick={onPrime}>
                        Generate Bilangan Prima
                    </button>
                </div>
                <h3>
                    Result :
                </h3>
                {JSON.stringify(result)}
        </>
    );
}

export default App;
