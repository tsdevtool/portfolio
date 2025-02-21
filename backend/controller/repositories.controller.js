export const getInformationRepo = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in ....");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
