module.exports = {
    index: (req,res) => {
        return res.render('index', {})
    },
    chiSiamo: (req,res) => {
        return res.render('chi-siamo', {})
    },
    eventi: (req,res) => {
        return res.render('eventi', {})
    },
    cataloghi: (req,res) => {
        return res.render('cataloghi', {})
    },
    brunchAfternoon: (req,res) => {
        return res.render('brunch-afternoon-tea', {})
    },
    shop: (req,res) => {
        return res.render('shop', {})
    },
    contatto: (req,res) => {
        return res.render('contatto', {})
    },
}
