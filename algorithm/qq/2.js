let enc_qq = [6,3,1,7,5,8,9,2,4]
qq=[]
let hand = 0
let sit = 9
while(hand < sit){
    qq[hand]=enc_qq[hand]
    hand++
    enc_qq[sit]=enc_qq[hand]
    hand++
    sit++
    qq.push(qq[hand])
}
console.log(qq.join(''))
