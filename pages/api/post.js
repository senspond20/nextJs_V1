// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
// import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
      // 저장
       var write = '저장할 데이터';
        fs.writeFileSync('./data/test.txt',write)
        res.status(200).json({ name: 'File Save', data : write })

    } else if(req.method === 'GET'){
      // 읽기
      var read = fs.readFileSync('./data/test.txt');
      res.status(200).json({ name: 'File Read', data : read })
    } else{

    }
  }