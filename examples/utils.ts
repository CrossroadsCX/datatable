import faker from 'faker'

export type Person = {
  firstName: string
  lastName: string
  age: number
}

export const createPeople = (count: number): Person[] => {
  return new Array(count).fill(createPerson)
}

export const createPerson = (): Person => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const age = faker.datatype.number(100)

  return {
    firstName,
    lastName,
    age,
  }
}
