import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'
const Home = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity:10,
    speed:2,
    // image:'./Images/cloud.jpg'
})
const [name,setName]=useState('')


const handleClick=()=>{
  if(name!==""){
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d81745218e94e874f5f48a8a3f02bfb1&&units=metric`
  axios.get(apiUrl)
  .then(res=>{
    // let imagePath=' '
    // if(res.data.weather[0].main=='Clouds'){
    //   imagePath = "./Images/cloud.jpg"
    // }
    // else if(res.data.weather[0].main=='Clear'){
    //   imagePath = "./Images/Clear.jpg"
    // }
    // else if(res.data.weather[0].main=='Rain'){
    //   imagePath = "./Images/Rain.jpg"
    // }
    // else if(res.data.weather[0].main=='Drizzle'){
    //   imagePath = "./Images/Drizzle.png"
    // }
    // else if(res.data.weather[0].main=='Mist'){
    //   imagePath = "./Images/Mist.png"
    // }
    // else{
    //   imagePath = "./Images/cloud.jpg"
    // }
    setData({...data, celcius: res.data.main.temp, name: res.data.name, humidity:res.data.main.humidity, speed:res.data.wind.speed})
  })
  .catch(err=>console.log(console.log(err)))
  }
}
  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
            <input type='text' placeholder='enter city name'onChange={e=>setName(e.target.value)} />
            <button onClick={handleClick}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAADy8vL8/PzY2Njj4+OZmZlDQ0McHBzx8fHd3d3g4OD39/eMjIxpaWlTU1PQ0NAQEBC4uLgkJCQ5OTmgoKAvLy+srKy+vr4VFRVhYWFcXFzExMR0dHSTk5MYGBiCgoJ8fHwpKSlLbtqKAAAEN0lEQVR4nO3c63qiMBAGYAQEUfAA6mptrXr/F7li11Yng0ASliH93r+lPDPmHAKeBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADASP0k8dO+o+hEEO6y+SLeFpNJsY0X82wXBn3HZFEYxSNGHC37jsyK5YnL7u60HHhR+hu29B6tN0nfUerzT6u6/G6ygeYYZI3S+8pxiHU13zdP8CrvO962kkWr/K4O475jbiVvm9/QivGsk+BodO477qb82hGiSuz3HXsj44tugqNRMYTGOG02BlZYTfuOv9bUJL+S9BTHRiV4I7ui+i/a4FuUzxL/Kpnl0Vv1dYXo7qaqFy2OIb00zIqKi2PBU7gzH/Lhnb/8/cBfL3dc5GcyC6X4foR8jlJnNwkX7Kqi/O7e2a5J6HKKm2x/1Lap4IMr9/8Rb2tcHf3T5B//DKSeBkx1a7jTtFT/cyJwy5FZ0Tceu8fq/2ZdxqqF6WZaTE6YFMWN++qeYavNULWiSivERGmFjTqZH2p3I6wQNzS+j7Z3UAaNTRdxagvWJLxV67llMCG3WHcRqDalGdXMZDjvRg25a7SfOejchM6JTnZjNEN//heT7WqhcU3vDo1Nqwg9jy6LtX6nbkTmrbBEW2JkN0oTZGlf6N5n+3yf2GaMRgLy2x91b0TntjaDNEKboXb7oYOOmIa4s/bTkxvt7MVohlSuN/07kSFRu7rbNn+Oy6ALJJ3y3F6MZsgvb7ADQXZCxHSmZLCY6d+J9FlSJt8pGcYMtgL95ztdhMzbfLI9b7B0JSNrIWQ/Kpl0leFEyDrf/Qzdr6Xu9zTujxa/YMR3f9bm/szb/dWT+ytguouh/VBF7C6G+ztRv2A30dKOMD16IqYZeh3t6u9tR2nC/Scz7j9d88yfkKaf5BZipt1fnH/K3cVJBSGr32/Onzahq/NSi5Uwc2JIWhEanvpSz8SJK0LrJ/ek7NA8cv70pTqtLNWfoE25E7SaE9uusaegJzWzmx0d6G+EnoLWOcnOv6a4MtiQ7NaZjbf12wiSX3+qeqNkmynd6jLbVlx8I7UU6SOMR4soD/3gyg/zqP4lWqmvP1l4s+tOakU1fjvvV6UotS2avCU7kBRT7TedFVIrqnd2P0WtLw6w3bDUiuolldOVKodkxqYothS9nL5d8NJnuVziX3SXm2J6bJ7gv6+3zNg/iq2o1xwbfqEm+z6fwuzXjORO4Eppk68oPZ6/GVpFLS1ffUppr3wJi50SyV1MfQkqv2bGrY35iiq4Ld6Fu+M8Xl/KL9Jd1vH8uKtc+Q+uu3kSpL6f1m1O8W1R0uNSY3wpOpUi2xYFPdW3gJnAuZUg0xZdS1CpqGJOuFk0drsES9O94wk+TOBcTfC7orrYBu9ug4a7JVi6DhpuJ3hN0fUEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgwP4Celgqs7S97q0AAAAASUVORK5CYII=' width='30px' height='10px'/></button>
        </div>
        <div className='winfo'>
            <img src='data:image/png;base64,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' width="100px" height="100px"/>
            <h1>{Math.round(data.celcius)}</h1>
            <h2>{data.name}</h2>
            <div className='details'>
              <div className='col'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGy8W6dwpnzygdytQ0V6H2Y3qCVv2WDIFpw&usqp=CAU' alt=''/>
                  <div className='humidity'>
                  <p>{Math.round(data.humidity)}</p>
                  <p>Humidity</p>
                </div>
             </div>
              <div className='col'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTob-hVyRl5R5KQrIhsbiOT2VwV8htG1v5jfw&usqp=CAU' alt=''/>
                <div className='wind'>
                  <p>2km/hr</p>
                  <p>{Math.round(data.speed)}</p>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
