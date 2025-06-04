const express = require("express")
const router = express.Router()
const loanController = require("../controllers/loanController")

router.post("/takeNewLoan", loanController.takeNewLoan)
router.get("/getDebtBalance", loanController.getDebtBalance)
router.put("/updateLoanStatus", loanController.updateLoanStatus)

module.exports = router