const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.SECRET_KEY);

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const amount = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "gbp"
  });

  res.json({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(3000, () => {
  console.log("Server running");
});
