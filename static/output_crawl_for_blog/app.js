const Nightmare = require('nightmare'), nightmare = Nightmare({ show : true })
const async = require('async')
const fs = require('fs')

let url = `https://batdongsan.com.vn/tin-thi-truong/p2`
let realData = [];

nightmare.goto(url).wait(1000)
    .evaluate(()=>{
        const links = document.querySelectorAll('.link_blue')
        let arrLink = []
        for(var i=0; i< links.length; i++){
            arrLink.push(links[i].href)
        }
        return arrLink;
    }).end().then( arrLink => {       
        crawlDetail(arrLink, function(err, res){
            console.log(res)
        })
    .catch(err => {
        console.log('ERROR: ',err.message)
    })
})
                                       
function crawlDetail(arr, cb){
    function test(item, cb){
        let night = new Nightmare();
        night.goto(item)
        .wait(1000)
        .evaluate(function(){
            try {
                let title = document.querySelectorAll('.detailsView-title-style')[0].innerText
                let time = document.querySelectorAll('.date-first')[0].innerText
                let summary = document.querySelectorAll('.summary')[0].innerText
                let content = document.querySelector('#divContents').innerHTML

                return {title : title, time : time , summary : summary, content : content}

            }
            catch(err){
                console.log('Loi khi crawl')
                return {}
            }
        }).end()
        .then(function(res){
            if(!res) {
                cb(null, {})
            }
        
            try{
                realData.push(res);
                exportJson(realData, './tintuc_TT_2.json');
                cb(null, res);
            } catch(err){
                console.log(err)
            }
        })
    }
    async.mapLimit(arr, 1, test, function(err, res){
        cb(null, res)
    })
}

function exportJson(arr, filename) {
    // chuyển dữ liệu từ mảng arr sang json
    let json = {};
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        json[i] = arr[i];
    }
    let jsonString = JSON.stringify(json);
    // lưu vào file json trong máy
    fs.writeFile(filename, jsonString, (err) => {
        if (err)
            throw err;
        console.log('Sản phẩm lưu vào file json ok!');
    });
}