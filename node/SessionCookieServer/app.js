const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

// 미들웨어 등록
// 쿠키 파싱
app.use(cookieParser('secret key'))
// 세션 설정
app.use(session({
    secret: 'secret key',
    resave: false,
    store: new FileStore({logFn: ()=>{}}),
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false
    }
}))

// 라우터
app.get('/', (req,res,next)=>{
    console.log(req.session);
    res.send('hello session')
})
app.post('/login', (req,res)=>{
    // 디비에 있는지 확인
    req.session.isLogin = true;
    req.session.userId = 1;
    req.session.save(()=>{
        res.send('login')
    });
})
app.get('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        if (err) console.error(err.message);
        else res.send("logout")
    })
})
app.get('/profile', isLogin, (req,res)=>{
    res.send("내 정보")
})

app.listen(9000, (err)=>{
    if (err) console.error(err.message);
    else console.log('server start');
})


function isLogin(req,res, next) {
    if (req.session.isLogin) next();
    else res.status(401).json({success: false, message: "넌 여기 못 와"})
}