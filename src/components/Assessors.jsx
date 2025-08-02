import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ITEMS_PER_PAGE = 100;

const Assessors = () => {
  const [assessors, setAssessors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/assessors.json")
      .then((res) => res.json())
      .then((data) => setAssessors(data))
      .catch((err) => console.error("Failed to load assessors:", err));
  }, []);

  const filtered = assessors.filter((a) => {
    const name = a["Name*"]?.toLowerCase() || "";
    const sector = a["Sector*"]?.toLowerCase() || "";
    return (
      name.includes(searchTerm.toLowerCase()) ||
      sector.includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Box
        component={Paper}
        elevation={4}
        sx={{
          p: 4,
        //   borderRadius: 3,
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: "#1976d2" }}>
          📋 Our Assessors
        </Typography>

        {/* Search Field */}
        <TextField
          label="Search by name or sector"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        //   fullWidth
          margin="normal"
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Table */}
        <TableContainer component={Paper} elevation={2} >
          <Table size="small">
            <TableHead sx={{ backgroundColor: "#1976d2" }}>
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Sr no.</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Sector</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Experience</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: 600 }}>TOA Certified</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems.length > 0 ? (
                currentItems.map((a, index) => (
                  <TableRow
                    key={startIndex + index}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f0f4f8" },
                      "&:hover": { backgroundColor: "#e3f2fd" },
                    }}
                  >
                    <TableCell>{startIndex + index + 1}</TableCell>
                    <TableCell>{a["Name*"]}</TableCell>
                    <TableCell>{a["Sector*"]}</TableCell>
                    <TableCell>
                      {a["Total Experience in Assessment(yrs)*"]} years
                    </TableCell>
                    <TableCell>{a["TOA Certified*(Yes/No)"]}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No matching assessors found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, value) => setCurrentPage(value)}
          color="primary"
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
        />
      </Box>
    </Container>
  );
};

export default Assessors;