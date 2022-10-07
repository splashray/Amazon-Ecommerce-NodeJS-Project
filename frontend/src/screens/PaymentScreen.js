import { getUserInfo, setPayment } from '../localStorage';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = {
  after_render: () => {
    document
      .getElementById('payment-form')
      .addEventListener('submit', async (e) => {     
      e.preventDefault()
      const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value
      setPayment({paymentMethod})
      document.location.hash = '/placeorder'
      });
  },
  render: () => {
    const {name} = getUserInfo()
    if (!name) {
      // redirectUser();
      document.location.hash ='/'
    }
    // const {address, city, postalCode, country} = getPayment()
    return `
    ${CheckoutSteps.render({step1: true, step2: true, step3: true})}
    <div class="form-container">
      <form id="payment-form">
        <ul class="form-items">
          <li>
            <h1>Payment </h1>
          </li>
          <li>
            <div>
            <input type="radio" name="payment-method" id="paypal" value="paypal" checked/>
            <label for="paypal">Paypal</label>
            </div>
          </li>

          <li>
          <div>
          <input type="radio" name="payment-method" id="stripe" value="stripe"/>
          <label for="stripe">Stripe</label>
          </div>
        </li>

            <li>
              <button type="submit"  class="primary">Continue</button>
            </li>
        </ul>
      </form>
    </div>
    `;
  },
};
export default PaymentScreen;
