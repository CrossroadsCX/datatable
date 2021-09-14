![Linting](https://github.com/crossroadscx/datatable/actions/workflows/linting.yml/badge.svg) ![Chromatic](https://github.com/crossroadscx/datatable/actions/workflows/chromatic.yml/badge.svg)
# React Table DataTable

This project layers a UI on top of the every popular [React Table](https://react-table.tanstack.com/) library. The intention is to have a drop-in UI solution for most table use cases, while including simple options to override things like theming, sub-components, and actions.
## Demo

[Chromatic Storybook Demo](https://611fe2acceeaf1004a5cef13-ccyodchjma.chromatic.com)

## Usage

```
import { Column, DataTable, DataTableProps } from '@crossroadscx/datatable'

type Person: {
  firstName: string
  lastName: string
  email: string
  phone: string
}

type PersonData = Person & {
  subRows?: PersonData[]
}

const defaultPerson = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
}

const data: Person[] = [
  { firstName: 'Bob', lastName: 'Dylan', email: 'thetimes@changin.com', phone: '5555555' },
  { firstName: 'John', lastName: 'Cash', email: 'johnny@folsonblues.com', '5555555' },
]

const columns: Column<PersonData>[] = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  }
]

const handleChange = (data: Person[]) => {
  console.log('Table data changed')
  console.log(data)
}

React.render(<DataTable columns={columns} data={data} defaultItem={defaultPerson} />)
```

## Props
_Coming soon_

## License

`@crossroadscx/datatable` is released under the MIT license.
