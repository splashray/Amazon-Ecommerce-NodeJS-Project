const CheckoutSteps = {
    render: (props)=>{
        return `
        <div class="checkout-steps">
            <div class="${props.step1 ? 'active' : ''}"> Signin </diV>
            <div class="${props.step2 ? 'active' : ''}"> Shipping </diV> 
            <div class="${props.step3 ? 'active' : ''}"> Payment </diV> 
            <div class="${props.step4 ? 'active' : ''}"> Place Order </diV>
        </diV>
        `
    }
}
export default CheckoutSteps