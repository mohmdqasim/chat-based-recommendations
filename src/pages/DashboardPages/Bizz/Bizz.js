import React from "react";
import {Container, Typography, Box, TextField, Grid} from "@mui/material";
import "./Bizz.scss";
const Bizz = () => {
  const [BusinessName, setFullBusinessName] = React.useState("DigiMark Developers");
  const [BusinessPhoneNumber, setBusinessPhoneNumber] = React.useState("111-333-2222");
  // const [country, setCountry] = React.useState("Pakistan");
  const [BusinessAddress, setBusinessAddress] = React.useState("Lahore");
  const [Industry, setIndustry] = React.useState("IT");
  // const [state, setState] = React.useState("Maharashtra");
  // const [city, setCity] = React.useState("Pune");
  // const [phoneNumber, setPhoneNumber] = React.useState("111-333-2222");
  const [WebsiteURL, setWebsiteURL] = React.useState("https://digimarkdevelopers.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleResetAll = () => {
    setFullBusinessName("");
    setBusinessPhoneNumber("");
    // setCountry("");
    setBusinessAddress("");
    setIndustry("");
    // setState("");
    // setCity("");
    // setPhoneNumber("");
    setWebsiteURL("");
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
              <TextField label="Business Name" value={BusinessName} onChange={(e) => setFullBusinessName(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Business Address" value={BusinessAddress} onChange={(e) => setBusinessAddress(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Business Phone Number" value={BusinessPhoneNumber} onChange={(e) => setBusinessPhoneNumber(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Industry" value={Industry} onChange={(e) => setIndustry(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>Country</InputLabel>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Pakistan">Pakistan</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}

            {/* <Grid item xs={12} sm={3}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>State</InputLabel>
                <Select value={state} onChange={(e) => setState(e.target.value)}>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={12} sm={3}>
              <FormControl fullWidth margin="normal" variant="standard">
                <InputLabel>City</InputLabel>
                <Select value={city} onChange={(e) => setCity(e.target.value)}>
                  <MenuItem value="Pune">Pune</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
              <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} fullWidth margin="normal" variant="standard" />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <TextField label="Website URL" value={WebsiteURL} onChange={(e) => setWebsiteURL(e.target.value)} fullWidth margin="normal" variant="standard" />
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
