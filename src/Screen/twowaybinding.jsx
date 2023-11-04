// By default react  support the one way binding  
//(data can flow from parent to child or  we can send data directly  parent to child)

// but using some haq or way we can achieve two way binding
// (this means we can send data from parent to child and child to parent)
// we can achieve the two way binding by passing function as props and calling that function inside child compoennt with the 
// argument which we need to pass from child and we can get this value as a params in the parent component when the  function run

import Button from "../Button";

const { useState } = require("react");
const { default: Input } = require("../component/Input/input");

const Parent = (props)=> {
    const [description , setDescription] = useState('');
    const [datacomefromchild , setChildData] = useState('')

    // declration of function
    const getChildData = (value) => {
        setChildData(value)
    }
return  (
    <div className="border p-20 bg-red-600 text-white ">
        <h2>{datacomefromchild}</h2>
        <Input   classes = ' text-black' value = {description} onChange = {(e)=>setDescription(e.target.value)}/> 
        {/*  here i am passing the function as props */}
        <Child getChildData = {getChildData} heading = "I am Heading" alertMessage = 'This is important do not miss'
         description = {description}/>
    </div>
)
}
export default Parent;


const Child  = (props)=> {
const  {heading , description , alertMessage , getChildData} = props;


const onChange =  (e)=> {
    // here  i am calling the function
    getChildData(e.target.value)
}
const handleClick = ()=>{
    getChildData('This is the data which we are passing from chikd to parent on click event')
}
return  (
    <div className="border-gray-950 bg-gray-800 text-white	">
        <h2>{heading}</h2>
        <p>{description}</p>
        <span>{alertMessage}</span>
        {/* <Input onChange = {(event)=>{getChildData(event.target.value)}} classes = ' text-black'placeholder = {'Enter data which we need to pass to parent'}/> */}
        <Input onChange = {onChange} classes = ' text-black'placeholder = {'Enter data which we need to pass to parent'}/>
        <Button classes = 'bg-blue text-white'  clickHandler = {handleClick}>Transfer Child to parent</Button>
    </div>
)
}