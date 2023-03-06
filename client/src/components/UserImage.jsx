import { Box } from "@mui/material";

// component for widget of profile image for each user
const UserImage = ({ image, size = "60px" }) => {
  return (
    // default height and width. Not specified
    <Box width={size} height={size}>
      <img
    //   center image (profile image)
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;