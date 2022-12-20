


const API_key = '12425c3614ad89e8b753e8c56f884033'

const GetapiInfo = async() => {


    const data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'Madrid'}&appid=${API_key}`)).json; 
    console.log(data);
    return data
}
export default GetapiInfo