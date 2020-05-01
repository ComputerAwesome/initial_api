import express from "express"

const app = express()

app.listen(process.env.PORT || 6565, () => {
  console.log("listening to port 6565")
})
