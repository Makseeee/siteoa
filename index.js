const axios = require('axios');

async function searchProduct(productId) {
    // Define your AliExpress Affiliate ID and API key
    const affiliateId = 'your_affiliate_id';
    const apiKey = 'your_api_key';
    
    // Define the API endpoint URL
    const endpoint = `http://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/${affiliateId}?fields=productId,productTitle,productUrl,imageUrl&localCurrency=USD&productId=${productId}&trackingId=your_tracking_id&sign=your_sign&_aop_signature=your_signature`;
    
    try {
        // Make a GET request to the API endpoint
        const response = await axios.get(endpoint);
        
        // Check if the request was successful
        if (response.status === 200) {
            // Extract the product information
            const product = response.data.result.product;
            const productId = product.productId;
            const productTitle = product.productTitle;
            const productUrl = product.productUrl;
            const imageUrl = product.imageUrl;
            
            // Return the product information
            return {
                productId,
                productTitle,
                productUrl,
                imageUrl
            };
        } else {
            // Return an error message if the API request was unsuccessful
            throw new Error('API request failed');
        }
    } catch (error) {
        // Return an error message if the product was not found
        throw new Error('Product not found');
    }
}

// Example usage:
searchProduct('12345678')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
