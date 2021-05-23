import React from 'react'
import AddStatus from './AddStatus'
import AddCategory from './AddCategory'
import AddPerson from './AddPerson'
import FormFunctions from './FormFunctions'

export const Status = () => {
  return (
      <AddStatus/>
  )
}

export const Category = () => {
  return (
      <AddCategory/>
  )
}

export const Person = () => {
  return (
      <AddPerson/>
  )
}

export const DeleteTask = () => {
  return (
      <FormFunctions delete={true}/>
  )
}



