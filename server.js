const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_51Pe4tQ2MMIgwRw7sxP4KDClcHQ3aBC2ndMnjkxtGSXGCkd02p3UF6N7c5Si4lBJyI2iIANvUM5XOP7LU4QOXtcos00EJ0T65Yd");

app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
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
