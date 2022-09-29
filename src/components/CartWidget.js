import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import  IconButton  from '@mui/material/IconButton';
import shoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge' : {
        rigth: -3,
        top: 13,
        border:'2px solid ${theme.palette.background.paper}',
        padding:'0 4px',
    },

}));

function CartWidget() {

    return (
         <IconButton aria-label="cart">
 <StyledBadge> badgeContent={4} color="secondary">
            <shoppingCartIcon color="primary/>"   

               </StyledBadge>
      </IconButton>
            
      )};


    


export default CartWidge ;
