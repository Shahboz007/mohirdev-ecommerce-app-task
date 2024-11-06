exports.getReportPage = async (req, res) => {
    res.render("dashboard/dashboardReport", { title: "Reports" });
};
