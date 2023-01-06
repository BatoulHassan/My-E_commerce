// import { useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Box } from "@mui/material";

function Promotions() {

    return(
        <PromotionsContainer>
            <Box display="flex" justifyContent="center" alignItems="center">
               <MessageText>
                20% off on your first order!
               </MessageText>
            </Box>
        </PromotionsContainer>
    )
}

export default Promotions