import React from 'react';
import './ProductTile.less';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';

const ProductTile = ({ product }) => {
    return (
        <div className="product-tile">
            <div className="product-image"> <img src={product.main_image ? product.main_image : 'https://dummyimage.com/200x200/f2f2f2/4E6374.png&text=No+Image'} /></div>
            <div className="product-name">
                {product.name}</div>
            <div className="product-price"><span>Your Price</span><span className="price">${product.vendor_inventory[0].list_price}</span></div>
            <div className="product-actions">
                <IconButton color="primary" aria-label="upload picture" component="span" size="small" style={{
                    backgroundColor: 'transparent',
                    borderRadius: '6px',
                    padding: '7px',
                    border: '2px solid #4E6374',
                    borderRadius: '6px',
                    color: '#4E6374'
                }}>
                    <FavoriteBorderSharpIcon />
                </IconButton>
                <Button variant="contained" color="primary" style={{
                    backgroundColor: '#398DE3',
                    borderRadius: '6px',
                    padding: '8px 16px'
                }}>
                    Add To Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductTile
