const {Router} = require('express')
const router = Router()

const db = require('../../db/database.json')
router.get('/iecho',(req,res)=>{        
// router.get('/iecho?:text',(req,res)=>{     
    let position = db.findIndex(f=>f.text == req.query.text)
    let exists = position == -1 ? false:true 
    let newTxt = req.query.text.toString().split('').reverse().join('')        
    if(position == -1 ) 
        db.push({
            text:req.query.text,
            textInvert:newTxt,
            palindrome:isPalindrome(req.query.text,newTxt)
        })
    res.json({
        text:newTxt,
        exists:exists,
        palindrome:isPalindrome(req.query.text,newTxt)
    })
})

router.get('/getAll',(req,res)=>{        
    res.json({textList:db})
})

isPalindrome =(txt1,text2)=>{
    return txt1==text2
}

module.exports = router