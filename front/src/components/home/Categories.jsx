import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled} from '@mui/material';

const StyledTable = styled(Table)`
 border: 2px solid rgba(224,224,224,1);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 80%;
  background: rgba(0,0,0, 0.7);
  color: #fff;
`;

const Categories = () => {
  return (
    <>
          <StyledButton variant='contained'>Add News</StyledButton>

          <StyledTable>
              <TableHead>
                  <TableRow>
                      <TableCell>
                          All Categories
                      </TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>
                         Politics 
                      </TableCell>
                  </TableRow> 
                  <TableRow>
                      <TableCell>
                         Sports 
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>
                         Others 
                      </TableCell>
                  </TableRow>
              </TableBody>
          </StyledTable>
    </>
  )
}

export default Categories;
