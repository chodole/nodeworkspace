module.exports = function(app) {

    app.get("/gameUpDownMain", function(req,res){
        res.render("gameUpDown/gameUpDownMain.ejs");
    });

    app.get("/gameUpDownPlay", function(req,res){
        var renderData = {
            "ran" : req.query.ran,
            "gameCount" : req.query.gameCount
        };

        res.render("gameUpDown/gameUpDownPlay.ejs", renderData);
    });

    app.get("/gameUpDownPlayPro", function(req,res){
        var renderData = {
            "gameCount" : req.query.gameCount,
            "ran" : req.query.ran,
            "result" : req.query.result
        }

        res.render("gameUpDown/gameUpDownPlayPro.ejs",renderData);
    });
}