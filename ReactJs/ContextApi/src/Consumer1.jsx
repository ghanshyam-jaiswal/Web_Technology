import { context } from './ContextApi'
import { useContext } from 'react'

const Consumer1 = () => {
    let data=useContext(context)
  return (
    <div>
        <p>{data.emp.empId}</p>
        <p>{data.emp.empName}</p>

        <p>{data.student.studentId}</p>
        <p>{data.student.studentName}</p>
    </div>
  )
}
export default Consumer1;