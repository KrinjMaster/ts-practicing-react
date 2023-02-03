import React, { useState, useEffect } from 'react'

interface Person {
  name: string,
	height: number,
	mass: number,
	hair_color: string,
	skin_color: string,
	eye_color: string,
	birth_year: string,
	gender: string,
}

async function getPerson(id = 1): Promise<Person> {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  return response.json()
}

const Component: React.FC = () => {
  
  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
      getPerson().then(data => setPerson(data)).catch(err => alert(` Error >>> ${err}`))
  }, [])
  

  return (<>
    <div>
      <h1>Person name: {person?.name}</h1>
      <h1>Person height: {person?.height}</h1>
      <h1>Person birth year: {person?.birth_year}</h1>
    </div>
  </>
  )
}

export default Component