import { IconButton, Slide } from "@mui/material"
import { SearchBoxContainer, SearchField } from "../../styles/search"
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useUIContext } from "../../context/ui";

function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext();
    return(
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                 variant="standard" 
                 fullWidth
                 placeholder="search..."
                 />
                 <IconButton>
                    <SearchIcon sx={{
                        fontSize: { xs: '2rem', md: '3rem'}
                    }}
                    color='secondary' />
                 </IconButton>
                 <IconButton
                   sx={{
                    position: 'absolute',
                    top: 20,
                    right: 10,
                   }}
                   onClick={() => setShowSearchBox(false)}
                 >
                    <CloseIcon sx={{
                        fontSize: "4rem"
                    }}
                    color='secondary' />
                 </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default SearchBox