import React from 'react'

export default function Wk6_day01() {
    let students = ["student1", "student2", "student3"]
    
  return (
    <div>
        {/* display the list of 10 students in a school */}

        {students.map(item => <p>{item}</p>)}

        =====

        {students.map(item => {
            return (
                <p>{item}</p>
            )
        })}

    </div>
  )
}
