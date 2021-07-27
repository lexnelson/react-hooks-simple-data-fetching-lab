// create your App component here
import { useEffect, useState} from 'react'

function App (){
const [image, setImage] = useState()

useEffect (()=> {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(image => setImage(image))

},[])
    return (
        <div>
            {image ? 
            <img alt = "A Random Dog" src = {image.message}/> 
            : <p>"Loading..."</p>}
        </div>
    )
}
export default App