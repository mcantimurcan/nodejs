var Kullanici = require("../models/kullanici");



module.exports.indexGet = function(req,res) {
    res.render('login');
}

module.exports.indexPost = function(req,res) {
    console.log(req.body);
    res.render('login',{
        username: req.body.username,
        password: req.body.password
    });
}

module.exports.signupGet = function(req,res){
    res.render("signup");
}

module.exports.signupPost = function(req,res){

    var yeniKullanici = new Kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        email:req.body.email,
        kullaniciAdi:req.body.kullaniciAdi,
        sifre:req.body.sifre
    })

    yeniKullanici.save(function(err){
        if(err){
            console.log("kaydedilemedi");
        }
        else{
            res.redirect('/login/kullanicilarlistesi');
        }
    });
}    

module.exports.kullanicilarListesi = function(req,res){
    Kullanici.find(function(err,results){
        res.render("kullanicilarListesi", {kullanicilar: results});
    });
    
}

module.exports.kullaniciSil = function(req,res) {


    Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err){
            console.log("kullanıcı silinemedi")
        }else{
            res.redirect("/login/kullanicilarlistesi");
        }
    })

}
