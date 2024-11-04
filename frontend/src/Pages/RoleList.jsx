import React from 'react'

const RoleList = () => {
  return (
    <div className='container mt-4'>
      <h1  className='mt-2'>Roles List</h1>
      <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Role Name</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
      
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@mdo</td>
    </tr>
     
    
  </tbody>
</table>
    </div>
  )
}

export default RoleList
