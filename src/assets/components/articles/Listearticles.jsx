import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
23;
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Listarticles = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/articles")
      .then((res) => {
        setArticle(res.data);
      })
      .catch((error) => {
        24;
        console.log(error);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Référence</StyledTableCell>
            <StyledTableCell align="right">Désignation</StyledTableCell>
            <StyledTableCell align="right">Quantité</StyledTableCell>
            <StyledTableCell align="right">Prix</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.reference}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.qtestock}</StyledTableCell>
              <StyledTableCell align="right">{row.prix}</StyledTableCell>
              <StyledTableCell align="right">
                <img
                  src={row.imageart}
                  alt={row.reference}
                  width={100}
                  height={100}
                />
              </StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        25
      </Table>
    </TableContainer>
  );
};
export default Listarticles;
