import React, { useState, useEffect} from "react";
import { Table } from "semantic-ui-react";
import GeneratorService from "../../services/GeneratorService"



export default function GeneratorList(){
   

   const [generators, setGenerators] = useState([]);

   useEffect(() => {
     let generatorService = new GeneratorService();
     generatorService.getAll().then((result) => setGenerators( result.data.data) )
   },[]);


   return (
     <div>
       <Table celled>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell>senderId</Table.HeaderCell>
             <Table.HeaderCell>idStamp</Table.HeaderCell>
             <Table.HeaderCell>Message status</Table.HeaderCell>
             <Table.HeaderCell>Message Generation</Table.HeaderCell>
             <Table.HeaderCell>General</Table.HeaderCell>    
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {generators.map((generator)=> (
             <Table.Row key={generator.idStamp}>          
               <Table.Cell>
                {generator.sender_id}
               </Table.Cell>
               <Table.Cell>{generator.idStamp}</Table.Cell>
               <Table.Cell>{generator.msg_status}</Table.Cell>
               <Table.Cell>{generator.msg_generation}</Table.Cell>
               <Table.Cell>{JSON.stringify(generator)}</Table.Cell>
              
             </Table.Row>
           )
           )}
           
         </Table.Body>
       </Table>
     </div>
   );
}