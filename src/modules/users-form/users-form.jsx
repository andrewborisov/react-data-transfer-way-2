import * as React from 'react';
import {
  Container, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

export const UsersForm = ({ users, handleUserDelete }) => {
  return (
    <form>
      <Container maxWidth="sm">
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>User Age</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users && users.length > 0 ? users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell padding="checkbox" align="right">
                      <IconButton onClick={handleUserDelete(user.id)}>
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell>Sorry, it seems no data for you</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </form>
  )
};
