const Loan= require('../models/loan');

const takeNewLoan = async (req, res) => {
    try {
        userId = req.user.userId; 
        const { amount, paymentsNumber} = req.body;
        if (!amount || !paymentsNumber) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const loan = await Loan.create({ userId, amount, paymentsNumber, status: 'pending' });
        return res.json(loan);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
const getDebtBalance = async (req, res) => {
    const loan = await Loan.findOne({ user: req.user.id, status: 'pending' }).lean()
    if (!loan)
    {
        return res.json([])
    }
    return res.json(loan)

}
const updateLoanStatus = async (req, res) => {
    const { userId } = req.body 
    const loan=await Loan.findById(userId).exec()

    if(!loan){
        return res.status(400).json({message:"loan not found"})
    }
    loan.status='approved'
    const updatedloan=await order.save()
    res.json(`${updatedloan} update`)
}


module.exports = { takeNewLoan,getDebtBalance,updateLoanStatus }