const stripe = require('stripe')('sk_test_51RR8M6I6eUCMULgBYt7wJopNrPj1FbBNqJHeOhOSY5yr7x7qK2bBbxkKjsFpz6EJu8Lxf5C0UL8fMX8ceiOb2kBJ004uYBeGSu');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: "price_1RSwpXI6eUCMULgB4U46M1iS",
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));