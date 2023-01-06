import { Typography } from "@mui/material"
import { BannerButton, BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner"

function Banner() {
    return(
        <BannerContainer>
            <BannerImage src='/images/banner/banner.png' />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">New Bags</BannerTitle>
                <BannerDescription variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Totam fugiat nihil optio non consectetur facere cupiditate illo quis sit,
                      officia expedita 
                </BannerDescription>
                <BannerButton variant='contained'>Show Now</BannerButton>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner