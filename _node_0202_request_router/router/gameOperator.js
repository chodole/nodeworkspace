module.exports = function(app){

    app.get("/gameOperatorMain", function(req,res){
        res.render("gameOperator/gameOperatorMain.ejs");
    });

    app.get("/gameOperatorPlay",function(req,res){
        var renderData = {
            "gameScore" : req.query.gameScore,
            "gameCount" : req.query.gameCount
        };

        res.render("gameOperator/gameOperatorPlay.ejs", renderData);
    });

    app.get("/gameOperatorPlayPro", function(req,res){

        var renderData = {
            "gameScore" : req.query.gameScore,
            "gameCount" : req.query.gameCount,
            "select" : req.query.select,
            "num1" : req.query.num1,
            "num2" : req.query.num2,
            "op" : req.query.op,
            "result" : req.query.result
        };

        res.render("gameOperator/gameOperatorPlayPro.ejs",renderData);
    });
}