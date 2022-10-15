import React from 'react'

const Table = ({ data }) => {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                </tr>
            ))}
        </table>
    )
}

export default Table