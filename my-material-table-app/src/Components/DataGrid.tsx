"use client";
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, TableSortLabel, TableFooter, TablePagination } from '@mui/material';

const DataGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Sample data
  const data = [
    { code: '001', name: 'John Doe', city: 'Karachi', amount: 450 },
    { code: '002', name: 'Jane Smith', city: 'Lahore', amount: 150 },
    { code: '003', name: 'Alice Johnson', city: 'Islamabad', amount: 200 },
    { code: '004', name: 'Bob Williams', city: 'Karachi', amount: 250 },
    { code: '001', name: 'John Doe', city: 'Karachi', amount: 100 },
    { code: '002', name: 'Jane Smith', city: 'Lahore', amount: 650 },
    { code: '003', name: 'Alice Johnson', city: 'Islamabad', amount: 200 },
    { code: '004', name: 'Bob Williams', city: 'Karachi', amount: 250 },
    { code: '001', name: 'John Doe', city: 'Karachi', amount: 700 },
    { code: '002', name: 'Jane Smith', city: 'Lahore', amount: 550 },
    { code: '003', name: 'Alice Johnson', city: 'Islamabad', amount: 200 },
    { code: '004', name: 'Bob Williams', city: 'Karachi', amount: 250 },
    { code: '001', name: 'John Doe', city: 'Karachi', amount: 100 },
    { code: '002', name: 'Jane Smith', city: 'Lahore', amount: 150 },
    { code: '003', name: 'Alice Johnson', city: 'Islamabad', amount: 200 },
    { code: '004', name: 'Bob Williams', city: 'Karachi', amount: 250 },
    { code: '001', name: 'John Doe', city: 'Karachi', amount: 100 },
    { code: '002', name: 'Jane Smith', city: 'Lahore', amount: 150 },
    { code: '003', name: 'Alice Johnson', city: 'Islamabad', amount: 200 },
    { code: '004', name: 'Bob Williams', city: 'Karachi', amount: 250 },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = data.slice().sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    } else {
      return 0;
    }
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const filteredData = sortedData.filter(item =>
    Object.values(item).some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalAmount = filteredData.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className="p-4">
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20 }}
        className="mb-4"
      />
      <TableContainer component={Paper}>
        <Table className="min-w-full">
          <TableHead className="bg-gray-50">
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'code'}
                  direction={getClassNamesFor('code')}
                  onClick={() => requestSort('code')}
                >
                  Customer Code
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'name'}
                  direction={getClassNamesFor('name')}
                  onClick={() => requestSort('name')}
                >
                  Customer Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'city'}
                  direction={getClassNamesFor('city')}
                  onClick={() => requestSort('city')}
                >
                  City
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'amount'}
                  direction={getClassNamesFor('amount')}
                  onClick={() => requestSort('amount')}
                >
                  Amount
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell>{totalAmount}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default DataGrid;

