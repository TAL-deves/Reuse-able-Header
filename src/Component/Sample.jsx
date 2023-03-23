import { Box } from "@mui/system"

const Sample = (props) =>{

    const { text, text2 } = props

    return(
        <Box sx={{display:'flex',justifyContent:'space-around'}}>
        <Box>
            {text || "No text Given"}

        </Box>
        <Box>
            {text2 || "No text Given 2 asdfjl kjasldfjk ksjdflkajklddjsfkj jsdfljakjhkdsj"}

        </Box>
        <Box>
            {text2 || "No text Given 3"}

        </Box>
        </Box>
    )
}

export default Sample;