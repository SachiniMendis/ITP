import { Button } from "@chakra-ui/react";
import "./EmployeeList.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { api } from "../../config";
import {saveAs} from 'file-saver';


import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function Attendance() {
  const [a, setA] = useState([]);
  useEffect(() => {
    getEmployeeAttendance();
  }, []);

  const getEmployeeAttendance = async () => {
    const result = await axios.get(`${api}/attendence/`);
    setA(result.data);
    console.log(result.data);
  };

  console.log(a);

  const genaratepdf=async()=>{

    await  axios.post(`${api}/employeeroute/createPdf`,a).then((respnse)=>{
         console.log(respnse)
         axios.get(`${api}/employeeroute/fetchPdf`,{responseType:'blob'}).then((res)=>{

         const pdfBlob=new Blob([res.data],{type:'application/pdf'})

         saveAs(pdfBlob,'employee.pdf')

         })
    })
  }



  return (
    <>
      <div class="col main pt-5 mt-3">
        <div className="head">
          <div>
            <h5 class="display-6 font-weight-bold text-black">
              Attendance List
            </h5>
            
          </div>
          <div><div><Button colorScheme="blue" variant='outline' onClick={genaratepdf}>Employee Attendance Report</Button></div></div>
        </div>

        

        <hr />

        <div className="ptable">
          <TableContainer overflowY="auto" maxHeight="70vh">
            <Table variant="striped" colorScheme="gray">
              <Thead
                backgroundColor="white"
                position="sticky"
                top={0}
                zIndex="docked"
              >
                <Tr textAlign="center">
                  <Th fontSize="medium" textAlign="center">
                    <b>Employee Name</b>
                  </Th>
                  <Th fontSize="medium" textAlign="center">
                    <b>Employee Position</b>
                  </Th>
                  <Th fontSize="medium" textAlign="center">
                    <b>Duty on Time</b>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {a.length > 0 &&
                  a.map((item) => {
              return(
                    <Tr textAlign="center" key={item._id}>
                      <Td textAlign="center">{item.name}</Td>
                      <Td textAlign="center">{item.position}</Td>
                      <Td textAlign="center">{item.time}</Td>
                    </Tr>)
})}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Attendance;
