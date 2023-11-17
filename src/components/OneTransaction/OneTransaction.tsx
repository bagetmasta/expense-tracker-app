import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import { Transaction } from "../../types/transaction";
import nikeLogo from "../../images/nike.png";
import pumaLogo from "../../images/puma.png";

const IMAGES: { [key: string]: string } = {
  nike: nikeLogo,
  puma: pumaLogo,
};

export default function OneTransactions({
  name,
  amount,
  logoUrl,
  date,
}: Transaction) {
  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  const formattedDate = formatDate(date);

  return (
    <Card sx={{ mb: 2 }} elevation={0}>
      <CardContent
        sx={{
          backgroundColor: "#FAFAFA",
          borderRadius: "10px",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar src={IMAGES[logoUrl]} alt={logoUrl} />
          </Grid>
          <Grid item xs>
            <Typography
              variant="subtitle1"
              color="#000"
              fontSize={16}
              fontWeight={500}
              lineHeight="normal"
              mb={"4px"}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="#A3A3A3"
              fontSize={12}
              lineHeight="normal"
            >
              Bank Account
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              color="#2BB272"
              fontSize={18}
              fontWeight={500}
              lineHeight="normal"
              mb={"8px"}
            >
              ${amount}
            </Typography>
            <Typography
              variant="body2"
              color="#A3A3A3"
              fontSize={12}
              fontWeight={400}
              lineHeight="normal"
            >
              {formattedDate}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
