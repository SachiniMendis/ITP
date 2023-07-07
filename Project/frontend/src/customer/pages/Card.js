import { useState,useEffect } from "react";
import axios from 'axios';
import { api } from "../../config";
import {toast} from 'react-hot-toast';
import {Modal} from 'react-bootstrap';
import { Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  Td,
 
  TableContainer,
 
} from '@chakra-ui/react'
export default function Card(){


    
    return(<div>

<Link to="/customer/product">
        <button class="btn btn-primary px-3 ms-2 ml-3 mb-4" style={{backgroundColor: "#f2c800"}} >addddd</button>
        </Link>
    </div>
    
    )
}