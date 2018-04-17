import React from 'react';
import Manager from './Manager'


// TODO: \\Dispath fetched data to redux or\\ setup web-socket for google-sheets

const usersData = `{
  "managers": [
  {
    "id": "1",
    "name": "John Doe",
    "image": "/images/user1.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "id": "2",
    "name": "Long-Surname-Man",
    "image": "/images/user2.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "3",
    "name": "John Doe",
    "image": "/images/user3.jpg",
    "branch": "Chicago - Illinois",
    "status": "finished"
  },
  {
    "id": "4",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "5",
    "name": "Long-Surname-Man",
    "image": "/images/user5.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "6",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "7",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "8",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  },
  {
    "id": "9",
    "name": "John Doe",
    "image": "/images/user4.jpg",
    "branch": "New York",
    "status": "finished"
  }
  ]
}`

const ReportTable = ({props, parent, selected}) => {
  if(props.items[0] === undefined)  props.items[0] = [] // Takie rozwiązanie nie za bardzo mi się podoba
  const toHeader = JSON.parse(usersData).managers.map((val, idx) => {
    if(selected.includes(val.id)) { // Tutaj dostaję error items[0] not defined
      return (
        <th key={idx}>
          <Manager data={val} />
        </th>
      )
    }
    return null
  })

  const toBody = props.items.map((val, idx) => {
    if(idx === 0) return null
    const indexes = selected.map((val) => {
      return props.items[0].indexOf(val)
    })

    return (
        <tr key={idx}>
          <td className="report-table__label">{val[0]}</td>
          {val.map((val, idx) => {
            if(indexes.includes(idx)) {
              return <td key={idx}>{val}</td>
            }
          })}
        </tr>
    )
  })
  if (props.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }
  if (props.isLoading) {
    return <p>Loading…</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>{props.items[0][0]}</th>
          {toHeader}
        </tr>
      </thead>
      <tbody>
        {toBody}
      </tbody>
    </table>
  )
}

export default ReportTable;