import { UserInfo } from "../styled/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const User = memo(({ user }) => {
  const { id, name, username, phone, website } = user;

  return (
    <UserInfo>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ID: {id}
          </Typography>
          <Typography variant="h5" component="div">
            {username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
          <Typography variant="body2">phone: {phone}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{website}</Button>
        </CardActions>
      </Card>
    </UserInfo>
  );
});

export default User;
