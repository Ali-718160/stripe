const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.SECRET_KEY);

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
