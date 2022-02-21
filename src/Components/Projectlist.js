import React from 'react'
import Table from 'react-bootstrap/Table'
import JsonData from './projestlistdata.json';
function Projectlist(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
          <td><button type="submit" class="btn btn-info">Edit</button></td>
      <td><button type="submit" class="btn btn-primary">Send</button></td>
      <td><button type="submit" class="btn btn-success">Download</button></td>
				</tr>
			)
		}
	)

	return(
    <React.Fragment>
                <Table responsive className='table table-striped'>
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Edit</th>
      <th>Send</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
  {DisplayData}
  </tbody>
</Table>
</React.Fragment>
		// <div>
		// 	<table class="table table-striped">
		// 		<thead>
		// 			<tr>
		// 			<th>id</th>
		// 			<th>Name</th>
		// 			<th>City</th>
		// 			</tr>
		// 		</thead>
		// 		<tbody>
				
					
		// 			{DisplayData}
					
		// 		</tbody>
		// 	</table>
			
		// </div>
	)
}

export default Projectlist;
