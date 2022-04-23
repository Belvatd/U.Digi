import React, { useState } from "react";
import {
  Dialog,
  Typography,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { } from "@mui/icons-material";

const DialogTransaksi = (props) => {
  const [temp, setTemp] = useState({
    id: 3,
    category: "",
    percentage: 0,
    totalBudget: 0,
    pengeluaran: 0,
    sisa: 0
  });

  const Add = () => {
    let data = props.data
    data.push(temp)
    props.closeDialog()
    console.log(data);
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ style: { borderRadius: "16px" } }}
        fullWidth
      >
        <DialogContent sx={{ padding: "20px" }}>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "16px",
              fontWeight: 600,
              color: "#000000",
            }}
          >
            Tambah kategori pengeluaran
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 600,
              color: "#000000",
              marginTop: "8px",
            }}
          >
            Kategori
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            value={temp.category}
            type="text"
            onChange={(e) => setTemp({ ...temp, category: e.target.value }, console.log(e.target.value))}
          ></TextField>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "10px",
              fontWeight: 600,
              color: "#000000",
              marginTop: "8px",
            }}
          >
            Total budget
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            value={temp.totalBudget}
            type="number"
            onChange={(e) => setTemp({ ...temp, totalBudget: e.target.value, sisa: e.target.value }, console.log(e.target.value))}
          ></TextField>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              borderRadius: "8px",
              backgroundColor: "#008AEC",
              width: "100%",
              marginTop: "8px",
            }}
            onClick={() => Add()}
          >
            Simpan
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default DialogTransaksi;
