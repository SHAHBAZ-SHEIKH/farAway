import { useState } from 'react'
import './App.css'
import Logo from './components/logo/Logo'
import Form from './components/form/Form'
import PackingList from './components/packingList/PackingList'
import Stats from './components/stats/Stats'

function App() {
  const [item, setItem] = useState([])
  const [flag, setFlag] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [optionValue, setOptionValue] = useState(1)
  const [updateIndex, setUpdateIndex] = useState(0)
  
  console.log(item)

  const editHandler = (index, optionValue, inputValue) => {
    console.log("edit", index, optionValue, inputValue)
    setInputValue(inputValue)
    setOptionValue(optionValue)
    setFlag(true)
    setUpdateIndex(index)

    // const list = [...item]
    // list.splice(index, 1)
    // setItem(list)
  }

  const clearList = () => {
    console.log("clear")
    alert("Are you sure you want to clear the list?")
    
    setItem([])
  }

  



  return (
    <>
      <Logo />
      <Form flag={flag} setFlag={setFlag} item={item} updateIndex={updateIndex} setItem={setItem} inputValue={inputValue} setInputValue={setInputValue} optionValue={optionValue} setOptionValue={setOptionValue} />
      <PackingList clearList={clearList} setItem={setItem} item={item} editHandler={editHandler}  />
      <Stats item={item}/>

    </>
  )
}

export default App
