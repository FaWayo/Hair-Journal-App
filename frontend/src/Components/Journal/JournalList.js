// import axios from 'axios'
// import React, { useState } from 'react'
// import {Card, Form, Button, Col} from 'react-bootstrap'


// function Journal({ backhairlength, fronthairlength, currentregimen, date, time }) {
//     return(
//         <Card> 
//             <Card.Title><p>Date:{date} <span>Time:{time}</span></p></Card.Title>
//             <Card.Body>
//                 <ul>
//                 <li>BackHairLength: {backhairlength}</li>
//                 <li>Front HairLength: {fronthairlength}</li>
//                 <li>{currentregimen}</li>
//                 </ul>
//             </Card.Body>
//         </Card>
        
//     )
// }

// export default function JournalList() {
//     const [ journals, setJournals ] = useState([
//         {
//             "date": "12/12/20",
//             "time": "12:20pm",
//             "fronthairlength": "12inches",
//             "backhairlength": "11.5inches",
//             "currentregimen":"i had Wash Day today; washed my hair with korkoction shampoo. Skipped prepoo but deep conditioned with no egg due to protein overload"
//         }
//     ])
    
//     // function loadAll(){
//     //     axios.get(`${API_ENDPOINT}/note`)
//     //     .then((res) => {
//     //         setJournals(...journals, res.data)
//     //     })
//     //     .catch((err) => {
//     //         console.log(err)
//     //     })
//     // }

//     const addJournal = (fronthairlength, backhairlength, currentregimen, date, time) => {
//         const newJournals = [...journals, {fronthairlength, backhairlength, currentregimen, date, time}] 
//       setJournals(newJournals)
//     }
//     return (
//         <div>
//             <h3>Pages</h3>
//             <ul>
//                 { 
                
//                 journals.length === 0
//                 ?   <></> 
//                 : 
//                     <>
//                         {journals.map(journal => (
//                             <li key={journal.id}>
//                             <Journal/>
//                             </li>
//                         ))}

                    
//                     </>
//                 }
                
//             </ul>
//         </div>
//     )
// }