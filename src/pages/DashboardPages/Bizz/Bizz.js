import React from "react";
import {Container, Typography, Box, TextField, Select, MenuItem, Button, FormControl, InputLabel, Grid} from "@mui/material";
import "./Bizz.scss";
const Bizz = () => {
  const [fullName, setFullName] = React.useState("Chandan");
  const [id, setId] = React.useState("Chandan@coditas.com");
  const [country, setCountry] = React.useState("India");
  const [lastName, setLastName] = React.useState("Mishra");
  const [userID, setUserID] = React.useState("Chandan_m");
  const [state, setState] = React.useState("Maharashtra");
  const [city, setCity] = React.useState("Pune");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [referenceCode, setReferenceCode] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleResetAll = () => {
    setFullName("");
    setId("");
    setCountry("");
    setLastName("");
    setUserID("");
    setState("");
    setCity("");
    setPhoneNumber("");
    setReferenceCode("");
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 col-lg-11">
        <Box border="1px solid #ACACAC" borderRadius="5px" paddingBottom="80px" marginTop="20px" maxWidth="100%" position="relative">
      <Container maxWidth="lg" style={{ marginTop: "30px" }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1" gutterBottom sx={styles.headingTypo}>
            Basic Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Enter ID" value={id} onChange={(e) => setId(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Your User ID" value={userID} onChange={(e) => setUserID(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>Country</InputLabel>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Pakistan">Pakistan</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>State</InputLabel>
                <Select value={state} onChange={(e) => setState(e.target.value)}>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>City</InputLabel>
                <Select value={city} onChange={(e) => setCity(e.target.value)}>
                  <MenuItem value="Pune">Pune</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Reference Code" value={referenceCode} onChange={(e) => setReferenceCode(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "space-between", position: "absolute", alignItems:"center", bottom: "25px", left: "20px", right: "20px" }}>
            <Typography variant="body2" sx={styles.resetAllText} onClick={handleResetAll}>
              Reset All
            </Typography>
            <button type="submit" className="continue">
              Continue
            </button>
          </Box>
        </form>
      </Container>
    </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  headingTypo: {
    color: "#4169E1",
    borderBottom: "1px solid #ACACAC",
    fontFamily: "'Inter', sans-serif",
    paddingBottom: "10px",
    fontWeight: "500",
  },
  resetAllText: {
    cursor: "pointer",
    color: "#8A8A8A",
    fontFamily: "'Inter', sans-serif",
  },
  
};

export default Bizz;
