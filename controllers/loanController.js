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
