import faker from 'faker'

export type Person = {
  firstName: string
  lastName: string
  age: number
}

export const createPeople = (count: number): Person[] => {
  const people: Person[] = []
  for (let i = 0; i < count; i++) {
    people.push(createPerson())
  }

  return people
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
