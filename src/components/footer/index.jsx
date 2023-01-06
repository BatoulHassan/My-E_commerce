import { Box, Button, Grid, List, ListItemText, Typography } from "@mui/material"
import { FooterTitle, SubscripeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { Stack } from "@mui/system";

function Footer() {
    return(
        <Box
        sx={{
            background: Colors.shaft,
            color: Colors.white,
            mt: 4,
            p: { xs:4, md:10 },
            pt: 12,
            pb: 12,
            fontSize: { xs:'12px', md:'14px' }
        }}
        >
           <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <FooterTitle variant="body1">About us</FooterTitle>
                <Typography variant="caption2">
                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                 incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud.
                </Typography>
                <Box
                 sx={{
                    color: Colors.dove_gray,
                    mt: 4,
                 }}
                >
                    <FacebookIcon sx={{ mr: 1}} />
                    <TwitterIcon sx={{ mr: 1}} />
                    <InstagramIcon />
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={2}>
                <FooterTitle variant="body1">information</FooterTitle>
                <List disablePadding>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>About us</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>Order Tracking</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>Privacy & Policy</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>Terms & Conditions</Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={2}>
                <FooterTitle variant="body1">my account</FooterTitle>
                <List disablePadding>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>Login</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>MyCart</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>My Account</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption2" lineHeight={2}>Wishlist</Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
                <FooterTitle variant="body1">newsletter</FooterTitle>
                <Stack>
                    <SubscripeTf
                        variant="standard"
                        label='Email Address'
                        color="primary"
                         />
                    <Button startIcon={<SendIcon />}
                    sx={{
                        mt: 4,
                        mb: 4,
                    }}
                    variant='contained'
                    >
                        Subscribe
                    </Button>
                </Stack>
            </Grid>
           </Grid>
        </Box>
    )
}

export default Footer