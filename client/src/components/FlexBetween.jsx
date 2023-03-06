import { Box } from "@mui/material";
import { styled } from "@mui/system";

// helps align and "flex" things into proper style locations
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
 