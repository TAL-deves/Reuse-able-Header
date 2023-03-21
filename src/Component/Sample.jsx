import { Box } from "@mui/system"

const Sample = (props) =>{

    const { text, text2 } = props

    return(
        <Box>
        <Box>
            {text || "No text Given"}

        </Box>
        <Box>
            {text2 || ""}

        </Box>
        </Box>
    )
}

export default Sample;