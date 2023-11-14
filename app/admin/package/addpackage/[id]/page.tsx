import React from 'react'
import AddPackage from '../AddPackage'


const PackageEditor = ({params}:{params:{id:number}}) => {
  const id=params.id;
  return (
    <div><AddPackage isEditMode={true}/></div>
  )
}
export default PackageEditor