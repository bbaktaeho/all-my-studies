module.exports = {
  getUserProfileById: (req, res, next) => {
    const { id: paramId } = req.params;
    const { id: userId } = req.user;
    if (paramId != userId) res.status(403).json({ success: false, message: '어딜 보려고' });
    else res.status(200).json({ success: true, message: '보세요', user: req.user });
  },
};
